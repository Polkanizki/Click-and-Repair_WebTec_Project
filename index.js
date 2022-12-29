if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registrato!");
        console.log(registration);
    }).catch(error => {
        console.log("Registrazione SW fallita!");
        console.log(error);
    });
}