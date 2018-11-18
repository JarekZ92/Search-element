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
    let ul = document.createElement('ul')
    values.forEach(function(value){
        let li = document.createElement('li')
        li.textContent = value
        .list.appendChild(li)
    })
    return ul
}

const listManagement = function(string) {
    let showedValues = valuesContainer.filter(function(value){
        return value.indexOf(string) == 0
    })
    if (showedValues.length) {
        list = createList(showedValues)
        container.appendChild(list)
    }
}

const onType = function() {
    listManagement(this.value)
}

input.addEventListener('keyup', onType)