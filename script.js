const cssSnippets = {
  gradient: `.gradient-move {
  background: linear-gradient(90deg,
    #8b5cf6, #ec4899, #f472b6,
    #06b6d4, #8b5cf6);
  background-size: 300% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: gradientMove 4s linear infinite;
}
@keyframes gradientMove {
  0% { background-position: 0% center; }
  100% { background-position: 300% center; }
}`,
  rotate: `.rotate-in {
  display: inline-block;
  animation: rotateIn 2.5s ease-in-out infinite alternate;
}
@keyframes rotateIn {
  0% {
    opacity: 0;
    transform: rotate(-20deg) scale(.3);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
}`,
  blur: `.blur-reveal {
  animation: blurReveal 2.5s ease-in-out infinite alternate;
}
@keyframes blurReveal {
  0% {
    opacity: 0;
    filter: blur(12px);
    letter-spacing: 8px;
  }
  100% {
    opacity: 1;
    filter: blur(0);
    letter-spacing: 0;
  }
}`,
  neon: `.neon-flicker {
  color: #50ff80;
  text-shadow: 0 0 6px #50ff80,
               0 0 12px #50ff80,
               0 0 30px #50ff80;
  animation: flicker 1.8s infinite;
}
@keyframes flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    opacity: 1;
    text-shadow: 0 0 6px #50ff80,
                 0 0 30px #50ff80;
  }
  20%, 24%, 55% {
    opacity: .35;
    text-shadow: none;
  }
}`,
  flip: `.flip-text {
  display: inline-block;
  transform-style: preserve-3d;
  animation: flip3d 3s infinite ease-in-out;
}
@keyframes flip3d {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  50% { transform: rotateX(180deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}`
};

document.querySelectorAll(".copy").forEach(button => {
  button.addEventListener("click", async () => {
    const previous = button.textContent;
    try {
      await navigator.clipboard.writeText(cssSnippets[button.dataset.copy]);
      button.textContent = "Copied!";
    } catch {
      button.textContent = "Copy blocked";
    }
    window.setTimeout(() => button.textContent = previous, 1200);
  });
});
