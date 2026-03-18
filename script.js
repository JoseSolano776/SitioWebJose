
const cuerpo = document.body;
const btnAzul = document.querySelector('#btnAzul');
const btnRojo = document.querySelector('#btnRojo');
const btnVerde = document.querySelector('#btnVerde');


if (btnAzul) {
    btnAzul.addEventListener('click', () => cuerpo.style.backgroundColor = '#3498db');
    btnRojo.addEventListener('click', () => cuerpo.style.backgroundColor = '#e74c3c');
    btnVerde.addEventListener('click', () => cuerpo.style.backgroundColor = '#2ecc71');
}

class MenuNavegacion extends HTMLElement {
    connectedCallback(){ //metodo especial, este metodo va a ser invocado cuando se carga el DOM de un sitio
        this.innerHTML=`
        <nav class="navbar">
            <div class="logo">Ejemplo Sitio Web</div>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="contacto.html">Contacto</a></li>
                <li><a href="https://google.com" target="_blank">Google</a></li>
            </ul>
    </nav>
        `;
    } // connectedCallBack
}//FIN CLASE

customElements.define('menu-navegacion', MenuNavegacion);