document.addEventListener("mousemove", (event) => {
  const x = (event.clientX / window.innerWidth) * 100;
  const y = (event.clientY / window.innerHeight) * 100;
  document.documentElement.style.setProperty("--diagonal-x", `${x}%`);
  document.documentElement.style.setProperty("--diagonal-y", `${y}%`);
});

document.getElementById("arrow-down-id").addEventListener("click", () => {
  document.getElementById("diagonal").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("download-ty").addEventListener("click", () => {
  window.location.href =
    "https://github.com/RobertArnosson/keykeeperweb/archive/refs/heads/main.zip";

  setTimeout(() => {
    window.location.href = "./pages/thankyou/thankyou.html";
  }, 400);
});
