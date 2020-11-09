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


axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then((results) => {
        console.log(results);
        const javascript = results.data.articles.javascript;
        const bootstrap = results.data.articles.bootstrap;
        const jquery = results.data.articles.jquery;
        const node = results.data.articles.node;
        const technology = results.data.articles.technology;
        // console.log(node)
        // console.log(javascript)
        bootstrap.forEach((ele) => { //getting all the data from each object
            cardMaker(ele);
        });

        javascript.forEach((ele) => {
            cardMaker(ele);
        });

        jquery.forEach((ele) => {
            cardMaker(ele);
        });

        node.forEach((ele) => {
            cardMaker(ele);
        });

        technology.forEach((ele) => {
            cardMaker(ele);
        });
    })
    .catch((err) => {
        err = 'error getting data'
        console.log(err);
    });


const cardContainer = document.querySelector('.cards-container');


function cardMaker(articles) {
    const card = document.createElement("div");
    const cardHeadline = document.createElement("div");
    const authorDiv = document.createElement("div");
    const imgContainer = document.createElement("div");
    const cardImg = document.createElement("img");
    const span = document.createElement("span");
    const h4 = document.createElement('h4')

    card.appendChild(cardHeadline);
    card.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    imgContainer.appendChild(cardImg);
    authorDiv.appendChild(span);
    span.appendChild(h4)
    cardContainer.appendChild(card);

    card.className = "card"; //class names
    authorDiv.className = "author";
    cardHeadline.className = "headline";
    imgContainer.className = "img-container";

    h4.textContent = articles.authorName;
    cardHeadline.textContent = articles.headline; // adding text
    cardImg.src = articles.authorPhoto;


    card.addEventListener("click", () => {
        console.log(articles.headline);
    });
    return card
}