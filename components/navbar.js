class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        
            <div class="left">

            <div class="category">
                <a href="/"><div class="title">Home</div></a>
            </div>
            <div class="category">
                <a href="/work.html"><div class="title">Work Experience</div></a>
            </div>
            <div class="category">
                <a href="/projects.html"><div class="title">Projects</div></a>
            </div>
                

                
            </div>
    
            <div class="right">

            </div>
                

        `;

    }
}

customElements.define('navbar-component', NavBar);