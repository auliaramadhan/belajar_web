var form = document.getElementById('addForm')
var itemlist = document.getElementById('items')
var filter = document.getElementById('filter')

form.addEventListener('submit', addItem)
itemlist.addEventListener('click', removeItem)
var i = document.querySelector('body');
i.addEventListener('click', logaja)
filter.addEventListener('keyup', filterItems)



// function logaja(e) {
//     console.log(e.target);
// }

function addItem(e) {
    e.preventDefault();

    console.log(e);
    var newItem = document.getElementById('item').value;
    console.log(document.createTextNode(newItem));


    var li = document.createElement('li');

    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    console.log(li);

    var deletebtn = document.createElement('button')

    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);

    console.log(li);


    itemlist.appendChild(li)

}

function removeItem(e){
    if (e.target.classList.contains('delete')) {
        // console.log(1);
        if (confirm('sure?')) {
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}

function filterItems(e) {
    var text = e.target.value.toLowerCase()
var items = itemlist.getElementsByTagName('li');

    Array.from(items).forEach(function(item) {
        var itemname = item.firstChild.textContent;
        console.log(itemname);
        if (itemname.toLocaleLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}

var inputRow = document.getElementsByClassName('form group');
Array.from(inputRow).forEach(function(item) {
    var span = document.createElement('span');
    item.classList.add('grid-wrapper')
    item.appendChild(span);
});