// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const { default: Axios } = require("axios");


const cardContainer = document.querySelector('.cards-container');

function makeCards(data) {
    const cardDiv = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const h3 = document.createElement('h3')
    const cardAuthor = document.createElement('div');
    const cardImg = document.createElement('img');
    const imgContainer = document.createElement('div');
    const span = document.createElement('span');

    cardDiv.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    imgContainer.classList.add('img-container');

    cardDiv.appendChild(cardHeadline);
    cardHeadline.appendChild(cardAuthor);
    cardHeadline.appendChild(h3);
    cardAuthor.appendChild(imgContainer)
    cardAuthor.appendChild(span);
    imgContainer.appendChild(cardImg);


    // data.forEach(element => {
    //     h3.textContent = element.headline;
    //     cardImg.src = element.authorPhoto;
    //     span.textContent = element.authorName;
    // })
    for (let i = 0; i < data.length; i++) {
        h3.textContent = data[i].headline;
        cardImg.src = data[i].authorPhoto;
        span.textContent = data[i].authorName;
    }
    cardDiv.addEventListener('click', (event) => {
        console.log(data.headline)
    })

    return cardDiv
}



axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(results => {
        // console.log(results)
        const contents = Object.values(results.data.articles)
            // console.log(contents);
        const concatContents = [].concat.apply([], contents)
            // console.log(concatContents)
        concatContents.map(ele => {
            cardContainer.appendChild(makeCards(concatContents))
        })
    })
    .catch(error => {
        console.log("an error occured")
    })