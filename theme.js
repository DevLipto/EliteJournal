 // The Preloader start

 document.addEventListener("DOMContentLoaded", function () {
    // Hide the preloader
    const preloader = document.querySelector(".preloader");
    const content = document.getElementById("content");
  
    // Simulate a delay for demonstration purposes
    setTimeout(function () {
      preloader.style.display = "none";
      content.style.display = "block";
    }, 900); // You can adjust the delay as needed
  });
   
   
   
