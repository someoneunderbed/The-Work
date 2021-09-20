export function FrameOne() {
  class Frame {
    constructor(blah, blah2) {
      this.blah = blah;
      this.blah2 = blah2;
    }

    frameFunc() {
      let elem = document.querySelector(".frame-2");
      let item = document.createElement("div");
      let itemOne = document.createElement("div");
      let itemTwo = document.createElement("div");
      item.classList.add("phones");
      itemOne.classList.add("phone-1");
      itemTwo.classList.add("phone-2");
      elem.innerHTML = `<h1 class="txt-1">did you know</h1>`;
      itemOne.innerHTML = `<p class="parag11-1">40% of your search results are actually ads?</p> <img src="./images/phone-1.png" alt="">`;
      itemTwo.innerHTML = ` <p class="parag11-2">100% real results with Neeva</p>  <img src="./images/phone-2.png" alt="">`;
      item.append(itemOne, itemTwo);
      elem.append(item);
    }
  }

  const frame = new Frame();
  frame.frameFunc();
}
