export default function register() {
    let swDev = `/serviceWorker.js`;
    navigator.serviceWorker.register(swDev).then((result) => {
        console.log("Service Worker successfully connected");
    }).catch((err) => {
        console.log('err', err);
    });
}