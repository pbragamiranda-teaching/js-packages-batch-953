import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "reset", "button" ]

  // connect() {
  //   console.log("Hello from our first Stimulus controller");
  //   console.log(this.element);
  //   console.log(this.resetTarget);
  //   console.log(this.buttonTarget);
  // }

  disable() {
    // console.log("It's working!");
    this.buttonTarget.setAttribute("disabled", true);
    this.buttonTarget.innerText = "Curious?!";
    this.resetTarget.classList.remove("d-none");
  }

  reset() {
    // console.log("paranoid")
    this.resetTarget.classList.add("d-none");
    this.buttonTarget.removeAttribute("disabled")
    this.buttonTarget.innerText = "Don't Click me"
  }
}
