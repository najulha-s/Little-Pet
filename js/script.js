  frmContato.addEventListener("submit", function (event) {
    event.preventDefault();

    var sucesso = document.getElementById("confirmacao");
    sucesso.style.display = "flex";

    frmContato.reset();

    setTimeout(function () {
        sucesso.style.display = "none";
    },3000);
  });
