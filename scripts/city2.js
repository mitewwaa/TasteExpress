document.querySelector(".logo").addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "home.html";
  });
  
  const restaurants = document.querySelectorAll(".restaurant");
  
  for (let i = 0; i < restaurants.length; i++) {
    restaurants[i].addEventListener("click", (event) => {
      event.preventDefault();
  
      switch (i) {
        case 0:
          window.location.href = "restaurant_p1.html";
          break;
        case 1:
          window.location.href = "restaurant_p2.html";
          break;
        case 2:
          window.location.href = "restaurant_p3.html";
          break;
        case 3:
          window.location.href = "restaurant_p4.html";
          break;
        case 4:
          window.location.href = "restaurant_p5.html";
          break;
        case 5:
          window.location.href = "restaurant_p6.html";
          break;
        case 6:
          window.location.href = "restaurant_p7.html";
          break;
        default:
          console.log("Unexpected city element clicked");
      }
    });
  }
  