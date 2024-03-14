const express = require("express");
const cors = require("cors");
const webpush = require("web-push");

//Middlewares


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const vapidKeys = {
    "publicKey":"BJHMp6MN_Elmu2UO0PN5i9kSXyEHK4GiFiOdWqKQK4WsjRC-CejLUXoztI151p-y_ukT8qG5Kf3T78KE3L285kY",
    "privateKey":"pXTl7L4uhdltycm7zS54dfeUp1jJcUdVgAkvVU-s_ss"
  };

webpush.setVapidDetails(
    'mailto:auchris95@mail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const subscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/c0TVl4psKj0:APA91bHM-M_WTwR-8XU8LIFrSTrIDmyIHCJq9FIdUL0iVAoFPtQXYMfg3G31kCE_QMhmuFOaYCRZYDhyJBXOdIRvU1KcY2yKuLptu2oNJVLlEH6dtpuwTMOANQLRtjLShyAlryFjjd4y',
    expirationTime: null,
    keys: {
      p256dh: 'BJpvUi8IcctTHrm4G3Zsrd67YuL3fZUor8a6M_zE-Wz3h6woLAmlojjrFZkP23z7RkerLY62lWF8KEhQlcckCqA',
      auth: 'HyFkyFG7PJ_T1oqy1oHx7Q'
    }
  }

app.get('/', (req, res) => {
    const payload = JSON.stringify(
        {
            title: "Server notification",
            message: "Esta es un notificación que llega desde el servidor"
        }
    );
    webpush.sendNotification(subscription, payload );
    res.send("Todo ok, funcionando correctamente");
})

app.post('/custom-notification', (req, res) =>{
    const { title, message} = req.body;
    const payload = JSON.stringify({  title,  message});
    webpush.sendNotification(subscription,payload);
    res.send("todo okay, custom notification enviado");
})

app.post('/subscription', (req, res) => {
    const { pushSubscription} = req.body;
    console.log(pushSubscription);
    res.sendStatus(200);
})

const port = 8000;

app.listen(port , () => console.log(`Server listening on port ${port}`));