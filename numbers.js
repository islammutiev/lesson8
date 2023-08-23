let numbers = [];

for (let i = 0; i <= 1000; i++) {
    if(i % 2 === 0) {
        numbers.push(i);
    }
}

let numbers2 = [];

   for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 3 === 0) {
     numbers2.push(numbers[i]);
     
    }
} 
    for(let i = 0; i < numbers2.length; i++) {
        numbers2[i] ^ 2;
        numbers2.push(i);
}

let index = 0; 

    for (let i = 0; i < numbers2.length; i++) {
      if (numbers2[i] === 324) {
        index = i;
      }
}

console.log(index);
    