{
    // console.dir(document);
    // console.log(document);

    // console.dir(document.all);
    // console.log(document.body.children[1]);
 
    // console.dir([1,2]);
    // console.log([1,2]);

    document.all[10].innerHTML = "coba aja"; //child 10 == title
    // document.title.inn = "coba aja 2";

    // console.log(document.forms);
    // console.log(document.links);


    // ---------------------get ID ----------------------

    var title = document.getElementById('header-title');
    title.innerText = 'coba aja 3';
    title.innerHTML = '<h3>pake h3 </h3>';
    // title.textContent = '<h2> Coba aja 2 </h2>'; 
    // console.log(title.innerText); // nampilin text yang ada
    // console.log(title.innerHTML); // nampilin semua termasuk tag
    // console.log(title.textContent); // nampilin yang keliatan aja

    // title.style.border = 'solid 2px #000';


    // -------------classname-----------------------
    // var itemlist = document.getElementsByClassName('list-group-item');
    // console.log(itemlist);
    // console.log(itemlist[1]);
    // itemlist[1].textContent = 'list kedua';
    // itemlist[1].style.backgroundColor = 'yellow';

    // for (var i = 0; i < itemlist.length;i++){
    //     itemlist[i].style.backgroundColor = 'grey';
    // }

    // -------------------get Tag--------------------------



    var li = document.getElementsByTagName('li');
    // console.log(li);
    // console.log(li[1]);

    li[1].textContent = 'list kedua';
    li[1].style.backgroundColor = 'yellow';

    for (var i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = '#00acff';
    }


    // ---------------------------Query Selector -------------------
    var header = document.querySelector('#main-header');
    header.style.borderBottom = 'solid 4px';
    var input = document.querySelector('input');

    console.log(input);
    input.value = 'hello world 2';

    var submit = document.querySelector('input[type=submit]');
    submit.value = 'send';

    var lastlist = document.querySelector('li:last-child');
    lastlist.style.color = ' #ff0006';

    var secondlist = document.querySelector('li:nth-child(2)');
    secondlist.style.color = 'blue';

    var oddli = document.querySelectorAll('li:nth-child(odd)');
    var evenli = document.querySelectorAll('li:nth-child(even)');

    for (var i = 0; i < evenli.length; i++) {
        oddli[i].style.borderBottom = 'dashed 3px yellow';
        evenli[i].style.borderBottom = 'solid 4px green';
    }

    var se = document.getElementById('da');
    // se.style.display ='none';
    // se.style.fontSize = '12PX';
} // ---- komen aja isinya
// --------------------------part 1-----------------------

// parentnode/Element

var itemlist = document.querySelector('#items');
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = '#808000'
// console.log(itemlist.parentNode.parentNode.parentNode);

itemlist.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentElement);
// console.log(itemlist.parentElement.parentElement.parentElement);


// child element
// console.log(itemlist.childNodes);
// console.log(itemlist.children);
// console.log(itemlist.children[1]);

itemlist.children[1].style.borderLeft = 'dotted 3px green';
itemlist.firstElementChild.textContent = 'anak pertama';
itemlist.lastElementChild.textContent = 'anak terakhir';

// console.log(itemlist.nextElementSibling);
// console.log(itemlist.previousElementSibling);

itemlist.previousElementSibling.style.backgroundColor = 'blue';

// ----------create element-----------------
var newDiv = document.createElement('div');
newDiv.className = 'helllo';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'newdiv');
newDiv.innerText = 'halo';

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1');
console.log(newDiv);

container.insertBefore(newDiv, h1)

//--------------EVENTS -------------

var button = document.getElementById('button');
// button.addEventListener('click', buttonclick);

{//function buttonclick(e) {
//     document.getElementById('header-title').textContent = 'changed';
//     document.querySelector('#main').style.backgroundColor = '#f4f4f4';

//     console.log(e);
//     console.log(e.ClientX);
//     console.log(e.ClientY);
//     console.log(e.offsetX);
//     console.log(e.offsetY);
//     console.log(e.altKy);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);
}// }

var box = document.getElementById('box');

button.addEventListener('click', runEvent)
button.addEventListener('dblclick', runEvent)
button.addEventListener('mousedown', runEvent)
button.addEventListener('mouseup', runEvent)

box.addEventListener('mouseenter',runEvent)
// box.addEventListener('mouseleave',runEvent)
// 
box.addEventListener('mouseover',runEvent)
// box.addEventListener('mouseout',runEvent)

// box.addEventListener('mousemove',runEvent)
// box.addEventListener('mousewheel',runEvent)

box.addEventListener('mousemove',runEvent)

var iteminput = document.querySelector('input[type="text"]');
var form = document.querySelector('form')
var select = document.querySelector('select')

// iteminput.addEventListener('keydown',runEvent);
// iteminput.addEventListener('keyup',runEvent);
// iteminput.addEventListener('keypress',runEvent);

iteminput.addEventListener('focus',runEvent);
iteminput.addEventListener('blur',runEvent);


// iteminput.addEventListener('cut',runEvent);
// iteminput.addEventListener('paste',runEvent);

// iteminput.addEventListener('input',runEvent);

select.addEventListener('change', runEvent)
select.addEventListener('input', runEvent)

form.addEventListener('submit', runEvent)



var output = document.getElementById('output');


function runEvent(e){
    e.preventDefault();
    console.log('Event type :'+ e.type)
    
    output.innerHTML = '<h3>'+
    e.target.value +'</h3> <h3>' +
    e.offsetX+'</h3><h3>'+
    e.offsetY+'</h3>';

    box.style.backgroundColor = "rgb("+e.offsetX+','+e.offsetY+',40)';

}


// create an object
var newObject = {};
// add a property to object
newObject.newPropName = 'super slick';
// or other syntax
newObject['other new prop name'] = 'mildly slick';
// Now newObject.newPropName will return 'super slick'
newObject.newPropName;
// now to delete
delete newObject.newPropName;

// ---------------- If Else statements---------------
var a = 1;
var b = 2;

if (a < b) {
  console.log('the if is true!');
} else {
  console.log('the if is false!');
}

a === b ? console.log('The statement is true') : console.log('The statement is false');

// switch statements
var a = 4;
switch (a) {
  case 'Oranges':
    console.log('Orange? really?');
    break;
  case 1:
    console.log('a is equal to 1.');
    break;
  default:
    console.log('I run if no one else is true.');
}

// ------------------Timer--------------
function simpleMessage() {alert('This is just a simple alert');}
  
  // set time out
  window.setTimeout(simpleMessage, 5000);
  // if you wanted to clear the timer.
  var timer = window.setTimeout(simpleMessage, 5000);
  window.clearTimeout(timer);
  
  // set interval. will repeat every  5000ms
  window.setInterval(simpleMessage, 5000);
  // if you wanted to clear the intervals.
  var intervalHandler = window.setInterval(simpleMessage, 5000);
  window.clearInterval(intervalHandle);

  /* *******************************************************************************************
 * GLOBAL OBJECTS > OBJECT
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * ******************************************************************************************* */

// Global object: properties
Object.length                                        // length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number does not include the rest parameter. Has a value of 1.
Object.prototype                                     // Represents the Object prototype object and allows to add new properties and methods to all objects of type Object.

// Methods of the Object constructor
Object.assign(target, ...sources)                    // Copies the values of all enumerable own properties from one or more source objects to a target object. method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object
Object.create(MyObject)                              // Creates a new object with the specified prototype object and properties. The object which should be the prototype of the newly-created object.
Object.defineProperty(obj, prop, descriptor)         // Adds the named property described by a given descriptor to an object.
Object.defineProperties(obj, props)                  // Adds the named properties described by the given descriptors to an object.
Object.entries(obj)                                  // Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
Object.freeze(obj)                                   // Freezes an object: other code can't delete or change any properties.
Object.getOwnPropertyDescriptor(obj, prop)           // Returns a property descriptor for a named property on an object.
Object.getOwnPropertyDescriptors(obj)                // Returns an object containing all own property descriptors for an object.
Object.getOwnPropertyNames(obj)                      // Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.
Object.getOwnPropertySymbols(obj)                    // Returns an array of all symbol properties found directly upon a given object.
Object.getPrototypeOf(obj)                           // Returns the prototype of the specified object.
Object.is(value1, value2);                           // Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).
Object.isExtensible(obj)                             // Determines if extending of an object is allowed.
Object.isFrozen(obj)                                 // Determines if an object was frozen.
Object.isSealed(obj)                                 // Determines if an object is sealed.
Object.keys(obj)                                     // Returns an array containing the names of all of the given object's own enumerable string properties.
Object.preventExtensions(obj)                        // Prevents any extensions of an object.
Object.seal(obj)                                     // Prevents other code from deleting properties of an object.
Object.setPrototypeOf(obj, prototype)                // Sets the prototype (i.e., the internal [[Prototype]] property).
Object.values(obj)                                   // Returns an array containing the values that correspond to all of a given object's own enumerable string properties.

// Object instances and Object prototype object (Object.prototype.property or Object.prototype.method())
// Properties
obj.constructor                                      // Specifies the function that creates an object's prototype.
obj.__proto__                                        // Points to the object which was used as prototype when the object was instantiated.

// Methods
obj.hasOwnProperty(prop)                             // Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.
prototypeObj.isPrototypeOf(object)                   // Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.
obj.propertyIsEnumerable(prop)                       // Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.
obj.toLocaleString()                                 // Calls toString().
obj.toString()                                       // Returns a string representation of the object.
object.valueOf()                                     // Returns the primitive value of the specified object.

/* *******************************************************************************************
 * GLOBAL OBJECTS > ARRAY
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * ******************************************************************************************* 

// Global object: properties
Array.length                                         // Reflects the number of elements in an array.
Array.prototype                                      // Represents the prototype for the Array constructor and allows to add new properties and methods to all Array objects.

// Global object: methods
Array.from(arrayLike[, mapFn[, thisArg]])            // Creates a new Array instance from an array-like or iterable object.
Array.isArray(obj)                                   // Returns true if a variable is an array, if not false.
Array.of(element0[, element1[, ...[, elementN]]])    // Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

// Instance: properties
arr.length                                           // Reflects the number of elements in an array.

// Instance: mutator methods
arr.copyWithin(target, start, end)                   // Copies a sequence of array elements within the array.
arr.fill(value, start, end)                          // Fills all the elements of an array from a start index to an end index with a static value.
arr.pop()                                            // Removes the last element from an array and returns that element.
arr.push([element1[, ...[, elementN]]])              // Adds one or more elements to the end of an array and returns the new length of the array.
arr.reverse()                                        // Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.
arr.shift()                                          // Removes the first element from an array and returns that element.
arr.sort()                                           // Sorts the elements of an array in place and returns the array.
array.splice(start, deleteCount, item1, item2, ...)  // Adds and/or removes elements from an array.
arr.unshift([element1[, ...[, elementN]]])           // Adds one or more elements to the front of an array and returns the new length of the array.

// Instance: accessor methods
arr.concat(value1[, value2[, ...[, valueN]]])        // Returns a new array comprised of this array joined with other array(s) and/or value(s).
arr.includes(searchElement, fromIndex)               // Determines whether an array contains a certain element, returning true or false as appropriate.
arr.indexOf(searchElement[, fromIndex])              // Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
arr.join(separator)                                  // Joins all elements of an array into a string.
arr.lastIndexOf(searchElement, fromIndex)            // Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
arr.slice(begin, end)                                // Extracts a section of an array and returns a new array.
arr.toString()                                       // Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.
arr.toLocaleString(locales, options)                 // Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method.

// Instance: iteration methods
arr.entries()                                        // Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
arr.every(callback[, thisArg])                       // Returns true if every element in this array satisfies the provided testing function.
arr.filter(callback[, thisArg])                      // Creates a new array with all of the elements of this array for which the provided filtering function returns true.
arr.find(callback[, thisArg])                        // Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.
arr.findIndex(callback[, thisArg])                   // Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.
arr.forEach(callback[, thisArg])                     // Calls a function for each element in the array.
arr.keys()                                           // Returns a new Array Iterator that contains the keys for each index in the array.
arr.map(callback[, initialValue])                    // Creates a new array with the results of calling a provided function on every element in this array.
arr.reduce(callback[, initialValue])                 // Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
arr.reduceRight(callback[, initialValue])            // Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
arr.some(callback[, initialValue])                   // Returns true if at least one element in this array satisfies the provided testing function.
arr.values()                                         // Returns a new Array Iterator object that contains the values for each index in the array.

*/