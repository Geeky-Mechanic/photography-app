import connect from "../db.js";
import Availability from "../models/Availability.js";
import Booking from "../models/Booking.js";

export async function GET(event) {
    try {
        await connect();

        const hours = await Availability.find({
            day: {
                $gte: new Date().getTime(),
            }
        });

        return {
            status: 200,
            body: hours,
            headers: {
                "Content-Type": "application/json",
            },
        }

    } catch (err) {
        return {
            status: 500,
            body: err,
            headers: {
                "Content-Type": "application/json",
            },
        }
    }
};

export async function POST(event) {
    try {
        await connect();
        const req = await event.request.json();
        const fullDate = new Date(parseInt(req.date))


        const exists = await Booking.find({
            date: fullDate
        });

        if ((exists && exists.length === 0) || !exists) {
            const hour = fullDate.getUTCHours() - 4;
            const day = fullDate.setUTCHours(4);

            const isAvailable = await Availability.find({
                day,
                hours: {
                    $elemMatch: {
                        $eq: hour.toString()
                    },
                },
            });

            if (isAvailable && isAvailable.length === 1) {

                const newBooking = new Booking({
                    ...req,
                    answered: false
                });
                const savedBooking = await newBooking.save();

                await Availability.findOneAndUpdate({
                    day
                }, {
                    $pull: {
                        hours: {
                            $in: [hour.toString(), (hour + 1).toString(), (hour + 2).toString()]
                        }
                    },
                });

                return {
                    status: 200,
                    body: savedBooking,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            } else {
                return {
                    status: 400,
                    body: "Not available",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            }
        } else {
            return {
                status: 400,
                body: "Already booked",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        }
    } catch (err) {
        return {
            status: 500,
            body: err,
            headers: {
                "Content-Type": "application/json",
            },
        }
    }
}