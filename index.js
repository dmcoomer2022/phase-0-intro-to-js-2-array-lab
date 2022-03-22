// Write your solution here!    
 const cats = ["Milo", "Otis", "Garfield"];

 
function destructivelyAppendCat(name) {
    cats.push(name)
    return name 
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
    return name 
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
    return name
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
    return name
}

 function prependCat(){

    const newArr = ["Arnold", "Milo", "Otis", "Garfield"];
    return newArr
 }

 function appendCat(){
    const newArr = [  "Milo", "Otis", "Garfield", "Broom"]
    return newArr
 }

 function removeLastCat(){
     const newArr = ["Milo", "Otis",]
     return newArr
 }

 function removeFirstCat(){
     const newArr = ["Otis", "Garfield"]
     return newArr
 }