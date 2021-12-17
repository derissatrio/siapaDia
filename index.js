
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
  // {nama: "Seven", img: ""}, 
  // {nama: "Alam", img: ""}, {nama: "Iam", img: ""}, {nama: "Arnold", img: ""}
  {nama: "Seven", img: "https://cdn.discordapp.com/attachments/921000959717556244/921212721343635556/kak7.jpg", ciri:'satu-satunya perempuan instruktur phase 0 batch 20'}, 
  {nama: "Alam", img: "https://media.discordapp.net/attachments/912597474416398347/921203160192806953/unknown.png", ciri:'sinyal internet suka bermasalah'}, 
  {nama: "Iam", img: "https://media.discordapp.net/attachments/912597474416398347/921202369541337129/unknown.png?width=661&height=670", ciri:'dulunya pernah kribo'}, 
  {nama: "Arnold", img: "https://media.discordapp.net/attachments/912597474416398347/921201963281031240/unknown.png?width=656&height=670", ciri:'bisa ngilang'}
]
let highscore = 0
history = []
let counter = 0
let counterIndex = []
let sudah = false

let score = 0
let point = 10
let pilihanTemp = []
let benar = []

function final() {
  const loginPage = document.getElementById('login')
  const playPage = document.getElementById('play')
  const final = document.getElementById('final').style.display = 'block'
  
  loginPage.style.display = 'none'
  playPage.style.display = 'none'

  console.log(score);
  const good = document.getElementById('good')
  const pointAkhir = document.getElementById('point')
  const message = document.getElementById('message')
  const userName = document.getElementById('userName').value
  console.log(userName);
  pointAkhir.innerHTML = `${score}/${instructur.length * 10}`

  if (score === 80) {
    good.innerHTML = 'Perpect'
    message.innerHTML = `${userName}, Kamu berhak menjalani Live Code 4`
  } else if (score >= 40 && score <= 79) {
    good.innerHTML = 'Great!'
    message.innerHTML = `${userName}, Kamu mendapatkan tips, Olahraga dalam 1 week, jangan coding terus`
  } else {
    good.innerHTML = 'Good!'
    message.innerHTML = `${userName}, Kamu perlu kenalan lagi deh sama Instruktur`
  }

  let history = localStorage.getItem('history')
  if (!history) {
    history = []
  } else {
    history = JSON.parse(history)
  }
  history.push({
    name: userName,
    point: score
  })

  localStorage.setItem('history', JSON.stringify(history))
  document.getElementById('userName').value = ''
  
  if (score > highscore) {
    highscore = score
  }

  document.getElementById('high').innerHTML = `<h4>High Score: ${highscore}</h4>`

}


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
      benar = ['benar', 'salah',instructur[counter].nama]
    } else if (counter % 2 === 0){
      pilihan = [instructur[counter + 1].nama, instructur[counter].nama]
      benar = ['salah', 'benar',instructur[counter].nama]
    }
    else if (counter % 2 !== 0) {
      pilihan = [instructur[counter].nama, instructur[counter + 1].nama]
      benar = ['benar', 'salah', instructur[counter].nama]
    }
    else if (counter === 0) {
      pilihan = [instructur[counter].nama, instructur[counter + 1].nama]
      benar = ['benar', 'salah', instructur[counter].nama]
    }
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
    ciri.innerHTML = instructur[counter].ciri
    counter++
  
  
  } else {
    final()
  }
}

function home() {
  const loginPage = document.getElementById('login').style.display = 'block'
  const playPage = document.getElementById('play')
  const final = document.getElementById('final').style.display = 'none'
  const pageHistory = document.getElementById('history').style.display = 'none'
}

function bekasMain() {
  const loginPage = document.getElementById('login').style.display = 'none'
  const final = document.getElementById('final').style.display = 'none'
  const pageHistory = document.getElementById('history').style.display = 'block'
  let history = localStorage.getItem('history')
  history = JSON.parse(history)
  console.log(history);

  const table = document.getElementById('tableHistory')
  table.innerHTMl = ''

  if (!history.length) {
    table.innerHTML = `<div class="row text-center">
    <div class="col">
      <h5 id="belumMain">Kamu belum pernah main</h5>
    </div>
  </div>`
  } else {
    table.innerHTML = ''
    for (let i = 0; i < history.length; i++) {
      table.innerHTML += `<tr>
      <th scope="row">${i + 1}</th>
      <td>${history[i].name}</td>
      <td>${history[i].point}</td>
      <td><button type="button" id="${i}" onclick="hapus(id)" class="btn btn-danger badge">Delete</button></td>
    </tr>`
    }

  }

}

function hapus(index) {
  let history = localStorage.getItem('history')
  history = JSON.parse(history)
  const dihapus = []
  for (let i = 0; i < history.length; i++) {
    if (i != index) {
      dihapus.push(history[i])
    }
  }
  localStorage.setItem('history', JSON.stringify(dihapus))


  const table = document.getElementById('tableHistory')
  table.innerHTML = ''
  console.log('dihapus');
  console.log(dihapus);
  console.log(index);

  for (let i = 0; i < dihapus.length; i++) {
    table.innerHTML += `<tr>
    <th scope="row">${i + 1}</th>
    <td>${dihapus[i].name}</td>
    <td>${dihapus[i].point}</td>
    <td><button type="button" id="${i}" onclick="hapus(id)" class="btn btn-danger badge">Delete</button></td>
  </tr>`
  }

  if (!dihapus.length) {
    table.innerHTML = `<div class="row text-center">
    <div class="col">
      <h5 id="belumMain">Kamu belum pernah main</h5>
    </div>
  </div>`
  }
}

function pilihan(id) {
  console.log(benar[id]);
  const isiModal = document.getElementById('isiModal')
  if (benar[id] === 'benar') {
    score += point
    isiModal.innerHTML = `Jawaban Anda benar, \n
    Instructur: ${benar[2]}`
  } else {
      isiModal.innerHTML = `Jawaban Anda salah, \n
      Instructur: ${benar[2]}`
      console.log(score);
  }
  const scores = document.getElementById('score')
  scores.innerHTML = `Score: ${score}/${instructur.length * 10}`
}


function mulai() {
  const name = document.getElementById('userName').value
  if (!name) {
    alert('Nama harus di isi')
    return false
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

