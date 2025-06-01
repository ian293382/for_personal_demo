function checkStringLength (str) {
    const result = str.length
    return result
}

function lowerCase(str){
    return str.toLowerCase()
}


function trimString(str){
    return str.trim()
}

function getArea(str){
    return str.substr(3,3)
}


console.log(checkStringLength("Hello"))
console.log(checkStringLength("my name is Tom！"))
console.log(lowerCase("FOKFF@gmail.com"))
console.log(lowerCase("gonSakpm@gmail.com"))
console.log(trimString("    hi, mom!  "))
console.log(trimString(" aa@gmail.com  "))
console.log(getArea("高雄市前鎮區一心二路33號"))
console.log(getArea("高雄市新興區新興路66號"))
