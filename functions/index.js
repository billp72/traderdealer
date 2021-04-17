    const functions = require("firebase-functions");
    const admin = require("firebase-admin");

    admin.initializeApp();

    const express = require("express");
    const app = express();

    const authenticate = async function (req, res, next) {
      if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {
            res.status(403).send('Unauthorized');
            return;
        }
        const idToken = req.headers.authorization.split("Bearer ")[1];
        try {
            const decodedIdToken = await admin.auth().verifyIdToken(idToken);
            req.user = decodedIdToken;
            next();
            return;
        } catch(e) {
            res.status(403).send('Unauthorized');
            return;
        }
    }

    //app.use(authenticate);

    app.get("/", function (req, res) {
        res.status(201).json({message:'logged in'});
    })

    exports.api = functions.https.onRequest(app);
