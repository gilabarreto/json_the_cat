const request = require('request');
const args = process.argv;

const breedFetcher = function(breed) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

    if (error) {
      console.log('error:', error); // print the error if one occurred
      return error;
    } else if (response.statusCode !== 200) {
      console.log('statusCode:', response.statusCode); // print the response status code if it is 404.
      return response.statusCode;
    } else if (body === "[]") {
      console.log("Breed not found.");
      return body;
    }

    const data = JSON.parse(body); // deserialization of body

    console.log(data[0].description);

  });
};

breedFetcher(args[2]);