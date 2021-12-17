
const instructur = [ 
  {
    nama: "Renhard", 
    img: "https://avatars.githubusercontent.com/u/9393561?v=4",
    ciri: 'lorem ipsum lorem ipsum lorep'
  }, 
  {
    nama: "Teddy", 
    img: "https://avatars.githubusercontent.com/u/23611745?v=4",
    ciri: 'lorem ipsum lorem ipsum lorep'
  }, 
  {
    nama: "Edison", 
    img: "https://avatars.githubusercontent.com/u/49446586?v=4",
    ciri: 'lorem ipsum lorem ipsum lorep'
  }, 

  { 
    nama: "Ivan", 
    img: "https://avatars.githubusercontent.com/u/56533224?v=4",
    ciri: 'lorem ipsum lorem ipsum lorep'
  }, 
  // {nama: "Seven", img: ""}, 
  // {nama: "Alam", img: ""}, {nama: "Iam", img: ""}, {nama: "Arnold", img: ""}
] 

history = []
let counter = 0
let counterIndex = []
let sudah = false

let score = 0
let point = 10
let pilihanTemp = []

function random() {
  const img = document.getElementById('img')
  const pilihan1 = document.getElementById('pilihan1')
  const pilihan2 = document.getElementById('pilihan2')
  const ciri = document.getElementById('ciri')
  let pilihan = ''
  if (counter <= instructur.length -1) {
    if (counter === instructur.length -1) {
      pilihan = [instructur[counter].nama, instructur[0].nama]
      sudah = true
    } else if (counter % 2 === 0) pilihan = [instructur[counter + 1].nama, instructur[counter].nama]
    else if (counter % 2 !== 0) pilihan = [instructur[counter].nama, instructur[counter + 1].nama]
    else if (counter === 0) pilihan = [instructur[counter].nama, instructur[counter + 1].nama]
    // console.log(instructur[counter]);
    // console.log(pilihan, 'pilihan');
    const imgIndex = instructur[counter]
    let link = instructur[counter].img
    const temp = `<img src="${link}" alt="..." style="width: 300px">`
    img.innerHTML = temp
    pilihan1.innerHTML = `<button id="0" onclick="pilihan(id)" data-bs-toggle="modal" type="button" class="btn btn-primary" data-bs-target="#exampleModal">${pilihan[0]}</button>
    `
    pilihan2.innerHTML = `<button id="1" onclick="pilihan(id)" data-bs-toggle="modal" type="button" class="btn btn-primary" data-bs-target="#exampleModal">${pilihan[1]}</button>`
    
    pilihanTemp.push(pilihan[0], pilihan[1])
    counter++
  
    ciri.innerHTML = instructur[counter].ciri
  
  } else {
    console.log('udah');
  }
}

function pilihan(id) {
  console.log(id);
  console.log('pilihan Kamu', instructur[id].name);
}


function mulai() {
  const name = document.getElementById('userName').value
  if (!name) {
    alert('Nama harus di isi')
  }
  const loginPage = document.getElementById('login')
  const playPage = document.getElementById('play')
  
  loginPage.style.display = 'none'
  playPage.style.display = 'block'

  random()
}

// function main(instructur) {
//   mulai(instructur)
//   random(instructur)
// }

// main(instructur)

