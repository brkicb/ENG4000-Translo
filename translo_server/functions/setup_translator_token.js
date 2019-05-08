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

    const videoGrant = new VideoGrant({
      room: identity,
    });

    const token = new AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret);
    token.addGrant(videoGrant);
    token.identity = identity;
    return res.send({ token: token.toJwt() });
};
