const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const buttonBlock = document.getElementById("buttonBlock");

function typeLine(el, duration, callback) {
  const chars = el.textContent.length;
  el.style.width = "0ch";
  el.style.opacity = "1";
  el.style.borderRight = ".15em solid black";
  el.style.animation = `typewriter ${duration}ms steps(${chars}, end) forwards`;
  el.style.setProperty("--target-width", chars + "ch");

  const animation = el.animate(
    [{ width: "0ch" }, { width: chars + "ch" }],
    {
      duration: duration,
      easing: `steps(${chars}, end)`,
      fill: "forwards"
    }
  );

  animation.onfinish = () => {
    el.style.borderRight = "none";
    if (callback) callback();
  };
}

typeLine(line1, 2500, () => {
  typeLine(line2, 2500, () => {
    buttonBlock.style.opacity = "1";
  });
});

document.querySelector(".get-started").addEventListener("click", () => {
  alert("Let's start writing together!");
});
