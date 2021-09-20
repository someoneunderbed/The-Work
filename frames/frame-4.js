export class Frame4 {
  constructor(itemClass, framee) {
    this.itemClass = itemClass;
    this.framee = framee;
  }
  frameFunc4() {
    let framee = document.querySelector(this.framee);
    let item = document.querySelector(this.itemClass);
    framee.innerHTML = `<img src="./images/Frame-1.png" alt="">`;
    item.innerHTML = `<h4>did you know</h4> <h2>1000s of trackers follow you every week?</h2> <h1>We block all trackers to keep your data safe.</h1> <button>See Our Bill of Rights</button>`;
    framee.append(item);
  }
}

export class Frame4two extends Frame4 {
  constructor(itemClass, framee) {
    super(itemClass, framee);
    this.itemClass = itemClass;
    this.framee = framee;
  }
  frameFunc4() {
    let framee = document.querySelector(this.framee);
    let item = document.querySelector(this.itemClass);
    framee.innerHTML = `<img src="./images/Frame-2.png" alt="">`;
    item.innerHTML = `<h4>did you know</h4> <h2>You get generic results when you search?</h2> <h1>We let you pick the news sources you trust and retailers you love.</h1> <button>See All Features</button>`;
    framee.prepend(item);
  }
}

export class Frame4three extends Frame4 {
  constructor(itemClass, framee) {
    super(itemClass, framee);
    this.itemClass = itemClass;
    this.framee = framee;
  }
  frameFunc4() {
    let framee = document.querySelector(this.framee);
    let item = document.querySelector(this.itemClass);
    item.innerHTML = `<h2>Created and backed</h2> <h2>by former Google executives</h2> <h1>From the experts who know search best.</h1> <button>Our Story</button>`;
    framee.append(item);
  }
}
