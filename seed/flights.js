const db = require('../db')
const { Flight, Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
  const hartfield = await Airport.find({name: 'Hartfield-Jackson'})
  const lax = await Airport.find({name: 'Los Angeles International'})
  const richmond = await Airport.find({name: 'Richmond International'})
  const houston = await Airport.find({name: 'Houston Airport'})

 const flights = [
  {
    airline: 'Delta',
    flight_number: 27,
    price: 500,
    numberOfSeats: 85,
    departingAirport: hartfield[0]._id,
    arrivalAirport: lax[0]._id,
    departure: new Date('2024-12-17T03:24:00'),
  },
  {
    airline: 'SouthWest',
    flight_number: 27,
    price: 500,
    numberOfSeats: 85,
    departingAirport: richmond[0]._id,
    arrivalAirport: houston[0]._id,
    departure: new Date('2024-11-17T08:45:00'),
  },
  {
    airline: 'Frontier',
    flight_number: 27,
    price: 500,
    numberOfSeats: 85,
    departingAirport: lax[0]._id,
    arrivalAirport: houston[0]._id,
    departure: new Date('2025-01-09T12:15:00'),
  },
  {
    airline: 'Spirit',
    flight_number: 27,
    price: 500,
    numberOfSeats: 85,
    departingAirport: houston[0]._id,
    arrivalAirport: hartfield[0]._id,
    departure: new Date('2024-12-20T11:00:00'),
  },
  {
    airline: 'Spirit',
    flight_number: 27,
    price: 500,
    numberOfSeats: 85,
    departingAirport: richmond[0]._id,
    arrivalAirport: hartfield[0]._id,
    departure: new Date('2025-02-10T16:24:00'),
  },
  {
    airline: 'Delta',
    flight_number: 27,
    price: 500,
    numberOfSeats: 85,
    departingAirport: lax[0]._id,
    arrivalAirport: richmond[0]._id,
    departure: new Date('2024-10-25T19:16:00'),
  },
  {
    airline: 'Frontier',
    flight_number: 27,
    price: 500,
    numberOfSeats: 85,
    departingAirport: hartfield[0]._id,
    arrivalAirport: richmond[0]._id,
    departure: new Date('2025-01-08T05:45:00'),
  },
 ]

 await Flight.insertMany(flights)
}

const run = async() => {
  await main()
  db.close()
}

run()