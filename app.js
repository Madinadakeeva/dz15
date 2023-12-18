let input = document.getElementById('title')
let btn = document.getElementById('create')
let button = document.getElementById('udalenie')
let textEl = document.getElementById('text')

let list1 = [
    "Айдархан",
    "Балабай",
    "Бибигуль",
    "Еркежан",
    "Мадина",
    "Нурасыл",
    "Нургазы",
    "Талгат",
  ]

let paragraph = document.createElement("p")
paragraph.textContent = `Список: ${list1}`
document.body.append(paragraph)

//push
btn.addEventListener('click', func)
  function func (){
    if(input.value.length === 0){
        return
    }
    list1.push(title.value)
    paragraph.textContent = `Список: ${list1}`
    input.value = ''

  }

  //pop
  button.addEventListener('click', udalenie)
  function udalenie (){
    list1.pop()
    paragraph.textContent = `Список: ${list1}`

  }

//reverse
  textEl.addEventListener('click', () => {
    list1.reverse(title.value)
    paragraph.textContent = `Список: ${list1}`
  })

//splice
let cities = [
    'Астана',
    'Караганда',
    'Павлодар',
    'Петропавловск',
    'Алматы',
]

let removed = cities.splice(4, 1, 'Семей')
let paragrap = document.createElement("p")
paragrap.textContent = `Метод Splice: ${cities}`
document.body.append(paragrap)

//filter
let products = ['суши', 'пицца', 'суши', 'пицца', 'пицца', 'суши']
let result = products.filter((product) => product.length > 4);
let paragra = document.createElement("p")
paragra.textContent = `Метод filter: ${result}`
document.body.append(paragra)


// let pizzaEl = document.getElementById('pizza')
// let sushiEl = document.getElementById('sushi')
// let products = ['суши', 'пицца', 'суши', 'пицца', 'пицца', 'суши']

// pizzaEl.addEventListener('click', pizza)
// function pizza() {
//   let result = products.filter(products.length > 10)
//   pizzaa.textContent = result
// }

// sushiEl.addEventListener('click', sushi)
// function sushi() {
  
// }
// products.filter(sushi)

// let pizzaa = document.createElement("p")
// pizzaa.textContent = `Ваш заказ: ${result}`
// document.body.append(pizzaa)


