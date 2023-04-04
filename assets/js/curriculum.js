console.log('hello')

function apresetation(){
    let apresetation = document.getElementById('apresetation').innerHTML
    apresetation = apresetation + `<h2>Bruno Siqueira Pedro Melo</h2>
   <div class='contact'> <p>email: bnsiq2015@gmail.com</p> 
    <p>tel: 27 995142534</p></div>
    <h3>Front-End Developer</h3>
    <h4>Hard Skills</h4>
    <ul>
        <li>
            Javascript
        </li>
        <li>Typescript</li>
        <li>React</li>
        <li>Git</li>
        <li>CSS</li>
        <li>HTML</li>

    </ul>
    <h4>Cursos/Formação</h4>
    <ul>
    <li>
        Web Moderno
    </li>
    <li>Front end developer</li>
    <li>Typescript do zero 
    ao avançado.</li>
    <li>Redes</li>
    <li>CSS</li>
    <li>HTML</li>

</ul>
    `
    document.getElementById('apresetation').innerHTML = apresetation

}

apresetation()