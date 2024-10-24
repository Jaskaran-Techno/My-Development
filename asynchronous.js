// asynchronous programming
setTimeout(function () {
    console.log("hello i am good");
  }, 3000);
  
// callbacks
// callback hell
  
  const animateAll = (animate) => {
    setTimeout(() => {
        animate(words[0]);
        setTimeout(() => {
            animate(words[1]);
            setTimeout(() => {
                animate(words[2]);
            }, 1000)
        }, 1000)
    }, 1000)
  }