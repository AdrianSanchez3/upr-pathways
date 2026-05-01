const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const mentorForm = document.getElementById("mentorForm");
const formMessage = document.getElementById("formMessage");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

mentorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const interest = document.getElementById("interest").value;

  if (!name || !email || !interest) {
    formMessage.textContent = "Llena los campos requeridos para continuar.";
    return;
  }

  formMessage.textContent = `Gracias, ${name}. Tu solicitud de orientación en ${interest} fue registrada.`;
  mentorForm.reset();
});
