export class FrameFirst {
  constructor(item, item2) {
    this.item = item;
    this.item2 = item2;
  }

  framefirst() {
    let frame1 = document.querySelector(".frame-1");
    let item = document.querySelector(".inside-1");
    let item2 = document.querySelector(".input-btn");
    frame1.innerHTML = `<img src="./images/Rectangle.png" alt="girl-sitting">`;
    item.innerHTML = ` <h1>Real search results only.</h1> <h1>No ads ever.</h1> <p class="parag-big">Created by ex-Google execs, Neeva gives you a private, ad-free search experience with only real results.</p>`;
    item2.innerHTML = `<input type="email" placeholder="Enter email to sign up"> <button>Get Started</button> <p class="parag-small">No credit card required to sign up. Get 3 months free, then just $4.95 per month.</p> `;
    item.append(item2);
    frame1.prepend(item);
  }
}

export class FrameFirst2 extends FrameFirst {
  constructor(item, item2) {
    super(item, item2);
    this.item = item;
    this.item2 = item2;
  }

  framefirst() {
    let frame1 = document.querySelector(".frame-11");
    let item = document.querySelector(".inside-11");
    let item2 = document.querySelector(".input-btn-11");
    frame1.innerHTML = ` <img src="./images/img2.png" alt="walking">`;
    item.innerHTML = ` <h1>Because you pay for Neeva, we're accountable to you (never advertisers).`;
    item2.innerHTML = `<input type="email" placeholder="Enter email to sign up"> <button>Get Started</button> <p class="parag-small">No credit card required to sign up. Get 3 months free, then just $4.95 per month.</p> `;
    item.append(item2);
    frame1.prepend(item);
  }
}

export class FrameFirst22 extends FrameFirst {
  constructor(item, item2) {
    super(item, item2);
    this.item = item;
    this.item2 = item2;
  }
  framefirst() {
    let frame1 = document.querySelector(".frame-1-4");
    let item = document.querySelector(".inside-12");
    let item2 = document.querySelector(".input-btn");
    item.innerHTML = ` <h1>Join search designed for you, not advertisers.</h1>`;
    item2.innerHTML = `<input type="email" placeholder="Enter email to sign up"> <button>Get Started</button> <p class="parag-small">No credit card required to sign up. Get 3 months free, then just $4.95 per month.</p> `;
    item.append(item2);
    frame1.prepend(item);
  }
}
