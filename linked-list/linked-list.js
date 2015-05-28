// http://www.i-programmer.info/programming/javascript/5328-javascript-data-structures-the-linked-list.html
// var node1 = {
//   data: null,
//   next: null
// };

function List () {
  List.makeNode = function () {
    return {data: null, next: null};
  };

  this.start = null;
  this.end = null;

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
  };

  this.delete = function (data) {
    var current = this.start;
    var previous = this.start;
    while (current !== null) {
      if (data === current.data) {
        if (current === this.start) {
          this.start = current.next;
          return;
        }
        if (current === this.end) this.end = previous;
        previous.next = current.next;
        return;
      }
      previous = current;
      current = current.next;
    }
  };

  this.insertAsFirst = function (d) {
    var temp = List.makeNode();
    temp.next = this.start;
    this.start = temp;
    temp.data = d;
  };

  this.insertAfter = function (t, d) {
    var current = this.start;
    while (current !== null) {
      if (current.data === t) {
        var temp = List.makeNode();
        temp.data = d;
        temp.next = current.next;
        if (current === this.end) this.end = temp;
        current.next = temp;
        return;
      }
      current = current.next;
    }
  };

  this.item = function (i) {
    var current = this.start;
    while (current !== null) {
      i--;
      if (i === 0) return current;
      current = current.next;
    }
    return null;
  };

  // applies a function to each element of the list
  this.each = function (f) {
    // Traversing the List
    var current = this.start;
    while (current !== null) {
      f(current);
      current = current.next;
    }
  };
}

// create a linked list with as many nodes as we care to use
var list = new List();
for (var i = 1; i <= 10; i++) {
  list.add(i);
}

//display the entire list
list.each(function (item) {
  console.log(item.data);
});