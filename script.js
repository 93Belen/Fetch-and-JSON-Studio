// TODO: add code here
window.addEventListener('load', function(){
    const promise = fetch('https://handlers.education.launchcode.org/static/astronauts.json');

        promise
        .then(function(response){
        const jsonResponse = response.json();
        console.log(jsonResponse);
        return jsonResponse
        })
        .then(function(jsonResponse){
        let formated = [];
        //console.log(jsonResponse)
        for(const astronaut of jsonResponse){
            formated.push(
                `<div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName, astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}" />
                </div>`
            )
        }
        //console.log(formated);
        document.getElementById('container').innerHTML = formated;
    })
})