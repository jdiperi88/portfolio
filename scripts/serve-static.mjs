import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { dirname, extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";
const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".ttf": "font/ttf"
};

const server = createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://localhost:${port}`);
  const cleanPath = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
  let filePath = join(root, cleanPath === "/" ? "index.html" : cleanPath);
  let statusCode = 200;

  try {
    const info = await stat(filePath);
    if (info.isDirectory()) {
      filePath = join(filePath, "index.html");
    }
  } catch {
    statusCode = 404;
    filePath = join(root, "404.html");
  }

  response.statusCode = statusCode;
  response.setHeader("Content-Type", types[extname(filePath)] || "application/octet-stream");
  createReadStream(filePath)
    .on("error", () => {
      response.statusCode = 404;
      response.end("Not found");
    })
    .pipe(response);
});

server.listen(port, host, () => {
  console.log(`Serving dist at http://${host}:${port}`);
});
