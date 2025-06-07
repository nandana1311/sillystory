
    document.querySelector("button").addEventListener("click", function () {
      const name = document.querySelector("#characterName").value;
      const place = document.querySelector("#place").value;
      const story = `Once upon a time, ${name} went to ${place} and had a great adventure!`;
      document.getElementById("story").textContent = story;
    });
  
