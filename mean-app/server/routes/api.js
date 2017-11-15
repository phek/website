const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient

const url_DB = 'mongodb://li:!lisahax!321@li-shard-00-00-fjoza.mongodb.net:27017,li-shard-00-01-fjoza.mongodb.net:27017,li-shard-00-02-fjoza.mongodb.net:27017/li?ssl=true&replicaSet=Li-shard-0&authSource=admin';

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/cv/get/experiences', (req, res) => {
    MongoClient.connect(url_DB, (err, db) => {
        if (err) return console.log(err);
        else {
            db.collection('cv.experiences').find().toArray((err, result) => {
                if (err) return res.status(500).send(err);
                else res.status(200).json(result);
            })
        }
        db.close();
    });
});

router.get('/get/posts', (req, res) => {
    MongoClient.connect(url_DB, (err, db) => {
        if (err) return console.log(err);
        else {
            db.collection('posts').find().toArray((err, result) => {
                if (err) return res.status(500).send(err);
                else res.status(200).json(result);
            })
        }
        db.close();
    });
});

module.exports = router;
