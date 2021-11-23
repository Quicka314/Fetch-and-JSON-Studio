window.addEventListener("load", function(){
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json")
     .then(response => response.json())
     .then(astronauts => {
         let container = document.getElementById("container");
         let str = ""
        for (let i = 0; i < astronauts.length; i++){
            str +=
            `<div class="astronaut">
            <div class="bio">
                <h3>${astronauts[i].firstName} ${astronauts[i].lastName}</h3>
                <ul>
                    <li>Hours in space${astronauts[i].hoursInSpace}</li>
                    <li>Active${astronauts[i].active}</li>
                    <li>Skills${astronauts[i].skills.join(", ")}</li>
                </ul>
            </div>
            <img class="avatar" src="${astronauts[i].picture}">
            </div>`
        }
        container.innerHTML = str
     })
});