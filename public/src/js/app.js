var deferredPrompt;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function() {
            console.log('sw registered!')
        });
}

window.addEventListener('beforeinstallprompt', function (evt) {
    console.log('beforeinstallprompt fired');
    evt.preventDefault();
    deferredPrompt = evt;
    return false;
});