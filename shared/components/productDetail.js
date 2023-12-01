class ProductDetail extends HTMLElement {
  constructor() {
    super();

    // Create a shadow DOM
    this.attachShadow({ mode: "open" });

    // Include Bootstrap CSS in the shadow DOM
    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute(
      "href",
      "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    );
    this.shadowRoot.appendChild(linkElement);
  }

  static get observedAttributes() {
    return ["name", "type", "count"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const name = this.getAttribute("name") || "";
    const type = this.getAttribute("type") || "";
    const count = this.getAttribute("count") || "";

    this.shadowRoot.innerHTML = `
      <div class="container mt-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Product Details</h5>
            <p class="card-text"><strong>Name:</strong> ${name}</p>
            <p class="card-text"><strong>Type:</strong> ${type}</p>
            <p class="card-text"><strong>Count:</strong> ${count}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("product-detail", ProductDetail);
