// var title = document.querySelector(".intro h1");
// title.innerHTML = "Hi, I'm Arthur, a Software Engineer.";

// var subtitles = document.querySelectorAll(".intro h2");
// console.log(subtitles);

// var content = document.querySelector('link[rel="import"]').import;

class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <ul class="left">
                <li><a href="index.html">Home</a></li>
                <li><a href="work.html">Work Experience</a></li>
                <li><a href="thesis.html">Thesis</a></li>
            </ul>
            <ul class="right">
            </ul>

        `;

    }
}

customElements.define('navbar-component', NavBar);