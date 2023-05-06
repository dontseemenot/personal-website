class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="copyright">
                &#169; 2023 Arthur Sze
            </div>
        `;
    }
}

customElements.define('footer-component', Footer);