/*Santa Claus's elves 🧝🧝‍♂️ have found a bunch of mismatched magic boots in the workshop. Each boot is described by two values:

type indicates if it's a left boot (I) or a right boot (R).
size indicates the size of the boot.
Your task is to help the elves pair all the boots of the same size having a left and a right one. To do this, you should return a list of the available boots after pairing them.

Note: You can have more than one pair of boots of the same size!*/


function organizeShoes(shoes) {

    let shoesOrganized =[]

    for (let i = 0; i < shoes.length; i++) {

        let item = shoes[i];
        let size = item.size;
        let type = item.type;

        if(type == 'I'){
            let rightShoeIndex = shoes.findIndex(item => item.type == 'R');
            let rightShoe = shoes[rightShoeIndex]
            if(rightShoe){
                if(rightShoe.size == size){
                    let pairSize = size;
                    shoes.splice(rightShoeIndex, 1)
                    shoes.splice(i, 1) 
                    shoesOrganized.push(pairSize);
                }
            }
        }else if(type == 'R'){
            let leftShoeIndex = shoes.findIndex(item => item.type == 'I');
            let leftShoe = shoes[leftShoeIndex]
            if(leftShoe){
                if(leftShoe.size == size){
                    let pairSize = size;
                    shoes.splice(leftShoeIndex, 1)
                    shoes.splice(i, 1) 
                    shoesOrganized.push(pairSize);
                }
    
            }
        
        }
        
    }


    return shoesOrganized
}

  const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]

  //Expected output: [38, 42]

  const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ]
    //Expected output:  [38, 38]

  const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
  ]
// Expected output: []








  