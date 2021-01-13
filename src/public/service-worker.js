console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.sendNotification('Victor test', {
    body: "Subscribe to General Topic"
  });
});
