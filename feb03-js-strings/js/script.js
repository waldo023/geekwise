var firstString = "A literal string",
    secondString = new String("A String Object"),
    concatString = firstString + secondString,
    firstName = "Osvaldo",
    lastName = "Vallejo",
    fullName = firstName + " Alfredo " + lastName,
    getIndex = firstString.indexOf('A'),
    birthDay =  1999,
    newAge = 2020 - 1999,
    concatScentence = "My name is " + fullName + ". I was born on " + birthDay + " and in 2020, I will be " + newAge;

console.log(concatString);
console.log(fullName);
console.log(getIndex);
console.log(concatScentence);
