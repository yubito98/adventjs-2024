/*Santa Claus 🎅 wants to frame the names of the good children to decorate his workshop 🖼️, but the frame must follow specific rules. Your task is to help the elves generate this magical frame.

Rules:

Given an array of names, you must create a rectangular frame that contains all of them.
Each name must be on a line, aligned to the left.
The frame is built with * and has a border one line thick.
The width of the frame automatically adapts to the longest name plus a margin of 1 space on each side.*/


// MY CODE
function createFrame(names) {
    const mapNames = names.map(item => {
        return item.length
    })

    const maxNumber = Math.max(...mapNames)

    const wrappers = [];

    for (let i = 0; i < maxNumber; i++) {
        wrappers.push("*")
    }

    const frame = names.map(item =>{
        let spacingNumber = wrappers.length - item.length;
        let spacingChar = []
        for (let i = 0; i < spacingNumber; i++) {
            spacingChar.push(" ")
        }
        item = `* ${item}${spacingChar.join("")} *`
        return item
    })

    let result = `**${wrappers.join("")}**
${frame.join("\n")}
**${wrappers.join("")}**`

    return result
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']))


// AI REFACTOR CODE

function createFrame(names) {
    const maxLength = Math.max(...names.map(name => name.length));
    const border = '*'.repeat(maxLength + 4);

    const framedNames = names.map(name => {
        const padding = ' '.repeat(maxLength - name.length);
        return `* ${name}${padding} *`;
    });

    return [border, ...framedNames, border].join('\n');
}




