import express from 'express';
import webPush from "web-push";
import db from "../database/models";
const router = express.Router();

router.post('/publish/:topic', async (req, res) => {
    const topic = req.params;
    const { title, msg } = req.body;
    const subscribers = await db.subscribers.findAndCountAll( { where: { topic }} )
    console.log(subscribers.count)
    const total = subscribers.count;
    webPush.setVapidDetails(
        'mailto:example@yourdomain.org',
        process.env.PUBLIC_VAPID_KEY,
        process.env.PRIVATE_VAPID_KEY
    );
    for( let i = 0; i <= total; i++){
        let subscription;
         subscription = {
            endpoint: 'subscriber.endpoint',
            expirationTime: null,
            // keys: {
            //     p256dh: 'recover from DB',
            //     auth: 'recover from DB'
            }
             const payload = JSON.stringify({
                 title,
                 body: msg
             });
             webPush.sendNotification(subscription, payload);
        }
    res.json({
        topic,
        data: {
            title,
            body: 'hello'
        }
    });
})

export default router;
