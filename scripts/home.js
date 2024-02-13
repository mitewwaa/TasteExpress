const cities = document.querySelectorAll(".city");

for (let i = 0; i < cities.length; i++) {
  cities[i].addEventListener("click", (event) => {
    event.preventDefault();

    switch (i) {
      case 0:
        window.location.href = "city1.html";
        break;
      case 1:
        window.location.href = "city2.html";
        break;
      case 2:
        window.location.href = "city3.html";
        break;
      case 3:
        window.location.href = "city4.html";
        break;
      default:
        console.log("Unexpected city element clicked");
    }
  });
}