const router = require('express').Router();
const bookingController = require('../controllers/booking.controller');

const endPoint = '/booking'

router.get(`${endPoint}/`, bookingController.getAllBookings);
router.get(`${endPoint}/:id`, bookingController.getBookingById);
router.post(`${endPoint}/`, bookingController.create);
router.put(`${endPoint}/:id`, bookingController.update);
router.delete(`${endPoint}/:id`, bookingController.delete);

module.exports = router;