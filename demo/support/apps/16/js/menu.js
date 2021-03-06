const menuTemplate = document.createElement('template')

menuTemplate.innerHTML = `
    <div class="ribbon">
        <ul>
            <li class="menu" id="menu-home">HOME</li>
            <li class="menu with-separator" id="menu-download">DOWNLOAD</li>
        </ul>
    </div>
`

class Menu extends YopElement {

    connectedCallback() {
        this.appendChild(menuTemplate.content.cloneNode(true))
        this.home = this.querySelector('#menu-home')
        this.download = this.querySelector('#menu-download')
        this.home.addEventListener('click', ()=>{
            history.pushState({}, null, '/');
            events.notify('navigation')
        })
        this.download.addEventListener('click', ()=>{
            history.pushState({}, null, '/download');
            events.notify('navigation')
        })
    }
}
customElements.define('yop-menu', Menu)
