import { getStorage, uploadBytesResumable } from "firebase/storage";

const upload = async(file) => {
    const storage = getStorage();
    const date = new Date();
    const storageRef = ref(storage, `images/${file.name + "-" +date}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resole, reject) => {
        uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
                console.log("Uploading file -> progress: " + progress + "% done");
            }, 
            (error) => {
                console.log("Error occured while uploading file in upload.js :: ", error)
                reject("Something went wrong while uploading a file!")
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resole(downloadURL);
                });
            }
            );
    })

}

export default upload