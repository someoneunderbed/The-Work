export class Presed {
  constructor(click, listmenu) {
    this.click = click;
    this.listmenu = listmenu;
  }

  ListMenu() {
    let click = document.querySelector(this.click);
    let listmenu = document.querySelector(this.listmenu);

    click.addEventListener("click", () => {
      listmenu.classList.toggle("newlist");
    });
  }
}

window.onclick = function (event) {
  if (!event.target.matches(".click")) {
    let dropdowns = document.getElementsByClassName("list");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("newlist")) {
        openDropdown.classList.remove("newlist");
      }
    }
  }
};

export class Presed2 extends Presed {
  constructor(click, listmenu) {
    super(click, listmenu);
  }
  ListMenu() {
    let click = document.querySelector(this.click);
    let listmenu = document.querySelector(this.listmenu);

    click.addEventListener("click", () => {
      listmenu.classList.toggle("newlist");
    });
  }
}

//////////////////////////////////////////////////////////////

// class Labell {
//   constructor(click, listmenu) {
//     this.click = click;
//     this.listmenu = listmenu;
//   }

//   burgerr() {
//     let click = document.querySelector(this.click);
//     let listmenu = document.querySelector(this.listmenu);

//     click.addEventListener("click", () => {
//       listmenu.classList.toggle("newlist2");
//     });
//   }
// }

// const labell = new Labell("#label", "#nav");
// labell.burgerr();
