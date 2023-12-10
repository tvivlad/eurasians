let btn1 = document.getElementById('btn1')
let bio1 = document.getElementById('bio1')

btn1.addEventListener('click', () => {
  if (bio1.style.display == 'block') {
    bio1.style.display = 'none'
  } else {
    bio1.style.display = 'block'
  }
})

let btn2 = document.getElementById('btn2')
let bio2 = document.getElementById('bio2')

btn2.addEventListener('click', () => {
  if (bio2.style.display == 'block') {
    bio2.style.display = 'none'
  } else {
    bio2.style.display = 'block'
  }
  console.log('Вторая карточка')
})

let btn3 = document.getElementById('btn3')
let bio3 = document.getElementById('bio3')

btn3.addEventListener('click', () => {
  if (bio3.style.display == 'block') {
    bio3.style.display = 'none'
  } else {
    bio3.style.display = 'block'
  }
  console.log('Третья карточка')
})
