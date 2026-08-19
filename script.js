const password = document.getElementById("password");
const strength = document.getElementById("strength");
const infoBtn = document.getElementById("infoBtn");
const infoPanel = document.getElementById("infoPanel");

password.addEventListener("input", () => {
    const pass = password.value;

    let score = 0;
    if (pass.length > 6) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    strength.className = "strength";

    if (pass.length === 0) {
        strength.textContent = "Strength: —";
    } else if (score <= 1) {
        strength.textContent = "Strength: Weak";
        strength.classList.add("weak");
    } else if (score === 2) {
        strength.textContent = "Strength: Medium";
        strength.classList.add("medium");
    } else {
        strength.textContent = "Strength: Strong";
        strength.classList.add("strong");
    }
});

infoBtn.addEventListener("click", () => {
    infoPanel.classList.toggle("show");
});
