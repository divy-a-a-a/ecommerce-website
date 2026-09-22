let Display = () => {

    let loginuser = JSON.parse(localStorage.getItem("loginuser"))
    console.log(loginuser)

    let cartitems = loginuser.cart
    console.log(cartitems)

    let main = document.querySelector("main")

    main.innerHTML = ""

    if (cartitems.length == 0) {
        main.innerHTML = `<h1>
        Cart is empty</h1>`
    }
    else {
        cartitems.map((item) => {
            let div = document.createElement("div")
            div.classList.add("card")
            div.innerHTML = `
                <img src="${item.image}">
                <p>${item.title}</p>
                <p>Rs${item.price * 80}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `
            main.append(div)
        })
    }
}

Display()

let removeFromCart = (productId) => {

    let users = JSON.parse(localStorage.getItem("users"))
    let loginuser = JSON.parse(localStorage.getItem("loginuser"))

    let user = users.find((u) => u.id == loginuser.id)

    user.cart = user.cart.filter((item) => item.id != productId)

    localStorage.setItem("users", JSON.stringify(users))
    localStorage.setItem("loginuser", JSON.stringify(user))

    Display()
}