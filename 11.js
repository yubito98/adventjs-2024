// MY CODE RECEIVED THE HIGHEST SCORE 5 STARS

function decodeFilename(filename) {
    const splitName = filename.split("_");
    const removeFistElement =  splitName.shift();
    const joinName = splitName.join("_").split(".");
    const removeLastElement = joinName.pop();
    return joinName.join(".");
}


console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023'))
// ➞ "chimney_dimensions.pdf"




