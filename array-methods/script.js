// https://doesitmutate.xyz/

// map - changes every element of the array

const names = ['stark', 'targaryen', 'lannister'];



const mapped = names.map(function (name) {
    return `house ${name}`;
});

// function map(ar, callback) {
//     const result = [];
//     for (let element of ar) {
//         result.push(callback(element))
//     }
//     return result
// }
// const mapped = map(names, function (name) {
//     return `house ${name}`;
// })
// console.log(mapped);


// console.log(names);
// console.log(mapped);

// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(function (number) {
//     return number * 2
// })

// console.log(doubled);


const students = [
    {
        name: "Tony Parker",
        firstProject: 80,
        secondProject: 75
    },
    {
        name: "Marc Barchini",
        firstProject: 84,
        secondProject: 65
    },
    {
        name: "Claudia Lopez",
        firstProject: 45,
        secondProject: 95
    },
    {
        name: "Carolina Perez",
        firstProject: 85,
        secondProject: 72
    }
];

// use the students array and with map create a new array containing
// 1. only the names of the students
const studentsNames = students.map(function (student) {
    return student.name
})
// console.log(studentsNames);

// 2. objects in this form {name: <name of the student>, projects: <sum of the projects>}
const projectResults = students.map(function (student) {
    return {

        name: student.name,
        projects: student.firstProject + student.secondProject
    }
})
// console.log(projectResults);



// reduce - turn an array into one value 

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(function (acc, val) {
//     // console.log('acc is: ', acc);
//     // console.log('val is: ', val);
//     return acc + val;
// })

// console.log(sum);

const members = ['brian', 'mike', 'alan', 'bruce'];
const length = members.reduce(function (acc, val) {
    return acc + val.length
}, 0)
// console.log(length);


const people = [
    { name: "Candice", age: 25 },
    { name: "Tammy", age: 30 },
    { name: "Allen", age: 49 },
    { name: "Nettie", age: 21 },
    { name: "Stuart", age: 17 }
];

// sum up all the ages in the array

const totalAge = people.reduce(function (total, person) {
    return total + person.age
}, 0)

// console.log(totalAge);

const product = {
    name: "AmazonBasics Apple Certified Lightning to USB Cable",
    price: 7.99,
    manufacter: "Amazon",
    reviews:
        [
            {
                user: "Pavel Nedved",
                comments: "It was really usefull, strongly recommended",
                rate: 4
            },
            {
                user: "Alvaro Trezeguet",
                comments: "It lasted 2 days",
                rate: 1
            },
            {
                user: "David Recoba",
                comments: "Awesome",
                rate: 5
            },
            {
                user: "Jose Romero",
                comments: "Good value for money",
                rate: 4
            },
            {
                user: "Antonio Cano",
                comments: "It broked really fast",
                rate: 2
            },
        ]
}

// sum up all the rates for this product using reduce
const sumRates = product.reviews.reduce(function (acc, val) {
    return acc + val.rate
}, 0)

// console.log(sumRates);

const chars = ['a', 'b', 'c'];
const obj = chars.reduce(function (acc, val, i) {
    acc[i] = val;
    return acc;
}, {})

// console.log(obj);

// filter - iterates over the array, returns a new array containing some 
// of the elements that match the condition

const nums = [1, 2, 3, 4, 5, 6, 7];

const evens = nums.filter(function (number) {
    if (number % 2 === 0) {
        return true
    }
})

const largerThanThree = nums.filter(function (number) {
    if (number > 3) {
        return true
    }
})

// console.log(largerThanThree);
// console.log(evens);

const array1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true];

function countSheeps(arr) {
    const sheeps = arr.filter(function (sheep) {
        if (sheep === true) {
            return true
        }
    })
    return sheeps.length
}

// console.log(countSheeps(array1)) // "There are 17 sheeps in total"

const places = [
    {
        title: "Awesome Suite 20' away from la Rambla",
        price: 200,
        type: "Private Room",
        pool: true,
        garage: false
    },
    {
        title: "Private apartment",
        price: 190,
        type: "Entire Place",
        pool: true,
        garage: true
    },
    {
        title: "Apartment with awesome views",
        price: 400,
        type: "Entire Place",
        pool: false,
        garage: false
    },
    {
        title: "Apartment in la Rambla",
        price: 150,
        type: "Private Room",
        pool: false,
        garage: true
    },
    {
        title: "Comfortable place in Barcelona´s center",
        price: 390,
        type: "Entire place",
        pool: true,
        garage: true
    }
];

// filter out the places with a price above 300
const above300 = places.filter(function (place) {
    if (place.price > 300) {
        return true
    }
}).map(function (place) {
    return place.title
})

// const prices = above300.map(function (place) {
//     return place.price
// })
// console.log(prices);

// console.log(above300);


// reverse - reverses an array

const a = [1, 2, 3, 4, 5];
// console.log(a.reverse());

const word = 'hello world';
// to change a string into an array - use split()
// to change an array to a string - use join()
const split = word.split('');
// nice trick to get the amount of 'a's in that string:
// str.split('a').length - 1
// console.log(split);
split.reverse();
// console.log(split);

// console.log(split.join(''));
const reversed = word.split('').reverse().join('');
// console.log(reversed);

const starred = word.split('').join('*');
// console.log(starred);

// sort - sorts the array

const numbers = [22, 23, 1, 68, 112, 99, 0, 64];

const sorted = numbers.sort(function (a, b) {
    // if (a < b) {
    //     return 4
    // }
    // if (b < a) {
    //     return - 3;
    // }
    // if (b === a) {
    //     return 0;
    // }

    // sorts decending
    // return b - a
    // this sorts ascending
    return a - b
});

console.log(sorted);

const reviews = [{ name: 'hans', rate: 9 }, { name: 'alice', rate: 3 }, { name: 'bob', rate: 5 }]
const sortedReviews = reviews.sort(function (a, b) {
    return a.rate - b.rate
})
console.log(sortedReviews);




