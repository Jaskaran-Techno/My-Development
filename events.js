let a = document.getElementsByName("container");
a.onclick = () => {
  console.log("");
};

// addeventlistener

btn.addEventListener("click", function (e) {
  alert("hello1");
});

btn.addEventListener("click", function (e) {
  alert("hello2");
});

let a = prompt("What is your favourite number");
if (a == 2) {
  btn.removeEventListener("clcik", function (e) {
    alert("hello3");
  })
}































