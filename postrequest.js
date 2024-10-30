let options = {
    Methods: "POST",
    Headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: "Jaskaran",
      body: "Skone",
      userId: 1,
    }),
  };
  
  fetch("https://jsonplaceholder.typicode.com/posts", options)
    .then((response) => response.json())
    .then((json) => console.log(json));
  