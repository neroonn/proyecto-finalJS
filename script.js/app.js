let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
const buy = document.getElementById('buy')
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Nike Jordan',
        image: '1.webp',
        price: 150
    },
    {
        id: 2,
        name: 'Nike Air',
        image: '2.webp',
        price: 120
    },
    {
        id: 3,
        name: 'Nike Jordan 2',
        image: '3.webp',
        price: 290
    },
    {
        id: 4,
        name: 'Nike Jordan retro',
        image: '4.webp',
        price: 120
    },
    {
        id: 5,
        name: 'Nike Court',
        image: '5.webp',
        price: 90
    },
    {
        id: 6,
        name: 'Nike Air',
        image: '6.webp',
        price: 100
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()},00</div>
            <button onclick="addToCard(${key})">Añadir al carrito</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()},00</div>
                <div>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})"><i class="fa-solid fa-circle-xmark"></i></button>
                </div>`;
                listCard.appendChild(newDiv);
        }

    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    console.log(key, quantity);
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

buy.onclick = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Compra realizada',
        showConfirmButton: false,
        timer: 1500
      })
}

