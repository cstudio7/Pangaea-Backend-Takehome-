import express from 'express';
const router = express.Router();
import db from "../database/models";

router.post('/subscriber/:topic', async (req, res) => {
    const subscription = req.body.endpoint;
    const topic = req.params
    console.log(topic)

    // Saving to Database
    const data = {
        url: subscription,
        topic
    }
   await db.subscriber.create(data)

    res.json({
        url: subscription,
        topic
    });
})

export default router;
