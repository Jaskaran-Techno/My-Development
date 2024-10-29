
let promise = fetch("https://dog.ceo/api/breeds/image/random");
promise.then((value1) => {
    return value1.json();
}).then((value2) => {
    console.log(value2);
})

let h = fetch("https://mysite.test/payments/qHgZiJQ8YF/otp-complete/");
h.then((values1) => {
    return values1.json();
}).then((values2) => {
    console.log(values2);
});