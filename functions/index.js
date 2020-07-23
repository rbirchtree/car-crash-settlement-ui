const admin = require("firebase-admin");
admin.initializeApp();
const functions = require("firebase-functions");

const {
  createUser,
  sendPasswordResetEmail,
  addUserToDB,
} = require("./CloudFunctions/userFunctions");

module.exports = {
  createUser: functions.https.onCall(createUser),
  sendPasswordResetEmail: functions.https.onCall(sendPasswordResetEmail),
  addUserToDB: functions.https.onCall(addUserToDB),
};
