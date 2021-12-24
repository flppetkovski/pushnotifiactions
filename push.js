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

let sub = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/eqLYrwvPINg:APA91bG67u3d5E7hFaF_04aWgJ4eA09ADJ5isl-ARKKyN5Xn_0yu1-_CaNXfQZ_Dv8OvC3iDy9EkHNiPk9EdAsa4gkmTVv5P5jzfZXItJAMSFtg7Ea4DJrh5suS7MO7sHGiG4xMHAnTx',
  expirationTime: null,
  keys: {
    p256dh:
      'BKs9kkJxiwugZEqDMbW3cuMEOhIYpZgbbbqlbieJUR1NWJ-KuxvD6Rl6_svqN6N_2uSoad543wVbJazLTJmLWXs',
    auth: 'DwuzbDFy-Mo1iicKsZs0fw',
  },
}

push.sendNotification(sub, 'test message')
