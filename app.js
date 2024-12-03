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

const cardContainerTwoArray = [{
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
        cardImage: "./Images/beetroot.jpg",
        cardName: 'Milk & Dairy',
        cardLocation: 'Process Food',
    },
}]

<div class="card-item">
                    <div class="card-img">
                        <img src="./Images/beetroot.jpg" alt="">
                    </div>
                    <h5>Beetroot</h5>
                    <p>(Local shop)</p>
                    <h6>500 gm.</h6>
                    <p>17. <sup>29$</sup></p>
                    <div class="card-icon-container">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>