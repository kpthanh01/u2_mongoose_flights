const db = require('./db')
const {Airport, Flight} = require('./models')

const findAllFlights = async() => {
  let allFlights = await Flight.find({})
  let allAirports = await Airport.find({})
  let detailedFlights = allFlights.map(flight => {
    allAirports.forEach(airport => {
      if(flight.departingAirport.equals(airport._id)) {
        flight._doc.airport = airport.name
      }
    })
    return flight
  })
  console.log(detailedFlights)
}

const findFlightByID = async(id) => {
  const flight = await Flight.findById(id)
  console.log(flight)
}

const findAirportByID = async(id) => {
  const airport = await Airport.findById(id)
  console.log(airport)
}

const createFlight = async(newFlight) => {
  const flight = await Flight.create(newFlight)
  console.log(flight)
}

const createAirport = async(newAirport) => {
  const airport = await Airport.create(newAirport)
  console.log(airport)
}

const updateFlightNumber = async(flightID) => {
  const updated = await Flight.updateOne(
    {_id: new ObjectId(`${flightID}`)},
    {flight_number: 50}
  )
  console.log(updated)
}

const updateAirportCode = async(airportID) => {
  const updated = await Airport.updateOne(
    {_id: new ObjectId(`${airportID}`)},
    {code: '12hur4'}
  )
  console.log(updated)
}

const deleteFlight = async(flightID) => {
  const deleted = await Flight.deleteOne({_id: flightID})
  console.log(deleted)
}

const deleteAirport = async(airportID) => {
  const deleted = await Airport.deleteOne({_id: airportID})
  console.log(deleted)
}



async function main() {
  const hartfield = await Airport.find({name: 'Hartfield-Jackson'})
  const lax = await Airport.find({name: 'Los Angeles International'})
  const richmond = await Airport.find({name: 'Richmond International'})
  const houston = await Airport.find({name: 'Houston Airport'})
  let airport = {
    name: 'Orlando International',
    location: 'Florida',
    code: 'ihu15'
  }
  let flight = {
    airline: 'Alaska Airlines',
    flight_number: 245,
    price: 700,
    numberOfSeats: 70,
    departingAirport: hartfield[0]._id,
    arrivalAirport: lax[0]._id,
    departure: new Date('2024-10-17T02:15:30'),
  }
  let flightId = '670710aeb3129078276b98e9'
  let airportId = '67070e66ece4c1de19e7e1b3'
  try {
    await findAllFlights()
    // await findFlightByID(flightId)
    // await findAirportByID(airportId)
    // await createFlight(flight)
    // await createAirport(airport)
    // await deleteFlight(flightId)
    // await deleteAirport(airportId)
   
  } catch(error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

main()