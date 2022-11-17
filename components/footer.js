class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="contact">
                <ul>
                    <li>arthur_sze@outlook.com</li>
                    <li><a href="https://www.linkedin.com/in/arthur-sze/">
                        <img class="icon" src="images/linkedin.svg" alt="linkedin" />
                    </a></li>
                </ul>
            </div>
            <div class="copyright">
                <p>Made with plain HTML, CSS, and JS. &#169; 2022 Arthur Sze.</p>
            </div>
        `;
    }
}

customElements.define('footer-component', Footer);