const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName
    }
}


let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}


// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

const teacher = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}



function createAnimal (species, verb, noise){
    return {
        species, 
        [verb](){
            return noise;
        }
    }
}

