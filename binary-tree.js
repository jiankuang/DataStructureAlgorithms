function BinaryTree () {
  this.Nodes = new Array();
  // store a current location in the tree
  this.level = 0;
  this.node = 0;
  
  this.setNode = function (value, level, node) {
  	if (level === undefined) { // set value to current node
  	  this.Nodes[this.btSMF(this.level, this.node)] = value;
  	} else {
  	  this.Nodes[this.btSMF(level, node)] = value;
  	}
  };
  this.getNode = function (level, node) {
  	if (level === undefined) {
  	  return this.Nodes[this.btSMF(this.level, this.node)];
  	} else {
  	  return this.Nodes[this.btSMF(level, node)];
  	}	
  };

  // re-initialise current location to the root
  this.root = function (value) {
  	this.level = 0;
  	this.node = 0;
  	if (value !== undefined) {
  	  this.Nodes[this.btSMF(this.level, this.node)] = value;
  	}
  	return this.Nodes[this.btSMF(this.level, this.node)];
  };

  /* converting the more familiar way of specifying nodes 
     i.e. giving a current node and then referencing its immediate left or right child node, 
     into SMF form */
  // if the current node is at (level, node) the left child is at (level+1, node*2).
  this.leftChild = function (value) {
  	this.level++;
  	this.node = this.node*2;
  	if (value !== undefined) {
  	  this.Nodes[this.btSMF(this.level, this.node)] = value;
  	}
  	return this.Nodes[this.btSMF(this.level, this.node)];
  };
  this.rightChild = function (value) {
  	this.level++;
  	this.node = this.node*2+1;
  	if (value !== undefined) {
  	  this.Nodes[this.btSMF(this.level, this.node)] = value;
  	}
  	return this.Nodes[this.btSMF(this.level, this.node)];
  };

  this.parent = function (value) {
  	this.level--;
  	this.node = this.node>>1;
  	if (value !== undefined) {
  	  this.Nodes[this.btSMF(this.level, this.node)] = value;
  	}
  	return this.Nodes[this.btSMF(this.level, this.node)];	
  };

  this.btSMF = function (level, node) {
  	return node + (1<<level) - 1;
  };
}

// store a simple three level tree
tree = new BinaryTree();
tree.setNode(1, 0, 0);
tree.setNode(2, 1, 0);
tree.setNode(3, 1, 1);
tree.setNode(4, 2, 0);
tree.setNode(5, 2, 1);
tree.setNode(6, 2, 2);
tree.setNode(7, 2, 3);

// console.log(tree.root());
// console.log(tree.rightChild());
// console.log(tree.rightChild());
// console.log(tree.parent());
// console.log(tree.leftChild());
// console.log(tree.rightChild());

// depth-first 
function traverse () {
  console.log(tree.getNode());
  if (tree.leftChild() !== undefined) traverse();
  tree.parent();
  if (tree.rightChild() !== undefined) traverse();
  tree.parent();
}

tree.root();
traverse();