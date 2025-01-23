const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const teamContainer = document.querySelector('.team-container')

function cicloAddMembers(){
  for (let i = 1; i < teamMembers.length; i++) {
    let element = teamMembers[i]
  
    teamContainer.innerHTML += `
           <div class="d-flex bg-dark col-12 col-md-6 col-lg-3">
                <figure class="m-0 flex-shrink-0">
                    <img height="100px" src="./${element.img}" alt="${element.name}">
                </figure>
                <div class="ms-3 flex-grow-1 p-2">
                    <h5 class="text-light mb-1 fs-5 fs-md-4 fs-lg-3">${element.name}</h5>
                    <span class="text-light mb-1 d-block fs-6 fs-md-5">${element.role}</span>
                    <span class="text-info fs-6">${element.email}</span>
                </div>
            </div>
        </div>`
  }
}

cicloAddMembers();


//////////Bonus =>
  const form = document.getElementById('add-member-form');



  form.addEventListener('submit', (e) => {
    e.preventDefault();

  const name = document.getElementById('nome-cognome').value;
  const email = document.getElementById('exampleInputEmail1').value;
  const role = document.getElementById('ruolo-azienda').value;
  const img = document.getElementById('img-profilo').value;

  const newMember = {
      name: name,
      email: email,
      role: role,
      img: img,
  };

  teamMembers.push(newMember);

  teamContainer.innerHTML += `
    <div class="d-flex bg-dark col-12 col-md-6 col-lg-3">
      <figure class="m-0 flex-shrink-0">
        <img height="100px" src="./${newMember.img}" alt="${newMember.name}">
      </figure>
      <div class="ms-3 flex-grow-1 p-2">
        <h5 class="text-light mb-1 fs-5 fs-md-4 fs-lg-3">${newMember.name}</h5>
        <span class="text-light mb-1 d-block fs-6 fs-md-5">${newMember.role}</span>
        <span class="text-info fs-6">${newMember.email}</span>
      </div>
    </div>
  `;
});