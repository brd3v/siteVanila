console.log( 'costa gold é pica')
let bemVindo = prompt('Qual seu nome?')
 function header(){
    //name
    let name= document.getElementById('name').innerHTML
     name = name+ `<h1 id='m'> Bem Vindo ${bemVindo}</h1>`
     document.getElementById('name').innerHTML = name;

    //menu
    let menu = document.getElementById('menu').innerHTML
    menu = menu + `<a href='https://brd3v.github.io/siteVanila/assets/curriculum/curriculum.html'>Curriculo</a> <a href='https://github.com/brd3v?tab=repositories'>Portifolio</a> <a> Contato </a>`
    document.getElementById('menu').innerHTML = menu;

    //menuMobile
    let otherMenu = document.getElementById('otherMenu').innterHTML
    otherMenu =  '|||';
    document.getElementById('otherMenu').innerHTML = otherMenu;
    console.log(otherMenu)


        
}

 header()

 function secaoOne(){
    
    //section one
    let secaoOne = document.getElementById('secaoOne').innerHTML
    secaoOne = secaoOne +  `<div class='secaoOne'><img src="public/img/undraw_code_thinking_re_gka2.svg" alt=""><p>Full Stack Developer<p/> <p>Javascript/Typescript</p></div>`
    document.getElementById('secaoOne').innerHTML = secaoOne
    console.log(sec)
 }
 secaoOne()

