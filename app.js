const body = document.body;
const bodyDefault =
  (body.style.cssText = `display:flex; justify-content:center; align-items: center;height:100vh;flex-direction:column; background-image: url(./sunset.jpg); background-repeat: no-repeat; background-size: cover;`);
const input = document.createElement("input");
input.setAttribute("placeholder", "enter a city");
input.style.cssText = `height:4rem;width:50rem; border-radius:10px; border:none; text-transform:uppercase `;
body.append(input);
const h1 = document.createElement("h1");
h1.style.cssText = `margin-top:5rem`;
body.append(h1);
const h2 = document.createElement("h2");
body.append(h2);

const apiKey = "c90f1c242ea476609d85ba660d5ba11d";

input.addEventListener("change", (e) => {
  e.preventDefault();
  let value = e.target.value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.cod !== "404") {
        h1.textContent = `The current wearther in  ${value} is ${data.main.temp}°`;
        h2.textContent = `Humidity: ${data.main.humidity}%`;
      }
      if (data.main.temp > 30) {
        body.style.cssText = `display:flex; justify-content:center; align-items: center;height:100vh;flex-direction:column; background-image: url(./sunny.avif); background-repeat: no-repeat; background-size: cover;`;
        
      } else {
        body.style.cssText = bodyDefault;
      }

      if (data.main.temp <= 10) {
        body.style.cssText = `display:flex; justify-content:center; align-items: center;height:100vh;flex-direction:column; background-image: url(./cold.jpg); background-repeat: no-repeat; background-size: cover;`;
        
      }
    });
});
