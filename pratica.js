function Person(First, age, faculty) {
    this.FirstName = First
    this.age = age
    this.faculty = faculty
    this.nationality = "Brasil"
}

const mygirlfriend = new Person("Claudianny", "20", "Farmácia");

const myboyfriend = new Person ("Thiago", 22, "Análise e desenvolvimento de sistemas")

console.log(mygirlfriend.FirstName)
console.log(mygirlfriend.age)
console.log(mygirlfriend.faculty)
console.log(mygirlfriend.nationality)


console.log(myboyfriend.FirstName)
console.log(myboyfriend.age)
console.log(myboyfriend.faculty)
console.log(myboyfriend.nationality)