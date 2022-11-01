console.log("Hello World!\n==========\n");

// Exercise 1 Section
function plus(number){
    return (plusNumber) => {
      return plusNumber + number;
    }
}

let plus15 = plus(15);
console.log(plus15(10));

// exercise 2

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach(user => console.log(user.name))

  // exercise 3

  let newUsers = users.map((user) => {
    return { name: user.name, score: user.score };
  });

  console.log(newUsers);

  // exercise 4

let activeUsers = users.filter((user) => users.isActive == true);

console.log(activeUsers);

// exercise 5

users.sort((a, b) => {
    console.log(a.score, b.score);
    if (a.score > b.score){
        return 1
    } else if (a.score < b.score){
        return -1
    } else{
        return 0
    }
});

// exercise 6

let avgScore = users.reduce((sum, user) => sum + user.score, 0) / users.length;

console.log(avgScore);