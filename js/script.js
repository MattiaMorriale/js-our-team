const containerCards = document.querySelector('#cardsContainer');

const team = [
{
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg",
},
{
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg",
},
{
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg",
},
{
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg",
},
{
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg",
},
{
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg",
}
];

for (let i = 0; i < team.length; i++) {
    console.log(team[i])

    let text = "";

    let img = "";

    for (let key in(team[i])) {

        console.log(`${key}: ${team[i][key]}`)

        if (key == 'foto') {
            
            img += `<img class="img-fluid" src="img/${team[i][key]}" >`;
            
            
        } else {

            text += `<p>${team[i][key]}<br></p>`;
            
        }

    }
    
    containerCards.innerHTML += 
    `<div class="col-12 col-md-5 col-lg-3 d-flex justify-content-center flex-column mx-2 mb-4 ">
        ${img}
        <div>
            <div class="text-center p-3  my-cardtext">
                ${text}
            </div>
        </div>
    </div>`
    
}