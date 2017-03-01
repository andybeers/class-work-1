
function createTree(array) {

    const root = array.shift();

    array.forEach(node => addTo(root, node));

    function addTo(parent, node) {
        if(node.value === parent.value) return;
        if(node.value < parent.value) {
            if(!parent.left) parent.left = node;
            else addTo(parent.left, node);
        }
        else {
            if(!parent.right) parent.right = node;
            else addTo(parent.right, node);
        }
    }
}

function createTree2(array) {
    if(!array || !array.length) return null;

    const root = array.shift();
    const left = array.filter(n => n.value < root.value);
    const right = array.filter(n => n.value > root.value);
    
    root.left = createTree2(right);
    root.right = createTree2(left);
    
    return root;
}