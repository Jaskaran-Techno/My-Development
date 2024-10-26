let p1 = new promise(function (resolve, reject) {
    alert("give me the value");
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
  
  p1.then(() => {
    console.log("Hey this promise is resolved");
  });
  
  p1.then(() => {
    console.log("Hurray, this works fine");
  });
  