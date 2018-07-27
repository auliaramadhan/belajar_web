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


