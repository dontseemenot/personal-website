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
            <nav>
                <ul class="left">
                
                    <li class="nav-button"><a href="/">Home</a></li>

                    <li class="nav-button">Work Experience &#x25BE

                        <ul class="dropdown">

                            <li>Commonwealth Bank of Australia &#x25BE</li>
                            <ul class="subdropdown">
                                <li class="highlightable"><a href="#">Backend Software Engineer</li>
                                <li class="highlightable"><a href="#">Graduate Backend Software Engineer</li>
                                <li class="highlightable"><a href="#">Graduate Site Reliability Engineer</li>
                            </ul>
                            

                            <li>UNSW &#x25BE</li>
                                <ul class="subdropdown">
                                    <li class="highlightable"><a href="#">Research Assistant</li>
                                    <li class="highlightable"><a href="#">Student Developer</li>
                                </ul>

                            
                            <li>ResMed &#x25BE</li>
                                <ul class="subdropdown">
                                    <li class="highlightable"><a href="#">Electrical Engineering Intern</li>
                                </ul>


                            <li class="highlightable"><a href="#">Casual</a></li>
                        </ul>
                    </li>

                    <li class="nav-button">Projects &#x25BE

                    <ul class="dropdown">

                        <li class="highlightable"><a href="thesis.html">Thesis</a></li>
                        
                    </ul>
                </li>
                    


                </ul>
                <ul class="right">

                </ul>
            </nav>
        `;

    }
}

customElements.define('navbar-component', NavBar);