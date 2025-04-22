"use server";
import postgres from "postgres";


const sql = postgres(process.env.DATABASE_URL!, {ssl: false});

export async function insertUser(name:string, email:string) {
  await sql`
    INSERT INTO users (name, email) VALUES (${name}, ${email})
  `
  console.log("New user is added to the database!");
}


export async function insertLogin(email:string, password:string){
  await sql`
    INSERT INTO login (email, password) VALUES (${email},${password})
  `
  console.log("New login is added to the loging database!");
}

export async function getLogin(){

  try {
    const login =  await sql`SELECT * FROM login`;
    console.log("You get the all users");
    console.log(login);
    return login;
  } catch (error) {
    console.log(error);
  }

}