import connect from "./db.js";
import Contact from './models/Contact.js';

export async function POST(event){
    const req = await event.request.json();
    try {
        await connect();
        //save form information to db
    }catch (err){

    }   

};