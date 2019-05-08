const _ = require('lodash');
const admin = require('firebase-admin');

module.exports = function (req, res) {
    if (!req.body.uid) {
        return res.status(422).send({ error: 'You must provide a uid' });
    }

    const AccessToken = require('twilio').jwt.AccessToken;

    const VideoGrant = AccessToken.VideoGrant;

    const uid = String(req.body.uid);

    const twilioAccountSid = 'ACaa7e3cfcc40327edbd3d79a0ced8bc71';
    const twilioApiKey = 'SKf1eae220a0224e7427b2e44d7eef6322';
    const twilioApiSecret = 'EuXAz9OahTND8hNPvfaMW4S7SPpKv3t2';
    
    const identity = uid;

    admin.database().ref('users/').on('value', snapshot => {
        const users = snapshot.val();
        let roomName = '';

        _.each(users, (value, key) => {
            let finalkey = key;
            _.each(value, (value, key) => {
                _.each(value, (value, key) => {
                    if (value.accountType === 'translator') {
                        if (value.available === true) {
                            roomName = finalkey;
                            const videoGrant = new VideoGrant({
                              room: roomName,
                            });
                            const token = new AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret);
                            token.addGrant(videoGrant);
                            token.identity = identity;

                            return res.send({ token: token.toJwt(), room: roomName });
                        }
                    }
                });
            });
        });
    });
};
