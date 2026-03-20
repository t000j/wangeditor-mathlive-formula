import "mathlive/static.css";
import "mathlive";

class WEMathliveCard extends HTMLElement {
  static get observedAttributes() {
    return ["data-value"];
  }

  connectedCallback() {
    this.renderFormula();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "data-value" && oldValue !== newValue) {
      this.renderFormula();
    }
  }

  async renderFormula() {
    const value = this.dataset.value || "";
    this.innerHTML = `<math-span>${value}</math-span>`;

    const mathSpan = this.querySelector("math-span");
    if (mathSpan && typeof mathSpan.render === "function") {
      await mathSpan.render();
    }
  }
}

if (!window.customElements.get("w-e-mathlive-card")) {
  window.customElements.define("w-e-mathlive-card", WEMathliveCard);
}