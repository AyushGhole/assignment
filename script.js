document.querySelectorAll(".image-box").forEach((box) => {
  box.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = box.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20;
    const y = ((e.clientY - top) / height - 0.5) * 20;
    box.style.transform = `translate(${x}px, ${y}px)`;
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "translate(0, 0)";
  });
});

document.querySelectorAll(".first").forEach((box) => {
  box.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = box.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20;
    const y = ((e.clientY - top) / height - 0.5) * 20;
    box.style.transform = `translate(${x}px, ${y}px)`;
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "translate(0, 0)";
  });
});
