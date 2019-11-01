// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardEntry = document.querySelector(".cards-container");

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        const articles = Object.entries(response.data.articles);
        articles.forEach(item => {
            item[1].forEach(i => {
                const newArticle = CardMaker(i);
                cardEntry.appendChild(newArticle);
            });
        });
    });

function CardMaker(obj){
    const card = document.createElement("div"),
          cardHeadline = document.createElement("div"),
          cardAuthor = document.createElement("div"),
          imgContainer = document.createElement("div"),
          authorImg = document.createElement("img"),
          authorName = document.createElement("span");

    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    cardAuthor.appendChild(authorName);

    card.classList.add("card");
    cardHeadline.classList.add("headline");
    cardAuthor.classList.add("author");
    imgContainer.classList.add("img-container");

    cardHeadline.textContent = obj.headline;
    authorName.textContent = obj.authorName;
    authorImg.src = obj.authorPhoto;

    return card;
};