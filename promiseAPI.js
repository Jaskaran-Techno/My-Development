let a1 = new promise((resolve, reject) => {
    setTimeout(() => {
      resolve("value 1");
    }, 1000);
  });
  
  let a2 = new promise((resolve, reject) => {
    setTimeout(() => {
      resolve("value 1");
    }, 2000);
  });
  
  let a3 = new promise((resolve, reject) => {
    setTimeout(() => {
      resolve("value 1");
    }, 3000);
  });
  
  // This method prints promises individually (one-by-one).
  a1.then((value) => {
    console.log(value);
  });
  
  a2.then((value) => {
    console.log(value);
  });
  
  a3.then((value) => {
    console.log(value);
  });
  
  // This method prints all promises together.
  let promise_all = promise.all([a1, a2, a3]);
  promise_all.then((value) => {
    console.log(value);
  });
  