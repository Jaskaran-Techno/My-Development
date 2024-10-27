// async/await automatically returns promises, so you don't have to create new promises.

async function weather() {
    let delhiWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("21 degrees");
      }, 1000);
    });
  
    let bangloreWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("22 degrees");
      }, 2000);
    });
  
    let delhiW = await delhiWeather;
    let bangloreW = await bangloreWeather;
    return [delhiW, bangloreW];
  }
  
  console.log("Welcome to weather control room");
  weather();
  