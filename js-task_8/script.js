
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

let container = document.createElement('div');
container.classList.add('content');
document.body.appendChild(container);

let mainLeft = document.createElement('div'); 
mainLeft.classList.add('mainLeft');
container.appendChild(mainLeft);

let freelance = document.createElement('h4');
freelance.innerHTML = 'FREELANCER';
freelance.classList.add('freelance');
mainLeft.appendChild(freelance);

let h2 = document.createElement('h2');
h2.innerHTML = 'Initially designed to';
h2.classList.add('h2');
mainLeft.appendChild(h2);

let p2 = document.createElement('p');
p2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p2.classList.add('p2');
mainLeft.appendChild(p2);

let buttonLeft = document.createElement('button');
buttonLeft.innerHTML = 'START HERE';
buttonLeft.classList.add('buttonLeft');
mainLeft.appendChild(buttonLeft);

let mainRight = document.createElement('div');
mainRight.classList.add('mainRight');
container.appendChild(mainRight);

let studio = document.createElement('h4');
studio.innerHTML = 'STUDIO';
studio.classList.add('studio');
mainRight.appendChild(studio);

let h2r = document.createElement('h2');
h2r.innerHTML = 'Initially designed to';
h2r.classList.add('h2r');
mainRight.appendChild(h2r);

let p2r = document.createElement('p');
p2r.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p2r.classList.add('p2r');
mainRight.appendChild(p2r);

let buttonRight = document.createElement('button');
buttonRight.innerHTML = 'START HERE';
buttonRight.classList.add('buttonRight');
mainRight.appendChild(buttonRight);



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
    padding-bottom: 3%;
}

.freelance {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.4px;
    color: #9FA3A7;
    text-align: center;
    padding-top: 80px;
}

.h2 {
    padding-top: 20px;
    max-width: 210px;
    font-family: Arvo;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 46px;
    margin: 0 auto;
    text-align: center;
    color: #212121;
}


.p2 {
    padding-top: 20px;
    padding-bottom: 50px;
    max-width: 210px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
    margin: 0 auto;
    color: #9FA3A7;
}

.buttonLeft {
    width: 147px;
    height: 46px;
    left: 14.5px;
    top: 8.5px;
    border-radius: 30px;
    border: 3px solid #FFC80A;         
    background-color: #fff;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 2.4px;
    color: #212121;
    margin: 0 auto;
    display: block;
    margin-bottom: 10%;
}


.mainLeft {
    width: 50%;
}


.studio {
    padding-top: 80px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 2.4px;
    color: #FFC80A;
}

.h2r {
    padding-top: 20px;
    max-width: 210px;
    font-family: Arvo;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 46px;
    margin: 0 auto;
    text-align: center;
    color: #FFFFFF;
}

.p2r {
    padding-top: 20px;
    padding-bottom: 50px;
    max-width: 210px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
    margin: 0 auto;
    text-align: center;
    color: #FFFFFF;
}

.buttonRight {
    width: 147px;
    height: 46px;
    left: 14.5px;
    top: 8.5px;
    border-radius: 30px;
    border: 3px solid #FFC80A;  
    background: #8F75BE;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 2.4px;
    color: #FFFFFF;
    margin: 0 auto;
    display: block;
    margin-bottom: 10%;
}


.mainRight {
    width: 50%;
    background-color: #8F75BE;
}

.content {
    display: flex;
    width: 800px;
    margin: 0 auto;
    border: 1px solid #E8E9ED;
    border-radius: 5px;
}

`;
document.head.appendChild(style);

