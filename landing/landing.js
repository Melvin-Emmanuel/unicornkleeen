const objectArray = [
    {
        // message: 'hello',
        location: 'lagos',
        date: new Date('2023-07-26'),
        service: 'cleaning service',
        number: 2347086758713,
        email: 'emmanulmelv@gmail.com',
        name: 'kode10x'
    },
];
// localStorage.setItem("appointmentInfo", JSON.stringify(objectArray));
console.log(objectArray)
const getFromLocal=()=>{
    let newArray =[]
   newArray= JSON.parse(localStorage.getItem('appointmentInfo'))
   return newArray
}

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()
   
    let userNumber=document.getElementById('number').value
    let userLocation=document.getElementById('location').innerHTML
    let userDate=document.getElementById('date').value
    let userService=document.getElementById('service').value
    let userEmail=document.getElementById('email').value
    let userName = document.getElementById('name').value
    let getValue = getFromLocal() 
    getValue.push({ name: userName, number: userNumber,email: userEmail, service: userService, date: userDate, location: userLocation })
    localStorage.setItem("appointmentInfo", JSON.stringify(getValue));
  console.log(userDate, userEmail, userLocation, userName, userNumber, userService)
  console.log('clicked')
 userNumber = document.getElementById("number").value=''
 userLocation = document.getElementById("location").value=''
  userDate = document.getElementById("date").value=''
  userService = document.getElementById("service").value=''
 userEmail = document.getElementById("email").value=''
 userName = document.getElementById("name").value=''
    return false
    
    
})
const checklogin = () => {
  let email = localStorage.getItem("email");
  let password = localStorage.getItem("password");
  if (!email && !password) {
    location.href = "../signup/signup.html";
  }
};
// checklogin();

