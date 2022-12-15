import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import bookingService from "../../setup/services/booking.service";

const FormBooking = ({id, fetchPost, shop}) => {

    const [booking, setBooking] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setBooking({
            ...booking,
            [name]: value
        })
    }

    const handleBooking = async (e) => {
        console.log(shop);
        booking.post = id
        booking.shop = shop
        try {
            const response = await bookingService.createBooking(booking);
            console.log(response);
            fetchPost();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Box component="form" onSubmit={(e) => handleBooking(e)} sx={{display:"flex", flexDirection: "column", maxWidth: 345, justifyContent: "space-around", height: 150}}>
            <TextField type="text" name="telephoneNumber" label="phone number" onChange={(e) => handleChange(e)}/>
            <Button type="submit">Reserver</Button>
        </Box>
    );
}
 
export default FormBooking;