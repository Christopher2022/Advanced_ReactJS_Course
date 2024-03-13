const express = require("express");
const cors = require("cors");

//Middlewares

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Constantes
const pushSubcription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/fqlnjQmCfak:APA91bGn7NeiZJhh7RnSFMT4hkLp-b0XA0aqCUvNGL1_6n_6R2zoAiHTJOLVA07Sw32YHkzJcznIw1aVBc3VIrvZx9yqcc3yI3NE6zEYLAsI4rpFfGS3oHV8c97aWkz51akkvbVgZJ5Z',
    expirationTime: null,
    keys: {
      p256dh: 'BEXZSaANVbBAWSw5XhmUPOYUO00d2Mb3DHtHYfhFlnBKgDWpg4x-0dIDIKSv7IMNvPYBGwH7SRvxPnrEW2dXGMA',
      auth: 'QikOwoG74LFq-UzXcCYt6Q'
    }
  }

//Routes
app.get('/', (req, res) => {
    res.sendStatus(200).json();
    
});

app.post('/subscription', (req, res) => {
    console.log(req.body);
    res.sendStatus(200).json();
})

app.listen(8000, () => console.log("server listening on port 8000"));