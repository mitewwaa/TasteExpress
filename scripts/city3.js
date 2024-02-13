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
          window.location.href = "restaurant_b1.html";
          break;
        case 1:
          window.location.href = "restaurant_b2.html";
          break;
        case 2:
          window.location.href = "restaurant_b3.html";
          break;
        case 3:
          window.location.href = "restaurant_b4.html";
          break;
        case 4:
          window.location.href = "restaurant_b5.html";
          break;
        case 5:
          window.location.href = "restaurant_b6.html";
          break;
        case 6:
          window.location.href = "restaurant_b7.html";
          break;
        case 7:
          window.location.href = "restaurant_b8.html";
          break;
        default:
          console.log("Unexpected city element clicked");
      }
    });
  }
  