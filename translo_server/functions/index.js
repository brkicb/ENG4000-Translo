const admin = require('firebase-admin');
const functions = require('firebase-functions');
const generateToken = require('./generate_token');
const setupTranslatorToken = require('./setup_translator_token');
const retrieveTranslatorName = require('./retrieve_translator_name');
const serviceAccount = require('./service_account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://translo.firebaseio.com"
});

exports.generateToken = functions.https.onRequest(generateToken);
exports.setupTranslatorToken = functions.https.onRequest(setupTranslatorToken);
exports.retrieveTranslatorName = functions.https.onRequest(retrieveTranslatorName);
