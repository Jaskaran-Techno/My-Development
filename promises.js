// Javascript promises.
// State and result are the two properties of promises.

let promise = new Promise(function (resolve, reject) {
    alert("hello 4");
    resolve(55);
  });
  
  console.log("hello 1");
  setTimeout(function () {
    console.log("hello 2");
  }, 2000);
  
  console.log("hello 3");
  console.log(promise);


// .then & .ctach syntax
  
promise.then((value) => {
  console.log(value);
})

promise.catch((error) => {
  console.log(error);
})

let promises = new promise(function (resolve, reject) {
  alert("This is a promise");
  reject(56);
});













