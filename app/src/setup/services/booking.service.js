import instance from "./api.service";

const endPoint = '/booking';

const createBooking = async (booking) => {
    const response = await instance.post(`${endPoint}`, booking)
    return response.data;
}

const bookingService = {
    createBooking
}

export default bookingService;