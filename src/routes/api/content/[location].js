import connect from '../db.js';
import Content from '../models/Content.js';

export async function GET(event){
    const location = event.params.location;
    console.log(location);
    try {
        await connect();
        //query db for content in that location
        const content = await Content.find({
            location: location
        });

        return{
            status: 200,
            body: content,
        }
    }catch(err){
        return {
            status: 500,
            body: err,
        }
    }
};