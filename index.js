
const instructur = [ 
  {
    nama: "Renhard", 
    img: "https://avatars.githubusercontent.com/u/9393561?v=4",
    ciri: 'namanya selalu muncul di repo github'
  }, 
  {
    nama: "Teddy", 
    img: "https://avatars.githubusercontent.com/u/23611745?v=4",
    ciri: 'saat ditanya oleh instruktur "apa ada tambahan ?" selalu menjawab "tidak ada kak"'
  }, 
  {
    nama: "Edison", 
    img: "https://avatars.githubusercontent.com/u/49446586?v=4",
    ciri: 'saat ngejelaskan soal suka muter-muter'
  }, 

  { 
    nama: "Ivan", 
    img: "https://avatars.githubusercontent.com/u/56533224?v=4",
    ciri: 'sering ngasih soal tambahan'
  }, 
  {nama: "Seven", img: "https://cdn.discordapp.com/attachments/921000959717556244/921212721343635556/kak7.jpg", ciri:'satu-satunya perempuan instruktur phase 0 batch 20'}, 
  {nama: "Alam", img: "https://media.discordapp.net/attachments/912597474416398347/921203160192806953/unknown.png", ciri:'sinyal internet suka bermasalah'}, 
  {nama: "Iam", img: "https://media.discordapp.net/attachments/912597474416398347/921202369541337129/unknown.png?width=661&height=670", ciri:'dulunya pernah kribo'}, 
  {nama: "Arnold", img: "https://media.discordapp.net/attachments/912597474416398347/921201963281031240/unknown.png?width=656&height=670", ciri:'bisa ngilang'}
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

