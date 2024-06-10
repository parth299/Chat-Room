import { db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";

export class dbService{

    async writeUserData({userId, username, email}) {
        try {
            await setDoc(doc(db, "users", userId), {
                username,
                email,
                id: userId,
                blocked: []
            });
            await setDoc(doc(db, "userChats", {
                chats:  []
            }))
        } catch (error) {
            console.log("firebase database error :: writeUserData ::" ,error)
        }
    }

    async 
}