let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let u: string = "Juan";
  let intentos: number = 1;
  let entro: boolean = false;

  while (intentos <= 3 && entro !== true) {
    let p = prompt("CONTRASEÑA");
    if (u === "Juan") {
      if (p === "eureka") {
        console.log("Bienvenido");
        entro = true;
      } else {
        console.log("Contraseña inválida, intento: ", intentos);
      }
    } else {
      console.log("Usuario inválido, intento: ", intentos);
    }
    intentos = intentos + 1;
  }
});
