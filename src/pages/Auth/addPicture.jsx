import { getAuth, updateProfile } from "firebase/auth";

function addPicture(picture) {
  const auth = getAuth();

  updateProfile(auth.currentUser, {
    photoURL: picture,
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
}

export default addPicture;
