let products=[]
let getProducts=async()=>{
    try{
        let resc=await fetch("https://fakestoreapi.com/products")
        let data=await resc.json()
        products=data
        displayProducts(data)
    }
    catch(err){
        console.log(err)
    }
}
getProducts()
let main=document.querySelector("main")
let displayProducts=(products)=>{
  // when someone try to open the homepage with path without login at that time it should come to login page
    let loginuser=JSON.parse(localStorage.getItem("loginuser"))
    if (!loginuser)
        return window.location.href="login.html"
    // till this
    
    let username=document.getElementById("username")
    username.innerText=loginuser.Name

     products.map((product)=>{
        let div=document.createElement("div")
        div.classList.add("card")
        div.innerHTML=`
        <img src="${product.image}">
        <p> ${product.title}</p>
        <p>Rs${product.price*80}</p>
  
        <button onclick="addTocart(${product.id})"> add to cart </button>
        `
        main.append(div)
     })
     
}
let logout=document.getElementById("logout")
logout.addEventListener("click",()=>{
    localStorage.removeItem("loginuser")
    window.location.href="login.html"

})

let addTocart=(productId)=>{
    let item=products.find((product)=>product.id ==productId)
    console.log(item)
    

    let users=JSON.parse(localStorage.getItem("users"))
    // console.log(users)
    let loginuser=JSON.parse(localStorage.getItem("loginuser"))
    // console.log(loginuser)
    let user= users.find((u)=>u.id== loginuser.id)
    let alreadyAdded = user.cart.some((cartItem) => cartItem.id == productId)
    if (alreadyAdded) {
    alert("Product already added to cart")
    return
}
    // console.log(user)
    user.cart.push(item)
    localStorage.setItem("users",JSON.stringify(users))
    localStorage.setItem("loginuser",JSON.stringify(user))
    alert("product added to the cart")

}
