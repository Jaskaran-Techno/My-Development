// Cookies are small strings of data stored in the browser.

console.log(document.cookie);
document.cookie = "Jaskaran1122334455";
console.log(document.cookie);

let key = prompt("enter your key");
document.cookie = `${encodeURIComponent(key)}`;
console.log(document.cookie);
