let myNodelist = document.getElementsByTagName('li');
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement('span');
  let txt = document.createTextNode('\u00D7');
  span.classList.add('close');
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName('close');
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  let div = this.parentElement;
  div.style.display = 'none';
  }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
  event.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  let li = document.createElement('li');
  let inputValue = document.getElementById('input').value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
  } else {
    document.getElementById('check-list').appendChild(li);
  }
  document.getElementById('input').value = '';

  let span = document.createElement('span');
  let txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = 'none';
    }
  }
}

function removeAll(){
  let lst = document.getElementsByTagName('ul');
    lst[0].innerHTML = '';
}