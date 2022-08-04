module.exports = function toReadable (number) {
const one = ['','one','two','three','four','five','six','seven','eight','nine'];
const ten = ['','','twenty','thirty', 'forty','fifty','sixty','seventy','eighty','ninety']   
const teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']

function toHundered (number) {
    if (number >= 100) {
        return (one[Math.floor(number / 100)] + ' hundred ' + toTeens(number % 100)).trim();
    }
    return toNull(number)
}
function toTeens (number) {
    if (number >= 0 && number < 10) {
        return one[number] } 
    else if ( number >= 10 && number < 20) {
        return teens[number % 10]
    }
    else if (number >=20 && number < 100)
    return (ten[Math.floor(number / 10)] + ' ' + one[number % 10]).trim() 
    }
    return toHundered(number)

function toNull (number) {
    if (number === 0) {
        return 'zero'
    }
    return toTeens(number)
}
}




