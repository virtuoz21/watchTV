import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import addPicture from "./addPicture";

function addPictureStorage(file) {
  const storage = getStorage();

  /** @type {any} */
  const metadata = {
    contentType: "image/jpeg",
    contentType: "image/jpg",
    // contentType: "image/png",
  };

  const storageRef = ref(storage, "profile_images/" + file.name);
  return new Promise((resolve, reject) => {
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // console.error('Error during upload:', error);
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        // switch (error.code) {
        // case 'storage/unauthorized':

        //     break;
        // case 'storage/canceled':

        //     break;

        // // ...

        // case 'storage/unknown':

        //     break;
        console.error("Error during upload:", error);
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log("File available at", downloadURL);
            addPicture(downloadURL);
            resolve(downloadURL);
          })
          .catch((error) => {
            console.error("Error getting download URL:", error);
            reject(error); // Отклоняем промис при ошибке получения URL
          });
      }
    );
  });
}

export default addPictureStorage;
