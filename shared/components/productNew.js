class ProductNew extends HTMLElement {
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

    // Your component's HTML content
    this.shadowRoot.innerHTML = `
    <div class="container mt-3">
      <form>
        <div class="form-group">
          <label for="productName">Product Name:</label>
          <input type="text" id="productName" class="form-control" placeholder="Enter product name" required>
        </div>

        <div class="form-group">
          <label for="productType">Product Type:</label>
          <input type="text" id="productType" class="form-control" placeholder="Enter product type" required>
        </div>

        <div class="form-group">
          <label for="productCount">Product Count:</label>
          <input type="number" id="productCount" class="form-control" placeholder="Enter product count" required>
        </div>

        <button type="submit" class="btn btn-primary" id="addProductBtn">Add Product</button>
      </form>
    </div>
    `;

    this.shadowRoot
      .getElementById("addProductBtn")
      .addEventListener("click", () => {
        const productName = this.shadowRoot.getElementById("productName").value;
        const productType = this.shadowRoot.getElementById("productType").value;
        const productCount =
          this.shadowRoot.getElementById("productCount").value;

        // Validate input values
        if (productName && productType && productCount) {
          // Create a new product object
          const newProduct = {
            name: productName,
            type: productType,
            count: parseInt(productCount, 10),
          };

          // Post a message to notify other components about the new product
          window.parent.postMessage(
            { type: "newProduct", data: newProduct },
            "*"
          );
          console.log("after new Product");
        } else {
          alert("Please fill in all fields.");
        }
      });
  }
}

// Define the custom element 'math-operations'
customElements.define("product-new", ProductNew);
