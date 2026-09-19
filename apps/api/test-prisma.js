import { db } from './src/prisma/db.js';

async function run() {
  try {
    const apps = await db.orm.public.ServiceApplication;
    console.log("Without where, await gives type:", typeof apps, "IsArray:", Array.isArray(apps));
    console.log("Keys:", Object.keys(apps));
    
    const appsWhere = await db.orm.public.ServiceApplication.where({ userId: 1 });
    console.log("With where, await gives type:", typeof appsWhere, "IsArray:", Array.isArray(appsWhere));
    console.log("Keys:", Object.keys(appsWhere));
    
  } catch (e) {
    console.error(e);
  }
}

run();
