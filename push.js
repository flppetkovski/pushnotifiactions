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

push.sendNotification(sub, 'test message')
