import "dotenv/config";
import { createServer } from "node:http";
import App from "./app.js";
import connectDB from "./config/db.js";
class ServerApp {
    PORT = Number(process.env.PORT);
    app;
    server;
    _db;
    constructor() {
        this.app = new App().app;
        this.server = createServer(this.app);
        this._db = new connectDB();
    }
    async start() {
        await this._db.connect();
        this.server.listen(this.PORT, () => {
            console.log(`Server is running on ${this.PORT}`);
        });
    }
}
const serverApp = new ServerApp();
serverApp.start();
//# sourceMappingURL=server.js.map