// Given the following data
let data = [
    {
        firstName: "Juan",
        lastName: "Brito",
        age: 32
    },
    {
        firstName: "Jose",
        lastName: "Betancort",
        age: 85
    },
    {
        firstName: "Manuela",
        lastName: "Lasso",
        age: 20
    },
    {
        firstName: "Lorena",
        lastName: "Gonzalez",
        age: 17
    },
    {
        firstName: "Magnolia",
        lastName: "Sanchez",
        age: 42
    },
    {
        firstName: "Samuel",
        lastName: "Gomez",
        age: 35
    },
    {
        firstName: "Rosalía",
        lastName: "Suarez",
        age: 52
    }
];

function getFullNamesByCriteria(data, criteria) {
    return data.filter(criteria).map(person => person.firstName + " " + person.lastName);
}

console.log(getFullNamesByCriteria(data, (item) => item.firstName.length > 4));




// Write a function getFullNamesByCriteria(data, criteria) which
// receives the data and a function criteria, the
// getFullNamesByCriteria function must return a list of full Names,
// that is the concatenation of the first and last
// names with a space in between, but filtered using the criteria
// Examples:
// getFullNamesByCriteria(data,(item) => item.age > 50) -> ["Jose Betancort", "Rosalía Suarez"]
// getFullNamesByCriteria(data,(item) => item.age <= 20) -> ["Manuela Lasso", "Lorena Gonzalez"]

