/*Santa Claus 🎅 wants to frame the names of the good children to decorate his workshop 🖼️, but the frame must follow specific rules. Your task is to help the elves generate this magical frame.

Rules:

Given an array of names, you must create a rectangular frame that contains all of them.
Each name must be on a line, aligned to the left.
The frame is built with * and has a border one line thick.
The width of the frame automatically adapts to the longest name plus a margin of 1 space on each side.*/


function createFrame(names) {
    let longest = names.reduce((max, current) => (current.length > max ? current.length : max), names[0].length);
    let stars = [];
    let spacing = [];
    for (let i = 0; i < longest; i++) {
        stars.push("*")
        spacing.push(" ");
    }
    let starsJoin = stars.join("")

    let frame = names.map((name) =>{
        let nameSplit = name.split("");
        let result = spacing.map((item, index) =>{
            item = nameSplit[index] || " ";
            return item;
        })
        name = result;
        return `* ${name.join("")} *`

    })
    /*frame.push(starsJoin)
    frame.unshift(starsJoin)*/
return`**${starsJoin}**
${frame.join("\n")}
**${starsJoin}**
`
  }

  console.log(createFrame(["a", "bb", "ccc"]))


