import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!, {ssl: false});


async function createTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL
    )
  `;
}

async function createLoginTable(){
  await sql`
    CREATE TABLE IF NOT EXISTS login (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `;
}

export async function GET() {
  try {
    // createTable();
    createLoginTable()
    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}