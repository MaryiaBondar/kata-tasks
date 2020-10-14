//head

let meta8 = document.createElement("meta");
meta8.setAttribute("charset", "UTF-8");
document.head.appendChild(meta8);

let meta_name = document.createElement("meta");
meta_name.setAttribute("name", "author");
meta_name.setAttribute("content", "Tobolich Alexandr");
document.head.appendChild(meta_name);

let title = document.createElement("title");
title.innerHTML = "Home_work_8";
document.head.appendChild(title);

let font = document.createElement("link");
font.setAttribute("href", "https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
);
font.setAttribute("rel", "stylesheet");
document.head.appendChild(font);

//style
let style = document.createElement('style');
style.innerHTML = `
    .site {
        max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    }
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
    .title {
         margin-bottom:50px ;
    }

   .main {
        display: grid;
        grid-template-columns:30% 30%;
        justify-content: center;
}
    .main_block {
        border: 1px solid #E8E9ED;
        text-align: center;
        padding: 5% 10%;
        border-radius: 10px 0 0 10px;
        text-align: center;
        
    }
    .main_block h6{
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 2.4px;
        color: #9FA3A7;
    }

    .main_block h3{
        font-family: Arvo;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 46px;
        text-align: center;
        color: #212121;
    }

    .main_block p {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 22px;
        text-align: center;
        color: #9FA3A7;
    }

    button {
        margin: 50px;
        outline: none;
        width: 147px;
        height: 46px;
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
    }

    .echo_main_block{
         background: #8F75BE;
        text-align: center;
        padding: 5% 10%;
        border-radius: 0 10px 10px 0;
        text-align: center;
    }

    .echo_main_block h6{
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 2.4px;
        color: #FFC80A;
    }

    .echo_main_block h3{
        font-family: Arvo;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 46px;             
        color: #FFFFFF;
        padding:0 10px 0 10px;
    }

    .echo_main_block p {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 22px;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
    
    .button {
        outline: none;
        width: 147px;
        height: 46px;
        border-radius: 30px;
        border: 3px solid #FFC80A;  
        background: white;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 2.4px;
        color: #212121;
    }
    

`
document.head.appendChild(style);


//body
let site = document.createElement("div");
site.classList.toggle("site");
document.body.appendChild(site);

let site_title = document.createElement("div");
site_title.classList.toggle("title");
site.appendChild(site_title);

let h1 = document.createElement("H1");
h1.innerHTML = "Choose Your Option";
site_title.appendChild(h1);

let p = document.createElement("p");
p.innerHTML = "But I must explain to you how all this mistaken idea of denouncing ";
site_title.appendChild(p);

let main = document.createElement('main')
main.classList.toggle('main')
site.appendChild(main)
//block1
let main_block = document.createElement('div');
main_block.classList.toggle('main_block')
main.appendChild(main_block)

let text_h6 = document.createElement('h6');
text_h6.innerHTML = ('FREELANCER');
main_block.appendChild(text_h6)

let text_h1 = document.createElement('h3');
text_h1.innerHTML = ('Initially designed to ');
main_block.appendChild(text_h1)

let text = document.createElement('p');
text.innerHTML = ('But I must explain to you how all this mistaken idea of denouncing');
main_block.appendChild(text)

let button = document.createElement('button')
button.classList.toggle('button')
button.innerHTML = 'START HERE'
main_block.appendChild(button)

//block2

let echo_main_block = document.createElement('div');
echo_main_block.classList.toggle('echo_main_block')
main.appendChild(echo_main_block)

let echo_text_h6 = document.createElement('h6');
echo_text_h6.innerHTML = ('STUDIO');
echo_main_block.appendChild(echo_text_h6)

let echo_text_h1 = document.createElement('h3');
echo_text_h1.innerHTML = ('Initially designed to ');
echo_main_block.appendChild(echo_text_h1)

let echo_text = document.createElement('p');
echo_text.innerHTML = ('But I must explain to you how all this mistaken idea of denouncing');
echo_main_block.appendChild(echo_text)


let echo_button = document.createElement('button')
echo_button.innerHTML = 'START HERE'
echo_main_block.appendChild(echo_button)


