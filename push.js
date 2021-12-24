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
    'https://updates.push.services.mozilla.com/wpush/v2/gAAAAABhx…qjgkk_iqjYFYw_ozhQlTXpZB7ISeGHYp40aZiWCGe16rmDTADNOt7JpwERq8',
  keys: {
    auth: 'NxBbyNLzUaI8eCNoKVU7XA',
    p256dh:
      'BKecaWqiHdkcGwHM6VPK-K_hhcORQAu-VgF-YEaT794ZHKs-nNx51rW8idZXAboOQkRr1PhaG9QJTJGmECM--Qw',
  },
}

push.sendNotification(sub, 'test message')
