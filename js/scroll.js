document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("scrollTop");
  if (!btn) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
