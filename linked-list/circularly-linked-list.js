function CircleList () {
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
  	  this.end.next = this.start;
  	}
    //finally we can set the data in the new node
    this.end.data = data;
  }

  this.delete = function (data) {
  	var current = this.start;
  	var previous = this.start;
  	while (previous !== this.end) {
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

  this.insertAfter = function (t, d) {
  	var current = this.start;
  	do {
  	  if (current.data === t) {
  	  	var temp = List.makeNode();
  	  	temp.data = d;
  	  	temp.next = current.next;
  	  	if (current === this.end) this.end = temp;
  	  	current.next = temp;
  	  	return;
  	  }
  	  current = current.next;
  	} while (current !== this.end);
  };
}