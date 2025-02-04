function organizeInventory(inventory) {
    const gifts = {}
    for (let i = 0; i < inventory.length; i++) {
        if(gifts[inventory[i].category]){
            if(gifts[inventory[i].category][inventory[i].name]){
                gifts[inventory[i].category][inventory[i].name] = gifts[inventory[i].category][inventory[i].name] + inventory[i].quantity;
            }else{
                gifts[inventory[i].category][inventory[i].name] = inventory[i].quantity;
            }
        }else{
            gifts[inventory[i].category] = {}
            if(gifts[inventory[i].category][inventory[i].name]){
                gifts[inventory[i].category][inventory[i].name] = gifts[inventory[i].category][inventory[i].name] + inventory[i].quantity;
            }else{
                gifts[inventory[i].category][inventory[i].name] = inventory[i].quantity;
            }
        }
        
    }

    return gifts
}


  const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
  ]

  console.log(organizeInventory(inventory))


  const person = {
    name: 'Yubor',

  }

  person.lastName = "Molina";
  person['data'] = {}
  person['data']['pc'] = 5

  console.log(person)