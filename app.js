const addNewProductBtn = document.querySelector(".addProductBtn")
console.log(addNewProductBtn)
const formElement = document.getElementById("form")

const cardsContainer = document.querySelector(".cards-container")

const cardContainerTwo = document.querySelector(".card-items-container-two")


addNewProductBtn.addEventListener('click', ()=> {
    formElement.classList.toggle("visible")
    console.log(addNewProductBtn)
})

const cardsContainerArray = [
    {
        id: 1,
        productName: 'Vegetable',
        productLocation: 'Local market',
        cardImage: './Images/brocolli-icon.jpg'
    },
    {
        id: 2,
        productName: 'Snacks & Breads',
        productLocation: 'In store delivery',
        cardImage: './Images/9851130.jpg'
    },
    {
        id: 3,
        productName: 'Fruits',
        productLocation: 'Conical Free',
        cardImage: './Images/18965845.jpg'
    },
    {
        id: 4,
        productName: 'Chicken Legs',
        productLocation: 'Frozen Meal',
        cardImage: './Images/Tasty fried chicken -1.jpg'
    },
    {
        id: 5,
        productName: 'Milk & Dairy',
        productLocation: 'Process Food',
        cardImage: './Images/milk-jug-bottle-isolated-transparent-background_191095-25887.jpg'
    },

]


const cardItems = cardsContainerArray.forEach((card) => {
        const cardItem = `
            <div class="card-item">
                <div class="card-text">
                    <h3>${card.productName}</h3>
                    <p>${card.productLocation}</p>
                </div>
                <div class="image-container">
                    
                    <img src="${card.cardImage}" alt="">
                </div>
            </div>
        `
        cardsContainer.insertAdjacentHTML('afterbegin', cardItem)
})

// const cardContainerTwoArray = [
//     {
//         id: 1,
//         cardImage: "./Images/beetroot.jpg",
//         cardName: 'Milk & Dairy',
//         cardLocation: 'Process Food',
//         card: '500 gm.',
//         cardPrice: '17. <sup>29$</sup>',
//         cardIcon: '<i class="fa-solid fa-plus"></i>'
//     },
//     {
//         id: 2,
//         cardImage: "./Images/fresh-meat-slices-raw-meat-with-leaves-top-view-transparent-background_84443-1899.jpg",
//         cardName: 'Italian Avacado',
//         cardLocation: 'Local shop',
//         card: '500 gm.',
//         cardPrice: '12. <sup>29$</sup>',
//         cardIcon: '<i class="fa-solid fa-plus"></i>'
//     },
//     {
//         id: 3,
//         cardImage: "./Images/3d-red-soda-can-isolated-beer-cola-tin-bottle_107791-26875.jpg",
//         cardName: 'Szam amm',
//         cardLocation: 'Process food',
//         card: '500 gm.',
//         cardPrice: '14. <sup>29$</sup>',
//         cardIcon: '<i class="fa-solid fa-plus"></i>'
//     },
//     {
//         id: 4,
//         cardImage: "./Images/beetroot.jpg",
//         cardName: 'Beef Mixed',
//         cardLocation: 'Cut Bone',
//         card: '500 gm.',
//         cardPrice: '16. <sup>29$</sup>',
//         cardIcon: '<i class="fa-solid fa-plus"></i>'
//     },
//     {
//         id: 5,
//         cardImage: "./Images/3d-red-soda-can-isolated-beer-cola-tin-bottle_107791-26875.jpg",
//         cardName: 'Beef Mixed',
//         cardLocation: 'Cut Bone',
//         card: '500 gm.',
//         cardPrice: '18. <sup>29$</sup>',
//         cardIcon: '<i class="fa-solid fa-plus"></i>'
//     },
//     {
//         id: 6,
//         cardImage: "./Images/3d-red-soda-can-isolated-beer-cola-tin-bottle_107791-26875.jpg",
//         cardName: 'Plant Hunter',
//         cardLocation: 'Frozen pack',
//         card: '500 gm.',
//         cardPrice: '17. <sup>29$</sup>',
//         cardIcon: '<i class="fa-solid fa-plus"></i>'
//     },
//     {
//         id: 7,
//         cardImage: "./Images/3d-red-soda-can-isolated-beer-cola-tin-bottle_107791-26875.jpg",
//         cardName: 'Deshi Gajor',
//         cardLocation: 'Local Carrot',
//         card: '500 gm.',
//         cardPrice: '12. <sup>29$</sup>',
//         cardIcon: '<i class="fa-solid fa-plus"></i>'
//     },
//     {
//         id: 8,
//         cardImage: "./Images/3d-red-soda-can-isolated-beer-cola-tin-bottle_107791-26875.jpg",
//         cardName: 'Deshi Shosha',
//         cardLocation: 'Local Cucumb',
//         card: '500 gm.',
//         cardPrice: '14. <sup>29$</sup>',
//         cardIcon: '<i class="fa-solid fa-plus"></i>'
//     },
//     {
//         id: 9,
//         cardImage: "./Images/3d-red-soda-can-isolated-beer-cola-tin-bottle_107791-26875.jpg",
//         cardName: 'Lays chips',
//         cardLocation: 'Bacon',
//         card: '500 gm.',
//         cardPrice: '16. <sup>29$</sup>',
//         cardIcon: '<i class="fa-solid fa-plus"></i>'
//     },
//     {
//         id: 10,
//         cardImage: "./Images/3d-red-soda-can-isolated-beer-cola-tin-bottle_107791-26875.jpg",
//         cardName: 'Beef Mixed',
//         cardLocation: 'Cut Bone',
//         card: '500 gm.',
//         cardPrice: '18. <sup>29$</sup>',
//         cardIcon: '<i class="fa-solid fa-plus"></i>'
//     },
// ]


// const cardItemsTwo = cardContainerTwoArray.forEach((cardTwo) => {
//                     const cardItemTwo = `
//                     <div class="card-item">
//                         <div class="card-img">
//                             <img src="${cardTwo.cardImage}" alt="">
//                         </div>
//                         <h5>${cardTwo.cardName}</h5>
//                         <p>(${cardTwo.cardLocation})</p>
//                         <h6>${cardTwo.cardDetail}</h6>
//                         <p>${cardTwo.cardPrice}</p>
//                         <div class="card-icon-container">
//                         ${cardTwo.cardIcon}
//                         </div>
//                     </div>
//                     `
//                     cardsContainer.insertAdjacentHTML('afterbegin', cardItemTwo)
//  })