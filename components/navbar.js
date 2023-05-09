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
                
                <div class="category work-exp">

                    <div class="title with-dropdown">Work Experience &#x25BE</div>
                    <div class="dropdown">
                        <a href="/"><div class="link">CBA - Backend Software Engineer</div></a>
                        <a href="/"><div class="link">CBA - Graduate Backend Software Engineer</div></a>
                        <a href="/"><div class="link">CBA - Graduate Site Reliability Engineer</div></a>
                        <a href="/"><div class="link">UNSW - Research Assistant</div></a>
                        <a href="/"><div class="link">ResMed - Electrical Engineering Intern</div></a>
                        <a href="/"><div class="link">UNSW - Student Developer</div></a>
                    </div>
                </div>
            </div>
    
            <div class="right">

            </div>
                

        `;

    }
}

customElements.define('navbar-component', NavBar);