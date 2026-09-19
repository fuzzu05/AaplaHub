import { db } from '../../prisma/db.js';

async function run() {
  try {
    console.log("SQL Keys:", Object.keys(db.sql));
    if (db.sql.serviceApplication) {
        console.log("Found db.sql.serviceApplication");
    } else if (db.sql.ServiceApplication) {
        console.log("Found db.sql.ServiceApplication");
    }
  } catch (e) {
    console.error(e);
  }
}

run();
