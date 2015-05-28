//http://www.geeksforgeeks.org/a-linked-list-with-next-and-arbit-pointer/

// var node1 = {
//   data: null,
//   next: null,
//   arbit: null
// };

function List () {
  List.makeNode = function () {
    return {data: null, next: null, arbit: null};
  };

  this.start = null;
  this.end = null;
  this.length = 0;

  this.add = function (data) {
  	if (this.start === null) {
  	  this.start = List.makeNode();
  	  this.end = this.start;
  	} else {
  	  this.end.next = List.makeNode();
  	  this.end = this.end.next;
  	}
  	//finally we can set the data in the new node
  	this.end.data = data;
    this.length++;
  };

  // i count from 1 (not 0)
  this.item = function (i) {
    var current = this.start;
    while (current !== null) {
      i--;
      if (i === 0) return current;
      current = current.next;
    }
    return null;
  };

  //applies a function to each element of the list
  this.each = function (f) {
    var current = this.start;
    while (current !== null) {
      f(current);
      current = current.next;
    }
  };


}

// create a linked list with as many nodes as we care to use
var list = new List();
for (var i = 1; i <= 5; i++) {
  list.add(i);
}
// // make the arbitrary pointer points to any node in the linked list
// list.each(function (item) {
//   item.arbit = list.item(Math.floor(Math.random() * list.length + 1));
//   //log the nodes in the list
//   console.log(item);
// });

// get a random number from 1 to max except exp
function getRandomNum (max, exp) {
  var randomNum = Math.floor(Math.random() * max + 1);
  while (randomNum === exp) {
    randomNum = Math.floor(Math.random() * max + 1);
  }
  return randomNum;
}

// make the arbitrary pointer points to any node in the linked list except itself
for (var i = 1; i <= list.length; i++) {
  list.item(i).arbit = list.item(getRandomNum(list.length, i));
  //console.log(list.item(i));
}

// 1) Create all nodes in copy linked list using next pointers.
// 2) Store the node and its next pointer mappings of original linked list.
var copyList = new List();
for (var i = 1; i <= list.length; i++) {
  copyList.add(list.item(i).data);
}
for (var i = 1; i <= list.length; i++) {
  // 3) Change next pointer of all nodes in original linked list to point to the corresponding node in copy linked list.
  list.item(i).next = copyList.item(i);
}
for (var i = 1; i <= copyList.length; i++) {
  //copyList.item(i).arbit = list.item(i).arbit.next;
  console.log(list.item(i));
}
