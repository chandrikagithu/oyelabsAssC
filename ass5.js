const request = require("request-promise");

function getGoogleHomePage() {
  return request("http://www.google.com")
    .then((body) => {
      console.log("Successfully fetched Google homepage");
      return body;
    })
    .catch((error) => {
      console.error("Error fetching Google homepage:", error);
      throw error;
    });
}

getGoogleHomePage()
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
