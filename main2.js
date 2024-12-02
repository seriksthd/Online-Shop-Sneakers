function toggleForm() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  loginForm.classList.toggle("hidden");
  registerForm.classList.toggle("hidden");
}

document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    if (name && email && password) {
      const userData = { name, email, password };
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Вы успешно зарегистрировались!");
      toggleForm();
    } else {
      document.getElementById("register-error").textContent =
        "Пожалуйста, заполните все поля.";
    }
  });

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      document.getElementById("login-error").textContent =
        "Пользователь не найден. Сначала зарегистрируйтесь.";
    } else {
      if (email === storedUser.email && password === storedUser.password) {
        confirm("Добро пожаловать, " + storedUser.name + "!");
        window.location.href = "index3.html";
      } else {
        document.getElementById("login-error").textContent =
          "Неверный email или пароль.";
      }
    }
  });