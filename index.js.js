    let products = [
    { id: 0, name: "CURR-219 New Smart Watch", description: "$40.99 ", image: "https://www.currenwatches.com/cdn/shop/products/Currensmartwatch218_650x.jpg?v=1655203460", is_featured: false },
    { id: 1, name: "Classic camel", description: " $25.99", image: "https://www.currenwatches.com/cdn/shop/products/1_4f1e37e4-1833-4952-9d6a-7ad0c51a4ef3_650x.jpg?v=1387007582", is_featured: false },
    { id: 2, name: "Omnitrix ben10", description: "$45.99", image: "https://www.currenwatches.com/cdn/shop/products/currennewmenswatch_650x.jpg?v=1647427539", is_featured: false },
    { id: 3, name: "Formal Luminious", description: "$20.99", image: "https://cdn.shopify.com/s/files/1/0570/2447/9421/products/curren-mens-watches-top-luxury-brand-waterproof-sport-wrist-watch-chronograph-quartz-military-genuine-leather-relogio-masculino-493519.jpg?v=1674830047", is_featured: false },
    { id: 4, name: "Chronograph mens watch", description: "$30.99", image: "https://thefashionworld.com.pk/wp-content/uploads/2022/12/CURREN-Watches-Men-s-Sport-Quartz-Chronograph-Wristwatches-Luxury-Stainless-Steel-Clock-with-Luminous-Watch-Relogio.jpg_Q90.jpg_.webp", is_featured: false },
    { id: 5, name: "Womens flourish", description: "$19.99", hidden_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates mollitia repellendus nihil.", image:     "https://static-01.daraz.pk/p/5db32dff2236dc6f3146aa5da7201a78.jpg", is_featured: true },
    { id: 6, name: "Womens pinky", description: "$18.99", image: "https://www.currenwatches.com/cdn/shop/products/currenwatches407_650x.jpg?v=1591722489", is_featured: true },
    { id: 7, name: "Womens Crystal blue", description: "$15.99", image: "https://www.currenwatches.com/cdn/shop/products/Currenwatches197_650x.png?v=1550740340", is_featured: true },
]

for (let product of products) {
    if (product.is_featured == false) {

        let mainDiv = document.getElementById('feature_card_wrapper')

        let card = document.createElement('DIV')
        card.className = 'feature-card'
        mainDiv.appendChild(card)

        let heading = document.createElement('H3')
        card.appendChild(heading)

        let heading_text = document.createTextNode(product.name)
        heading.appendChild(heading_text)

        let photo = document.createElement('IMG')
        photo.src = product.image
        card.appendChild(photo)

        let description = document.createElement('P')
        let description_text = document.createTextNode(product.description)
        description.appendChild(description_text)
        card.appendChild(description)

        let add_to_cart_button = document.createElement("BUTTON")
        let add_to_cart_button_text = document.createTextNode('add to cart')
        add_to_cart_button.appendChild(add_to_cart_button_text)
        add_to_cart_button.addEventListener('click', addToCart)
        add_to_cart_button.id = product.id
        card.appendChild(add_to_cart_button)

    }  {
        let ourProductsDiv = document.getElementById('our_product_wrapper')

        let ourProductCard = document.createElement('DIV')
        ourProductsDiv.appendChild(ourProductCard)
        ourProductCard.className = 'our-product-card'

        let heading = document.createElement('H3')
        let headingText = document.createTextNode(product.name)
        heading.appendChild(headingText)
        ourProductCard.appendChild(heading)

        let photo = document.createElement('IMG')
        photo.src = product.image
        ourProductCard.appendChild(photo)

        let description = document.createElement('P')
        let descriptionText = document.createTextNode(product.description)
        description.appendChild(descriptionText)
        ourProductCard.appendChild(description)

        let readMoreButton = document.createElement("BUTTON")
        let readMoreButtonText = document.createTextNode('see more')
        readMoreButton.appendChild(readMoreButtonText)
        ourProductCard.appendChild(readMoreButton)
        readMoreButton.id = product.id
        readMoreButton.addEventListener('click', readMore)

        let hidden_description = document.createElement('P')
        let hidden_description_text = document.createTextNode(document.hidden_description)
        hidden_description.appendChild(hidden_description_text)
        ourProductCard.appendChild(hidden_description)
        hidden_description.style.display = 'none'
        hidden_description.className = 'hidden_description'
        hidden_description.id = Number(this.id) - 2


    }
}

function addToCart() {
    //                                       changing value of cart in navbar
    // Access cart element
    // acces cart value
    // add 1 to cart value
    // update cart value


    // Getting the element with id cart as a string
    cart = document.getElementById("cart").innerText

    // splitting it to convert it in an array
    let cartArray = cart.split("")

    //Taking last item of cartArray using .pop() and storing it in lastItemCart
    let lastItemCart = cartArray.pop()

    // declaring variable updatedCart and storing value of cart
    const updatedCartvalue = Number(lastItemCart) + 1

    // Taking the remaining array and continating it with updated cart and storing it in the element with id cart
    let updatedCart = cartArray.join("") + updatedCartvalue

    document.getElementById("cart").innerText = updatedCart
    localStorage.setItem('cartValue', updatedCart)



    //                                 giving value of product to local storage

    var existing = localStorage.getItem('cart');

    // // If no existing data, use the value by itself
    // // Otherwise, add the new value to it
    var data = (existing) ? existing + ',' + JSON.stringify(this.id) : JSON.stringify(this.id);

    // // Save back to localStorage
    localStorage.setItem('cart', data);
    // let objectId = products[this.id]
    // localStorage.setItem('cart',Object.entries(objectId))


    // alerting "article added tocart"
    alert("Article added to cart")
}

function readMore() {
    if (this.id) {
        // let seeMoreButton = document.getElementsByTagName('button')[this.id]
        // let hiddenDescription = document.getElementsByClassName('hidden_description')
        // console.log(seeMoreButton)
        // console.log(hiddenDescription)
        // console.log(typeof())
        console.log('working')
    }
    else {

    }



}

function gotoCart() {
    location.href = "login.html"
}

function loginAnchor() {
    let loginDiv = document.getElementById('login-page')
    loginDiv.style.display = 'flex'
}

function saveLogintolocal() {
    let fields = document.getElementById('login-page').getElementsByClassName('input')
    for (let i = 0; i < fields.length; i++) {
        if (fields[i].value !== '') {
            localStorage.setItem("isLoggedin", true)
            let loginDiv = document.getElementById('login-page')
            loginDiv.style.display = 'none'
        }
    }
}

function checkRequired() {
    let fields = document.getElementById('login-page').getElementsByClassName('input')
    for (let i = 0; i < fields.length; i++) {
        if (fields[i].value == '') {
            let alertBlock = document.getElementById('login-page').getElementsByTagName('p')
            alertBlock[0].style.display = 'flex'
        }
    }
}

let isCartEmpty = localStorage.getItem('cartValue') == null
document.getElementById("Add to cart").innerText = isCartEmpty ? 'Add to Cart:0' : localStorage.getItem('cartValue')

let messageDiv = document.getElementById('message')
messageDiv.addEventListener('click',()=>{
    window.location = ''
})
  