// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

import axios from 'axios'


const container = document.querySelector('.topics')



axios.get("https://lambda-times-api.herokuapp.com/topics")
    .then((results) => {
        console.log(results.data.topics)
            // console.log(results)
        const tabArray = results.data.topics
        tabArray.forEach((topic) => {
            let div = document.createElement('div');
            div.classList.add('tab');
            container.appendChild(div); // adding created div each iteration to the markup
            div.textContent = topic; // adding textcontent of each topic

        })
    })
    .catch((err) => {
        err = "error getting data"
        console.log(err)
    })