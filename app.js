"use strict";
//See: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
const output = document.querySelector(".output");
//console.log(output); // <div class="output"></div>

//output.textContent = "New Content";
//console.log(output); // <div class="output">New content</div>

// Storing json data in a variable
//const localJsonFile = "local.json";
const localJsonFile = "data/filtered.json";
//const localJsonFile = "http://127.0.0.1:8000?student_id=1001735333";


// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
// without waiting for stylesheets, images, and subframes to finish loading.
window.addEventListener("DOMContentLoaded", () => {
  // console.log('DOM fully loaded and parsed');
  output.textContent = "Loading....";
  // Make fetch request to local.json file
  fetch(localJsonFile)
    .then((response) => 
    {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    }) // and the response we get is in json format
    .then((data) => {
      // we call that data here
      // console.log(data); // check the data on the console
      output.innerHTML = ""; // Initial content is empty
      data.forEach((el) => {
        // loop through the json data using forEach method
        // console.log(el);
        jsonList(el); // calling jsonList function
      });
    });
});

// Create a function to display the json data dynamically on the webpage
function jsonList(item) {
  // Create a new div element dynamically
  const div = document.createElement("div");
  // get the required details from the local.json file to the div element using innerHTML
  div.innerHTML = `
        ${item.student_id} got Parcial 1: ${item.Parcial_1.value}`;
  // attach the newly created div element to the original div element, in this case to the class '.output'
  output.append(div);
  // Add styling to the displayed content
  div.classList.add("active");
}
