// lib/server.ts
import app from "./app";
const PORT = 3000;
import { createConnection } from 'typeorm';

createConnection()

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})