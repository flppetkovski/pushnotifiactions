let push = require('web-push')

let vapidKeys = {
  publicKey:
    'BMaYH_zyz3btBOKNIpNRiX6Ld7ZsxZeOmV3pVQIidRc2VFv3VvqjAdAzsZMp2_RtbEAgEnrheKq5TQ7SHv3sLZw',
  privateKey: 'SPMXHrgno-XeCf7FarYko4zvRPDuD3BLLNPw0AUUQ7w',
}

push.setVapidDetails(
  'mailto:flp_petkovski@yahoo.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

let sub = [
  {
    endpoint:
      'https://fcm.googleapis.com/fcm/send/eqLYrwvPINg:APA91bG67u3d5E7hFaF_04aWgJ4eA09ADJ5isl-ARKKyN5Xn_0yu1-_CaNXfQZ_Dv8OvC3iDy9EkHNiPk9EdAsa4gkmTVv5P5jzfZXItJAMSFtg7Ea4DJrh5suS7MO7sHGiG4xMHAnTx',
    expirationTime: null,
    keys: {
      p256dh:
        'BKs9kkJxiwugZEqDMbW3cuMEOhIYpZgbbbqlbieJUR1NWJ-KuxvD6Rl6_svqN6N_2uSoad543wVbJazLTJmLWXs',
      auth: 'DwuzbDFy-Mo1iicKsZs0fw',
    },
  },
  {
    endpoint:
      'https://updates.push.services.mozilla.com/wpush/v2/gAAAAABhxYlt_7V6oF1J0H1MiFrDUOnslmWU0kZ7cgPZ2bWiA5HhhszYHMzXnG7OezrUdwFAj0seKbAZZnnmTcy_6oQ8xbdElPO2LOZrqcBycW6u2b_5lHKLhV-qjgkk_iqjYFYw_ozhQlTXpZB7ISeGHYp40aZiWCGe16rmDTADNOt7JpwERq8',
    expirationTime: null,
    keys: {
      p256dh:
        'BKecaWqiHdkcGwHM6VPK-K_hhcORQAu-VgF-YEaT794ZHKs-nNx51rW8idZXAboOQkRr1PhaG9QJTJGmECM--Qw',
      auth: 'NxBbyNLzUaI8eCNoKVU7XA',
    },
  },
  {
    endpoint:
      'https://wns2-par02p.notify.windows.com/w/?token=BQYAAAAjr8xavZiwt0JpIQS48LFhgRRYcd9pDpqu1qn1%2f368sVBW7jSUGD77ITNlD5N6OCt7qM1Kl2P1wNGJSsGBmhAQPOpKbf3Y8WO7SCKYOXYul6ceBd4CQaxmvCIY165%2fwTRpROfojQtMTcqFhOantWdxJm698l2NecWh5lNSQZ29I%2frwPN5louxideQDLfNWavKj%2fYpXtZR%2fksxMbKJ%2flw5ZfsV0464z8vcoqNyH660rzha3MWTWZeDpOhB1en0jHDm756tJsXzYN3%2f%2btG6STFh%2ba80jXoQyJIT4ab1nMHu4VM3CC9UkvCmmD8p5kHg0K9fV1VZKN0X1osZ%2bGZ5nlG60N0zsRQCZ9Bx%2fTP55fymiKw%3d%3d',
    expirationTime: null,
    keys: {
      p256dh:
        'BExMLFLkWii4gHAyA2ypIAr_H9QajMcxbO8VHMv2GZ_ynEJMg50E8iL3NIPpheO4Sd8YMLqjkQ4155Mpr-5kWOQ',
      auth: 'GXB-1wqCCuRaf1cvMuEmVA',
    },
  },
]

// push.sendNotification(
//   sub.forEach((e) => e),
//   'test message'
// )
sub.forEach((e) => push.sendNotification(e, 'test message'))
