//Create using normal function syntax
var square = function (x) {
    return x * x
}
console.log(square(4))

//Create using arrow function
var square = (x) => {
    return x * x
}
console.log(square(3))

//Create using concise arrow function, 
//because it's a single line, you can remove return
var square = (x) => x * x
console.log(square(2))

//Normal function
var event = {
    name: 'Birthday Event',
    printGuestList: function () {
        console.log('Guest List for ' + this.name)
    }
}
event.printGuestList()

//more concise version
var event = {
    name: 'Birthday Event',
    guestList: ['JR', 'Leslie', 'Robert'],
    printGuestList() {
        console.log('Guest List for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is going ' + this.name)
        })
    }
}
event.printGuestList()