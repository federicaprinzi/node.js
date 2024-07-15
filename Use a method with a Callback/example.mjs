import * as fs from "node:fs";

fs.writeFile("callback.txt", "Ciao!", "utf-8", (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`"callback.txt" è stato salvato correttamente`);
  }
});
