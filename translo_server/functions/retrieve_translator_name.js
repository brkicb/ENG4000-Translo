const _ = require('lodash');
const admin = require('firebase-admin');

module.exports = function (req, res) {
    if (!req.body.uid) {
        return res.status(422).send({ error: 'You must provide a uid' });
    }

    const uid = String(req.body.uid);

    admin.database().ref('users/' + uid).on('value', snapshot => {
        const user = snapshot.val();

        _.each(user, (value, key) => {
            _.each(value, (value, key) => {
                return res.send({ name: value.name });
            });
        });
    });
};
