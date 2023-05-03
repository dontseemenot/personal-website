class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="contact">
                <ul>
                    <li>arthur_sze@outlook.com</li>
                </ul>
            </div>
            <div class="copyright">
                <p>Made with plain HTML, CSS, and JS. &#169; 2022 Arthur Sze.</p>
            </div>
        `;
    }
}

customElements.define('footer-component', Footer);