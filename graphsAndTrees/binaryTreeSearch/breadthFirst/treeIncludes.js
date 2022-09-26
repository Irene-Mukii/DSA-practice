const treeIncludes = (root, target) => {
    if (root == null) return false;

    const queue = [root];
    while (queue.length > 0){
        const current = queue.shift();
        console.log(current.val);

        if (current.val == target){
            return true;
        }
        if(current.left !== null) queue.push(current.left);
        if(current.right !== null) queue.push(current.right);
    }
    return false;
}

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

const answer = treeIncludes(a,e);
console.log(answer);