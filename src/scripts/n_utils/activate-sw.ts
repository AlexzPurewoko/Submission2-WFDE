export const activateServiceWorker = (activate : boolean) : void => {
    if(!activate) return;

    if("serviceWorker" in navigator){
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("/service-worker.js")
                .then(() => {
                    console.log("Service Worker Successfully installed!");
                })
                .catch((e: any) => {
                    console.error("Cannot install Service Worker: ", e);
                })
        })
    } else {
        console.log("Your browser doesn't support Service Worker :(");
    }
}