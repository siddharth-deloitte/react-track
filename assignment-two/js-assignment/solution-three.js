// const data = { name: "Hasher", age: 21, hobbies: ["Video games", "Studying", "Gym"] }

// const dataCopy = { ...data }

// data.hobbies[1] = "Coding"

// console.log(data.hobbies) // ["Video games", "Coding", "Gym"]

// console.log(dataCopy.hobbies) //["Video games", "Coding", "Gym"]

// data.hobbies and dataCopy.hobbies gives the same output. Why?


/*
Answer: on line 3, we have made a shallow copy of the object data. When we use the spread operator(...)
with an object inside curly braces, it copies the contents of the object in a new object. Now, the primitive types are completely
copied but not the non-primitive type. Here, array is non-primitive and it's reference is held by the variable hobbies. 
So, that reference is being copied into the new object. Thus, we can say a shallow copy has been made and changes made 
to the hobbies array will reflect in both objects.
*/