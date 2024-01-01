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
    salary: number
}

let employeeDetails: Company = {
    name:"Akhil K",
    employees: 75,
    salary:45000
}