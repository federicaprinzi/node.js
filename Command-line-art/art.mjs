import figlet from "figlet";

figlet("Ciao!", function (err, data) {
  if (err) {
    console.log("Qualcosa è andato storto, riprova.");
    console.dir(err);
    return;
  }
  console.log(data);
});
