var container = document.querySelector('.main_container'),
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

var makeList = function(values){
    if (list){
        container.removeChild(list)
    }
    var ul = document.createElement('ul')
    values.forEach(function(value){
        var li = document.createElement('li')
        li.textContent = value
        ul.appendChild(li)
    })
    return ul
}

var listManagement = function(string) {
    var showedValues = valuesContainer.filter(function(value){
        return value.indexOf(string) == 0
    })
    if (showedValues.length) {
        list = makeList(showedValues)
        container.appendChild(list)
    } else if (list !== null) {
        container.removeChild(list)
        list = null
    }
}

var onType = function() {
    listManagement(this.value)
}

input.addEventListener('keyup', onType)