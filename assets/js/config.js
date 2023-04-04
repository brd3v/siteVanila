console.log( 'costa gold é pica')
 function header(){
    //name
    let name= document.getElementById('name').innerHTML
     name = name+ `<h1 id='m'> Bruno Pedro</h1>`
     document.getElementById('name').innerHTML = name;

    //menu
    let menu = document.getElementById('menu').innerHTML
    menu = menu + `<a href='http://127.0.0.1:5500/assets/curriculum/curriculum.html'>Curriculo</a> <a href='https://github.com/brd3v?tab=repositories'>Portifolio</a> <a> Contato </a>`
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

