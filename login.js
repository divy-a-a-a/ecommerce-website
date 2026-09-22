let form=document.querySelector("form")
console.log(form)
form.addEventListener("submit",(e)=>{
    e.preventDefault()
  let mail=document.getElementById("email").value
  let pass =document.getElementById("pass1").value
  if(!mail || ! pass)
    return alert("fill  all")
  let users=JSON.parse(localStorage.getItem("users"))||[]
   console.log(users)
   let loginuser=users.find((user)=>{
    return user.Mail === mail && user.password ===pass
   })
   console.log(loginuser)
   if(!loginuser)
    return alert("wrong credentials")
  // we are storing the data of the person who is doing the login
     localStorage.setItem("loginuser",JSON.stringify(loginuser))
    alert("login done")
    window.location.href="index.html"
})
