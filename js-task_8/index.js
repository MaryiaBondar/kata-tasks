document.querySelector('html').setAttribute('lang', 'en-ru');

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaUtf8);

let title = document.createElement('title');
title.innerHTML = 'Title';
document.head.appendChild(title);

let link1 = document.createElement('link');
link1.setAttribute('rel', 'stylesheet');
link1.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet');
document.head.appendChild(link1);

let link2 = document.createElement('link');
link2.setAttribute('rel', 'stylesheet');
link2.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,400;1,700&display=swap" rel="stylesheet');
document.head.appendChild(link2);

let link3 = document.createElement('link');
link3.setAttribute('rel', 'stylesheet');
link3.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet');
document.head.appendChild(link3);

let style = document.createElement('style');
style.innerHTML = `
    h1 {
        font-family: 'Arvo', serif;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 48px;
        text-align: center;

        color: #212121;
        margin-top: 8%;
    }
    p {
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 26px;
        text-align: center;

        color: #9FA3A7;
    }
    .block_main {
        display: flex;
        justify-content: center;
        padding: 5%;
    }
    .main1_list {
        border: 1px solid #E8E9ED;
        text-align: center;
        padding: 5% 10%;
        border-radius: 10px 0 0 10px;
    }
    .main1_list .h3 {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 2.4px;

        color: #9FA3A7;

    }
    .button {
        width: 147px;
        height: 46px;
        left: 14.5px;
        top: 8.5px;
        border-radius: 30px;
        border: 3px solid #FFC80A;  
        background: white;
        margin-top: 55px;
    }
    .button_span1 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 2.4px;

        color: #212121;
    }
    .main2_list{
        background: #8F75BE;
        text-align: center;
        padding: 5% 10%;
        border-radius: 0 10px 10px 0;
    }
    .studio {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 2.4px;

        color: #FFC80A;

    }
    .h1Clone {
        font-family: Arvo;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 46px;
             
        color: #FFFFFF;
         
    }
    .p2Clone {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        
        color: #FFFFFF;

    }
    .button1 {
        width: 147px;
        height: 46px;
        left: 14.5px;
        top: 8.5px;
        border-radius: 30px;
        border: 3px solid #FFC80A;  
        background: #8F75BE;
        margin-top: 55px;
    }
    .button_span2 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 2.4px;

        color: #FFFFFF;
    }
`;
document.head.appendChild(style);

let H1 = document.createElement('h1');
H1.innerHTML = 'Choose Your Option';
document.body.appendChild(H1);


let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
document.body.appendChild(p1);


let container = document.createElement('div');
container.classList.add('block_main');
document.body.appendChild(container);

let main1 = document.createElement('div');
main1.classList.add('main1_list');
container.appendChild(main1);

let h3 = document.createElement('h3');
h3.innerHTML = 'FREELANCER';
h3.classList.add('h3');
main1.appendChild(h3);

let h1 = document.createElement('h1');
h1.innerHTML = 'Initially designed to';
main1.appendChild(h1);

let p2 = document.createElement('p');
p2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
main1.appendChild(p2);


let button1 = document.createElement('button');
button1.classList.add('button');
main1.appendChild(button1);

let span1 = document.createElement('span');
span1.innerHTML = 'START HERE';
span1.classList.add('button_span1');
button1.appendChild(span1);

let main2 = document.createElement('div');
main2.classList.add('main2_list');
container.appendChild(main2);

let studio = document.createElement('h3');
studio.innerHTML = 'STUDIO';
studio.classList.add('studio');
main2.appendChild(studio);

let h1Clone = document.createElement('h1');
h1Clone.innerHTML = 'Initially designed to';
h1Clone.classList.add('h1Clone');
main2.appendChild(h1Clone);

let p2Clone = document.createElement('p');
p2Clone.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p2Clone.classList.add('p2Clone');
main2.appendChild(p2Clone);


let button2 = document.createElement('button');
button2.classList.add('button1');
main2.appendChild(button2);

let span2 = document.createElement('span');
span2.innerHTML = 'START HERE';
span2.classList.add('button_span2');
button2.appendChild(span2);