console.log( 'costa gold é pica')
 function header(){
    //name
    let name= document.getElementById('name').innerHTML
     name = name+ `<h1 id='m'> Bruno Pedro</h1>`
     document.getElementById('name').innerHTML = name;

    //menu
    let menu = document.getElementById('menu').innerHTML
    menu = menu + `<a>Inicio</a> <a>Curriculo</a> <a>Protifolio</a> <a> Contato </a>`
    document.getElementById('menu').innerHTML = menu;

    //menuMobile
    let otherMenu = document.getElementById('otherMenu').innterHTML
    otherMenu =  '|||';
    document.getElementById('otherMenu').innerHTML = otherMenu;
    console.log(otherMenu)

        
}

 header()

