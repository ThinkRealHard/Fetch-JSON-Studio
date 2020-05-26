window.addEventListener("load", function(){

    let container = this.document.getElementById('container');

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            
            document.getElementById("counter").innerHTML = `${json.length} Astronauts`;

            json.sort(function(a,b) {return b.hoursInSpace - a.hoursInSpace});

            for(let astronaut of json){
                container.insertAdjacentHTML('beforebegin',  `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                <li id="${astronaut.id}">Active: ${astronaut.active}</li>
                                <li>Skills: ${astronaut.skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${astronaut.picture}">
                    </div>
                `);

                if(astronaut.active){ 
                    document.getElementById(astronaut.id).style.color = 'green';
                }else{
                    document.getElementById(astronaut.id).style.color = 'red';
                }
            }
        });
    });
});