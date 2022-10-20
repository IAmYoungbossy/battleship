function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);

  circle.style.width = circle.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft}px`;
  circle.style.top = `${event.clientY - button.offsetTop}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];
  if (ripple) ripple.remove();
  button.appendChild(circle);
}

function addRippleEffect() {
  const buttons = document.querySelectorAll("button");
  for (const button of buttons) {
    button.addEventListener("mouseenter", createRipple);
    button.addEventListener("click", createRipple);
  }
}

export { addRippleEffect };
