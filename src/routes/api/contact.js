import connect from "./db.js";
import Contact from './models/Contact.js';

export async function POST(event) {
    const req = await event.request.json();
    const name = req.name;
    const email = req.email;
    const lName = req.lname;
    const subj = req.subj;
    const desc = req.desc;
    try {
        await connect();
        //save form information to db
        const newContact = new Contact({
            name,
            email,
            lName,
            subj,
            desc,
            date: new Date().getTime(),
            answered: false,
        })
        const saved = await newContact.save();
        return {
            status: 200,
        }
    } catch (err) {
        console.log(err);
        return {
            body: err,
            status: 500,
        }
    }

};