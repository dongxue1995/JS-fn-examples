// const input = document.querySelector("input"),
//   button_1 = document.querySelector(".button_1"),
//   button_2 = document.querySelector(".button_2"),
//   p = document.querySelector("p");

// class Sentence {
//   static welcome() {
//     return (p.innerHTML = "welcome " + input.value);
//   }

//   constructor(text, color) {
//     this.text = text;
//     this.color = color;
//   }
//   show() {
//     p.innerHTML = this.text + " " + input.value;
//     p.style.color = this.color;
//   }
//   set extra(value) {
//     this.value = value;
//     p.innerHTML += this.value;
//   }
// }
// class Sentence2 extends Sentence {
//   constructor(text, color, fontSize) {
//     super(text, color, fontSize);
//     this.fontSize = fontSize;
//   }
//   show() {
//     super.show();
//     p.style.fontSize = this.fontSize;
//   }
// }

// p.addEventListener("click", () => {
//   Sentence.welcome();
// });
// button_1.addEventListener("click", () => {
//   const newSentence = new Sentence("okay", "#f0ab00");
//   newSentence.show();
//   Sentence.extra = " adding";
// });

// button_2.addEventListener("click", () => {
//   const newSentence2 = new Sentence2("not okey ", "#c1181c", "32px");
//   newSentence2.show();
// });

const input = document.querySelector("input"),
  button_1 = document.querySelector(".button_1"),
  button_2 = document.querySelector(".button_2"),
  p = document.querySelector("p");

class Sentence {
  static welcome() {
    return (p.innerHTML = "welcome " + input.value);
  }

  constructor(text, color) {
    this.text = text;
    this.color = color;
    this._extra = ""; //
  }

  set extra(value) {
    this._extra = value; //
    this.show(); //
  }
  get extra() {
    return `useless words ${this.text} ${input.value} ${this._extra}`;
  }

  show() {
    p.innerHTML = this.text + " " + input.value + this._extra; //
    p.style.color = this.color;
  }
}
class Sentence2 extends Sentence {
  constructor(text, color, fontSize) {
    super(text, color);
    this.fontSize = fontSize;
  }
  show() {
    super.show();
    p.style.fontSize = this.fontSize;
  }
}

p.addEventListener("click", () => {
  Sentence.welcome();
});
button_1.addEventListener("click", () => {
  const newSentence = new Sentence("okay", "#f0ab00");
  newSentence.show();
  newSentence.extra = " adding"; //
  console.log(newSentence.extra); //
});

button_2.addEventListener("click", () => {
  const newSentence2 = new Sentence2("not okey ", "#c1181c", "32px");
  newSentence2.show();
});
