const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
const myNumber = Math.random();

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (let i = 0; i < 100; i++) {
      ctx.beginPath();
      ctx.fillStyle = "rgb(255 0 0 / 50%)";
      ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  textBox.addEventListener("keydown", event => {
    console.log(`You pressed "${event.key}".`);
  });

  showMessage("Ann", undefined); // Ann: no text given

  function showMessage(from, text = anotherFunction()) {
    // anotherFunction() only executed if no text given
    // its result becomes the value of text
  }

  function showCount(count) {
    // if count is undefined or null, show "unknown"
    alert(count ?? "unknown");
  }

  showCount(0); // 0
  showCount(null); // unknown
  showCount(); // unknown

  function doNothing() {
    return;
  }

  alert( doNothing() === undefined ); // true

