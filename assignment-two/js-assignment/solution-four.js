function greeter(greeting) {
    return function(greetee) {
        console.log(greeting + ", " + greetee + "!");
    }
 }


 greeter("Hello")("Candidate");