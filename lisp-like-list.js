var CONS = function (a,b) {
  return {CAR: a, CDR: b};
};

function displayList(L) {
  if (L === null) return;
  // if it is undefined then we can assume that L.CAR is a data item and we display it
  if (L.CAR.CAR === undefined) {
  	console.log(L.CAR);
  // If it isn't a data item then it is a list and we need to process it further
  } else {
  	displayList(L.CAR);
  }
  displayList(L.CDR);
}

//[A|---->[B|---->[C|---->[D|---->[null|
var list = CONS("D", null);
list = CONS("C", list);
list = CONS("B", list);
list = CONS("A", list);
// var list2= CONS("A",CONS("B", CONS("C", CONS("D",null))));

displayList(list);

//var tree = CONS(CONS("A", null), CONS("B", null));
var tree = CONS(CONS(CONS("A", null), CONS("B", null)), CONS(CONS("C", null), CONS("D", null)));
displayList(tree);