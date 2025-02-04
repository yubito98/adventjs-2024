/*Santa Claus 🎅 has received a list of magical numbers representing gifts 🎁, 
but some of them are duplicated and must be removed to avoid confusion. 
Additionally, the gifts must be sorted in ascending order before being delivered to the elves.

Your task is to write a function that receives a list of integers (which may include duplicates) 
and returns a new list without duplicates, sorted in ascending order.*/

function prepareGifts(gifts) {
    const removeDuplicates = gifts.filter((item,index) => gifts.indexOf(item) == index)
    const sortGifts = removeDuplicates.sort((a, b) => a - b)
    return sortGifts;
  }

  const gifts1 = [3, 1, 2, 3, 4, 2, 5, 11]

  console.log(prepareGifts(gifts1))