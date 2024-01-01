//Infer Types (Implicit Types)

let userName = "akhil"

//Defining Types (Explicit Types)

let Name: string = "akhil"
let Age: number = 22
let single: boolean = true
let skills: string[] = ["JS", "TS"]
let Mobile: number[] = [8, 0, 7, 5, 4, 4, 3, 1, 8, 6]
let empty: [] = []
let Address: { House_No: number; Place: string; } = { House_No: 127, Place: "Kerala" }


//Interface

interface Company {
    name: string,  
    employees: number,
    salary: number,
    getName: () => void
}

let employeeDetails: Company = {
    name:"Akhil K",
    employees: 75,
    salary: 45000,
    getName() {
        console.log(this.name)
    },
}


// Type

type Details = {
    firstName: string,
    lastName: string,
    age: number,
}

let userDetails: Details = {
    firstName: "Akhil",
    lastName: "K",
    age:22
}


// Union Operator

let Year: string | number = "22"

Year = 22

let Months: (string | number)[] = ["Jan", 2, "Mar", 4]


//Optional Operator

let currrentDate: { Day: number; Month?: string; Year?: number } = {
    Day: 3,
}


//Functions

function getUsername(userDetails: Details) {
    return `${userDetails.firstName} ${userDetails.lastName}`
}

getUsername(userDetails)


function returnArgument({ name, age }: {name: string; age:number}) {
    return `${name}${age}`
}

returnArgument({ name: "Akhil", age: 22 })


function returnTypeSetting(userDetails: Details): string | number{
    return userDetails.age
}

const returnValue = returnTypeSetting(userDetails)

// returnValue. we can get type based functions


function consoleFunc(userDetails: Details): void{
    console.log("username :",userDetails.firstName)
}