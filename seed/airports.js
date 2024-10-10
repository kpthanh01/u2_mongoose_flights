const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
  const airports = [
    {
      name: 'Hartfield-Jackson',
      location: 'Georgia',
      code: '123abc'
    },
    {
      name: 'Los Angeles International',
      location: 'California',
      code: 'ht52et9'
    },
    {
      name: 'Richmond International',
      location: 'Virginia',
      code: 'rnbg31685'
    },
    {
      name: 'Houston Airport',
      location: 'Texas',
      code: 'jf48vd'
    },
  ]

  await Airport.insertMany(airports)
  console.log('Created Airports')
}

const run = async() => {
  await main()
  db.close()
}

run()