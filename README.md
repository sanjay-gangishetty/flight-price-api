# Flight-Price-API

# Flight Price Fetcher

This is a Node.js application that fetches flight prices between two cities based on the provided source, destination, and date. The application provides a simple form to input the flight details and retrieve the corresponding prices.

## Features

- User-friendly form to input source, destination, and date.
- Fetches flight prices from a predefined JSON file.
- Displays the flight prices for different airlines.
- Error handling for missing parameters and no flight prices found.

## Technologies Used

- Node.js
- Express.js
- Body-parser
- HTML
- JSON

## Getting Started

To get started with the Flight Price Fetcher application, follow these steps:

1. Clone the repository: 

   git clone https://github.com/sanjay-gangishetty/flight-price-api.git
   
2. Install the dependencies:
   
   cd flight-price-fetcher
   npm install
   
3. Start the server:
   
   npm start

4. Open your browser and navigate to http://localhost:3000/flightprices

5. Fill in the source, destination, and date in the form and click "Check Flights" to retrieve the flight prices.

JSON Flight Data :
The flight prices are fetched from a JSON file located at flightDetails.json. The file contains an array of flight objects, each representing a flight with properties such as source, destination, date, airline, and price.

License: 
This project is licensed under the MIT License.



   

