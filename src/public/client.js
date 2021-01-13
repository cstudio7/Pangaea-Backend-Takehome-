const publicVapidKey = "BFNHDvUNVf9osonuUHcoaywaIaPRd5BW-wpqZZmVuomPUryMgdu3bknOyCJHKBea2QGJvxD9NPc2b6hpcdjBvfs";
// // Check for service worker
// if ("serviceWorker" in navigator) {
//   send().catch(err => console.error(err));
// }
//
// // Register SW, Register Push, Send Push
// async function send() {
//   // Register Service Worker
//  await navigator.serviceWorker.register('service-worker.js');
//   // console.log("Service Worker Registered...");
//
//   // Register Push
//   console.log("Registering Push...");
//
//    // const subscription = await register.pushManager.subscribe({
//    //  userVisibleOnly: true,
//    //  applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
//   // }).catch(err => console.log(err));
//   console.log("Push Registered...");
//
//
// }



function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
