const admin = require("firebase-admin");
let usersRef = admin.firestore().collection("users");

const createUser = (data, context) => {
  admin
    .auth()
    .createUser({
      email: data.email,
      password: data.password,
      displayName: data.displayName,
    })
    .then((user) => {
      return user;
    })
    .catch((err) => {
      console.log("error", err);
      return err;
    });
};

const sendPasswordResetEmail = (data, context) => {
  auth
    .sendPasswordResetEmail(data.emailAddress)
    .then((res) => {
      console.log("email sent", res);
      return res;
    })
    .catch((error) => {
      console.log("Error sending password reset email", error);
      return error;
    });
};

const addUserToDB = (data, context) => {
  const { id, email, firstName } = data;
  return usersRef
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.data()) {
        return { message: "User already exists" };
      } else {
        return usersRef.doc(id).set({
          id,
          displayName,
          email,
          createdOn: Date.now(),
        });
      }
    })
    .catch((err) => {
      return err;
    });
};

module.exports = {
  createUser,
  sendPasswordResetEmail,
  addUserToDB,
};
