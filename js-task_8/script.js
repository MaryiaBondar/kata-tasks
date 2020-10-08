

let title = document.createElement('title');
title.innerHTML = 'Widget';
document.head.appendChild(title);

let metaUTF8 = document.createElement('meta');
metaUTF8.setAttribute = ('charset', 'UTF-8');
document.head.appendChild(metaUTF8);

let metaLang = document.createElement('meta');
metaLang.setAttribute = ('lang', 'EN');
document.head.appendChild(metaLang);

let metaName = document.createElement('meta');
metaName.setAttribute = ('author', 'Лепешко Иван');
document.head.appendChild(metaName);

let link1 = document.createElement('link');
link1.setAttribute('rel', 'stylesheet');
link1.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Montserrat:wght@400;700&family=Open+Sans:wght@400;700&display=swap');
document.head.appendChild(link1);


let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
document.body.appendChild(h1);

let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
document.body.appendChild(p1);


/*
let container = document.createElement('div');
container.classList.add('content');
document.body.appendChild(container);
*/


let div1 = document.createElement('div');
div1.classList.add('block');
document.body.appendChild(div1);


let freelance = document.createElement('h4');
freelance.innerHTML = 'FREELANCER';
freelance.classList.add('freelance');
document.body.appendChild(freelance);
div1.appendChild(freelance)

let h2 = document.createElement('h2');
h2.innerHTML = 'Initially designed to';
document.body.appendChild(h2);
div1.appendChild(h2)

let p2 = document.createElement('p2');
p2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
document.body.appendChild(p2);
div1.appendChild(p2)

let buttonLeft = document.createElement('button');
buttonLeft.innerHTML = 'START HERE';
document.body.appendChild(buttonLeft)
div1.appendChild(buttonLeft)

/*
let div2 = document.createElement('div');
div1.classList.add('block');
document.body.appendChild(div2);


let studio = document.createElement('h4');
studio.innerHTML = 'STUDIO';
studio.classList.add('h4');
document.body.appendChild(studio);
div2.appendChild(studio);


let h2_2 = document.createElement('h2');
h2.innerHTML = 'Initially designed to';
document.body.appendChild(h2_2);
div2.appendChild(h2_2);

let p3 = document.createElement('p');
p2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
document.body.appendChild(p3);
div2.appendChild(p3);

let buttonRight= document.createElement('button');
buttonRight.innerHTML = 'START HERE';
document.body.appendChild(buttonRight)
div2.appendChild(buttonRight);
*/

let style = document.createElement('style');
style.innerHTML = `
h1 {
    font-family: Arvo;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    color: #212121;
}

p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    color: #9FA3A7;
}

.block_content {
    display: flex;
    justify-content: center;

.freelance h4 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.4px;
    color: #9FA3A7;
}

`;
document.head.appendChild(style);

