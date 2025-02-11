function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

luckyDraw("Sabrina")
  .then((result) => {
    console.log(result);
    return luckyDraw("Caroline");
  })
  .then((result) => {
    console.log(result);
    return luckyDraw("Joe");
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err.message);
  });
