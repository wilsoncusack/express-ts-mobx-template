// lib/server.ts
import app from "./app";
import { createConnection, ConnectionOptions } from 'typeorm';
import {parse} from 'pg-connection-string';

const connectionOptions = parse(process.env.DATABASE_URL);


createConnection(<ConnectionOptions>{
    type: "postgres",
    host: connectionOptions.host,
    port: connectionOptions.port || 5432,
    username: connectionOptions.user,
    password: connectionOptions.password,
    database: connectionOptions.database,
    ssl: true,
    entities: ["dist/entity/**/*.js"]
}).then(connection => {

	const PORT = process.env.PORT || 3001
	app.listen(PORT, () => {
	    console.log('Express server listening on port ' + PORT);
	})
})
