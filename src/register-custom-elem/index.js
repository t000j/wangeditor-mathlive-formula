import "mathlive/static.css";
import "mathlive";

class WEMathliveCard extends HTMLElement {
  async connectedCallback() {
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
