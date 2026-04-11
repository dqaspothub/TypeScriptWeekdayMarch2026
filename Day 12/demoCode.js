console.log("start");

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = false;
    if (result) resolve("Join Class ");
    else reject ("Don't Join Class");
  }, 2000);
});

sub.then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("stop");

let promise = new Promise(function (resolve, reject) {
  const x = 10;
  const y = 10;

  if (x == y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Equal..Promise fulfilled");
  })
  .catch(function () {
    console.log("Not Equal..Promise rejected");
  });