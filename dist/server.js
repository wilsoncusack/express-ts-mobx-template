"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/server.ts
const app_1 = require("./app");
const PORT = 3000;
const typeorm_1 = require("typeorm");
const pg_connection_string_1 = require("pg-connection-string");
const connectionOptions = pg_connection_string_1.parse(process.env.DATABASE_URL);
typeorm_1.createConnection({
    type: "postgres",
    host: connectionOptions.host,
    port: connectionOptions.port || 5432,
    username: connectionOptions.user,
    password: connectionOptions.password,
    database: connectionOptions.database,
    ssl: true,
    entities: ["dist/entity/**/*.js"]
}).catch(error => console.log(error));
app_1.default.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
//# sourceMappingURL=server.js.map