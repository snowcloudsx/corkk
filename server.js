import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { bootstrap } from "@mercuryworkshop/proxy-bootstrap";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const { routeRequest, routeUpgrade } = await bootstrap();

const app = express();

app.use((req, res, next) => {
	if (routeRequest(req, res)) return;
	next();
});

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

const server = http.createServer(app);

server.on("upgrade", routeUpgrade);

const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';
server.listen(port, host, () => {
	console.log(`Scramjet proxy running at http://${host}:${port}`);
});
