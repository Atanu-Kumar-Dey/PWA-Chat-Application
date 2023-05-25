export default function register() {
    if ("serviceWorker" in navigator) {
        let swDev = `/serviceWorker.js`;
        navigator.serviceWorker
            .register(swDev)
            .then((result) => {
                console.log("Service Worker successfully connected");
            })
            .catch((err) => {
                console.log("err", err);
            });
    }
}