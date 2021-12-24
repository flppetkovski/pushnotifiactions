self.addEventListener('push', (e) => {
  self.registration.sendNotification(
    e.waitUntil(self.registration.showNotification('push notifaction', {}))
  )
})
