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
          window.location.href = "restaurant_v1.html";
          break;
        case 1:
          window.location.href = "restaurant_v2.html";
          break;
        case 2:
          window.location.href = "restaurant_v3.html";
          break;
        case 3:
          window.location.href = "restaurant_v4.html";
          break;
        case 4:
          window.location.href = "restaurant_v5.html";
          break;
        case 5:
          window.location.href = "restaurant_v6.html";
          break;
        default:
          console.log("Unexpected city element clicked");
      }
    });
  }
  