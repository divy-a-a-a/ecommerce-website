let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log("done")
    // to get all input values
    let name=document.getElementById("name").value
    let mail=document.getElementById("email").value
    let pass1=document.getElementById("pass1").value
    let pass2=document.getElementById("pass2").value
    console.log({name,mail,pass1,pass2})
    //checking all inputs are given or not
    if (!name || !mail ||!pass1 || !pass2)
        return alert("fill all the feilds")
    if (pass1 != pass2)
        return alert("password not matching")
    
    /// we are fetching users from local storage 
    let users=JSON.parse(localStorage.getItem("users"))|| []
    console.log(users)//[]
    //creating new user
    let new_user={
        id: Date.now(),
        Name:name,
        Mail:mail,
        password:pass1,
        cart:[]
    }
    // adding new user to the array
    users.push(new_user)

    // we are updating into local storage
    localStorage.setItem("users",JSON.stringify(users))
    alert("done")
    window.location.href="login.html" // to move from signup page to login page

})