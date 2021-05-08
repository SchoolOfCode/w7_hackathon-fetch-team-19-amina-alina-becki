// Plan - Basic 

// - Get information from API regarding a character  x
// - Display information on screen 
    // Add ids on HTML 
    // Make Variable of information 
    // Assign values from JSON object to variables to display on screen x

// - Take Test 
    // When Button is clicked 
    // Hide information 
    // Prompt Question from the hidden information 
    // If answer = true display winner picture
    // If false display loser picture 

// - Player is asked a question about a character
// - Player inputs their answer
// - Get point if true 
// - Display information about character
// - Add random character later on
// - Add picture of character from internet 
// - Add starship picture 
// - Link name to external website - name.href = recipe.recipe.url; 
// - Add points 




// Make Variable of information 




// - Get information from API regarding a character 

    async function getCharacter() {
        const response = await fetch("https://swapi.dev/api/people/1");
        const character = await response.json();
        let name = document.getElementById("name-of-character");
        const nameOfCharacter = character.name;
        name.innerHTML = nameOfCharacter;
        let dateOfBirth = document.getElementById("birth-year");
        const birthYear = character.birth_year;
        dateOfBirth.innerHTML = birthYear;
        let hairColor = document.getElementById("hair-color");
        const colorOfHair = character.hair_color;
        hairColor.innerHTML = colorOfHair;
        }; 
       
        getCharacter()

    function hideInfo(){ 
       // When Button is clicked 
    // Hide information 
    const hideInfo = document.getElementById("info");
    hideInfo.classList.add("hide");
    // Prompt Question from the hidden information 
    setTimeout(() => {
        let answer = prompt("What is their hair colour?");
        if (answer == "blond") {
            alert("WINNER OF THE GALAXY");
            const winImage = document.getElementById("win-image");
            winImage.classList.remove("hide");
          } else {
            alert("THE EMPIRE HAS DESTROYED YOU");
            const loseImage = document.getElementById("lose-image");
            loseImage.classList.remove("hide");
          }
}, 1000)
    


    // If answer = true display winner picture
    // If false display loser picture 
    }



        // async function fetchRecipe(food) {
        //     const requestUrl = `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;
        //     const response = await fetch (requestUrl);
        //     const data = await response.json();
        //     const recipe = data.hits[0];
        //     var element = document.getElementById("recipe-label");
        //     element.innerHTML += recipe.recipe.label;
        //     element.href = recipe.recipe.url;