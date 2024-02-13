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
        window.location.href = "restaurant_s1.html";
        break;
      case 1:
        window.location.href = "restaurant_s2.html";
        break;
      case 2:
        window.location.href = "restaurant_s3.html";
        break;
      case 3:
        window.location.href = "restaurant_s4.html";
        break;
      case 4:
        window.location.href = "restaurant_s5.html";
        break;
      case 5:
        window.location.href = "restaurant_s6.html";
        break;
      case 6:
        window.location.href = "restaurant_s7.html";
        break;
      case 7:
        window.location.href = "restaurant_s8.html";
        break;
      case 8:
        window.location.href = "restaurant_s9.html";
        break;
      case 9:
        window.location.href = "restaurant_s10.html";
        break;
      default:
        console.log("Unexpected city element clicked");
    }
  });
}
