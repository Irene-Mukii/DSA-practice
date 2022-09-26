class Node {                   //creating a binary tree
    constructor (val){
        this.val=val;
        this.left=null;
        this.right=null;
    };
};
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//Binary search recursive version
const depthFirstValues = (root) => {
   if( root == null) return[];

    const leftValues = root != null? depthFirstValues(root.left): 0; 
    const rightValues =  root != null?  depthFirstValues(root.right): 0;

    return [root.val, ...leftValues, ... rightValues];
}

depthFirstValues(a);