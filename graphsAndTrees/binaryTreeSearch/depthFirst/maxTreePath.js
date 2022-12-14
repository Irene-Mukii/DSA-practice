class Node {                   //creating a binary tree
    constructor (val){
        this.val=val;
        this.left=null;
        this.right=null;
    };
};
const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const maxTreePath = (root) => {
    if (root == null) return -Infinity;
    if (root.left == null && root.right == null) return root.val;
    
    let rightSum = root.val + maxTreePath(root.right);
    let leftSum = root.val + maxTreePath(root.left);

    return Math.max(rightSum,leftSum);
}

console.log(maxTreePath(a));