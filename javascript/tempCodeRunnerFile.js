const ok={ name: "Gagan"}
function greet(city){
    console.log(` Hello Bhai ${this.name}, you live in the city ${city}`)
}
greet.call(ok, "Mysuru")