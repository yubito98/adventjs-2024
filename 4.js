function createXmasTree(height, ornament) {

    let tree = [];
    
    for (let i = 0; i < height; i++) {
        if(i > 0){
            let current = tree[i - 1] + ornament + ornament;
            tree.push(current)
        }else{
            tree.push(ornament)
        }
    }

    let width = tree.map((item, index) =>{
        item  = []
        let treeLastElement = tree[tree.length - 1];
        for (let i = 0; i <= treeLastElement.length - 1; i++) {
            item.push("_")
        }
        return item
    }); 

    let buildTree = width.map((item, index) =>{
        for (let i = 0; i < item.length; i++) {
            if(item[i] == item.length/2){
                
            }
        }
    })

    return width, tree
  }

const tree = createXmasTree(5, '*')
console.log(tree)