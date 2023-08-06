const btn = document.getElementById("btn")
const temp = document.getElementById("temp-text")
apiKey = "c90f1c242ea476609d85ba660d5ba11d";


btn.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.getElementById("input").value
  // let value = e.target.value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.cod !== "404") {
        temp.textContent = `${data.main.temp}°`;
    
      }
     
    });
});
