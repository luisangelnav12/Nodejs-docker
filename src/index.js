//empezar aqui la aplicacion
const app = require("./app");

async function main() {
  await app.listen(3000);
  console.log("Server on port 3000");
}
main();
// antes se utilizaba esto ->
// app.listen(3000, () => {
//   console.log("Server on port 3000");
// });
// muestre por consola como se esta ejecuentando el -it
// para crear la imagen hacemos el comando
// docker build -t my-node-app . - el -t es para nombre
// docker images para verificar siexiste la imagen
// docker run -it -p 4000:3000 my-node-app
// docker run -d -p 4000:3000 my-node-app solo te da un id de la imagen y normal
