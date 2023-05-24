export default function register() {
    let swDev = `/serviceWorker.js`;
    navigator.serviceWorker.register(swDev).then((result) => {
        console.log('result', result);
    }).catch((err) => {
        console.log('err', err);
    });
}