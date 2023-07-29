let newsEmail = document.getElementById("newsletter");
document.getElementById("newsletterButton").addEventListener("click", (e) => {
  // e.preventDefault
  localStorage.setItem("newsEmail", newsEmail.value);
  console.log(newsEmail);
  newsEmail.innerText = "";
  newsEmail.value = "";
});
