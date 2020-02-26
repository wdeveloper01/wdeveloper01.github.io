//EXAMINE THE DOCUMENT OBJECT

//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.all);
//console.log(document.head);
//console.log(document.all[10]);
// console.log(document.forms);
// document.forms[0].action = "http://thisisatest.com";
// document.forms[0].baseURI = "http://localhost:5500/index2.html";


//GET ELEMENTS BY ID

//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent = "Jello";
//headerTitle.innerHTML = "Hello";
//headerTitle.innerText = "Helllo";
//headerTitle.style.borderBottom = 'solid 3px black';

//var header = document.getElementById('main-header');
//header.style.borderBottom = 'solid 2px black';

//GET ELEMENTS BY CLASS

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello2';
// items[1].style.fontweight = 'bold';
// //items[1].style.backgroundColor = 'yellow';

// for (var i = 0; i < items.length; i++) {
// items[i].style.backgroundColor = '#f4f4f4';
// };

// var li = document.getElementsByTagName('li');
// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
//     };
     //QUERY SELECTOR

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'hello';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'red';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'blue';

// //QUERYSELECTORALL

// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';
// titles[1].textContent = 'Fello';

// var odd  = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'lightgrey';
// }

// for (var i = 0; i < even.length; i++) {
//     even[i].style.backgroundColor = 'beige';
// }


//TRAVERSING THE DOM

 var itemList = document.querySelector('ul');
//parentNode
// console.log(itemList);
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'red';

//CHILDNODES

console.log(itemList.children);
itemList.children[1].style.backgroundColor = 'red';

//FIRST CHILD

console.log(itemList.firstChild);
itemList.firstelementChild.style.backgroundColor = 'red';




















