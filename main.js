const family = ["mama", "papa", "me"]

console.log(family[2], family[1])

// astinan birewin qosadi
family.push("Maks")

// Joqarsinan birewin aladi
family.shift()

// Joqarsina birewin qosad
family.unshift("Joxa")

//aqirgisin alip taslaydi
family.pop()

//length
console.log(family.length)

//includes itemnin' bar yaki joqlig'in tekseredi
console.log(family.includes("Maman"))

console.log(family)

//for loop
for (let i = 0; i<5; i++) {
    console.log(`Hello ${i}`)
    
}

const numbers = [1, 5, 2, 8, 10, 120, 121, 55, 19 ]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 ===0) {
        console.log(numbers[i])
    }
}


//while
let i = 0
while (i<5) {
    console.log("Index"+ i)
    i++
}

//do while 
let k=0 

do {
    console.log("Hello from do while" + k)
    k++
} while (k<5)
