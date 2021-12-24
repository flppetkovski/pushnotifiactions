self.addEventListener('push', (e) => {
  let options = {}
  self.registration.sendNotification(
    e.waitUntil(self.registration.showNotification('push notifaction', options))
  )
})
