var sliderImages = Array.from(deleteproduct.querySelectorAll(''))

let catsdiv = document.querySelector("#products");
let cashierItemsDiv = document.querySelector("#cashier-items");
let products = {
    burgers: [
        {
            name: "cheese burger",
            weight: "140g",
            price: 3.50,
            img: "./assets/burger.png"
        },
        {
            name: "chicken-delux",
            weight: "240g",
            price: 4.25,
            img: "./assets/burger.png"
        },
        {
            name: "big-john",
            weight: "650g",
            price: 5,
            img: "./assets/burger.png"
        },
        {
            name: "spicy-chicken",
            weight: "150g",
            price: 4,
            img: "./assets/burger.png"
        },
    ],
    drinks: [
        {
            name: "cola",
            price: 2,
            img: "./assets/cola.png"
        },
        {
            name: "mirinda",
            price: 2,
            img: "./assets/cola.png"
        },
        {
            name: "sprite",
            price: 2,
            img: "./assets/cola.png"
        }
    ],
    pizza: [
        {
            name: "cheese pizza",
            price: 20,
            img: "./assets/pizza.png"
        },
        {
            name: "margarita",
            price: 22,
            img: "./assets/pizza.png"
        },
        {
            name: "chicken ranch",
            price: 25,
            img: "./assets/pizza.png"
        },
        {
            name: "sea ranch",
            price: 30,
            img: "./assets/pizza.png"
        },
    ],
    wok: [
        {
            name: "chicken wok",
            price: 10,
            img: "./assets/wok.png"
        },
        {
            name: "turkey wok",
            price: 10,
            img: "./assets/wok.png"
        },
        {
            name: "meet wok",
            price: 10,
            img: "./assets/wok.png"
        },
    ],
    desserts: [
        {
            name: "cheese cake",
            price: 5,
            img: "./assets/dessert.png"
        },
        {
            name: "molten cake",
            price: 7,
            img: "./assets/dessert.png"
        },
        {
            name: "muffin cake",
            price: 6,
            img: "./assets/dessert.png"
        },
    ],
    pasta: [
        {
            name: "negresko",
            price: 20,
            img: "./assets/pasta.png"
        },
        {
            name: "mak and cheese",
            price: 18,
            img: "./assets/pasta.png"
        },
        {
            name: "makarona bel salsa",
            price: 14,
            img: "./assets/pasta.png"
        },
    ]
}
let cats = Object.keys(products);

function renderproducts(catname) {
    catsdiv.innerHTML = "";
    let productstoFetch = products[catname];
    productstoFetch.forEach((el) => {
        catsdiv.innerHTML += `<div class="product col-3 d-flex flex-column align-items-center pt-3" onclick="addtocart('${catname}' , ${index})">
        <img src="${el.img}" alt="">
        <p>${el.name}</p>
        <p id="price">${el.price}$</p>
        </div>`;
    });
}


let cart = []



function rendercarts() {
    cashierItemsDiv.innerHTML = ""
    cart.forEach((el, index) => {
        cashierItemsDiv.innerHTML += `<img src="${el.img}" alt="">
        <p>qty : <span id="qty">${el.qty}</span></p>
        <button class="btn btn-danger col-2" onclick="deleteproduct(${index})">X</button>
        <p>Total Price: <span id="total-sum-value">${el.price * el.qty}</span>$</p>`
    })
    let sum = 0;
    cart.forEach((el) => {
        let x = +el.price * el.qty;
        sum += x
    })
    let Totalcell = document.querySelector("#total-sum-value")
    Totalcell.innerHTML = sum;
}

function addtocart(key, index) {
    let obj = products[key][index]
    let isvalid = cart.findIndex((el) => {
        return el.name == obj.name
    })
    if (isvalid == -1) {
        obj.qty = 1
        cart.push(obj)
    } else {
        cart[isvalid].qty++
    }
    rendercarts()
}

function deleteproduct(index) {
    cart.splice(index, 1)
    rendercarts();
}