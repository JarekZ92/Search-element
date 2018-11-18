const container = document.querySelector('.main_container'),
input = container.querySelector('input'),
list,
valuesContainer

valuesContainer =[
    'Kanada',
    'USA',
    'Polska',
    'Włochy',
    'Rosja',
    'Niemcy'
]

const makeList = function(values){
    let ul = document.createElement('.list')
    values.forEach(function(value){
        let li = document.createElement('li')
        li.textContent = value
        .list.appendChild(li)
    })
    return ul
}