class Node {                   //creating a binary tree
    constructor (val){
        this.val=val;
        this.left=null;
        this.right=null;
    };
};
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// const depthFirstValues = (root) => {
//    if( root == null) return 0 ;
   
//     console.log(sum)
//     const leftValues = root != null? depthFirstValues(root.left): 0; 
//     const rightValues =  root != null?  depthFirstValues(root.right): 0;
//     return [];
// }

// depthFirstValues(a);

const treeSum = (root) => {
    if(root === null) return 0;
    const sum = root.val + treeSum(root.left) + treeSum(root.right);
    console.log(sum);
    return sum;
}

treeSum(a);

