import app from "./firebase";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";

export class authService {
    auth = getAuth(app)

    createUser({email, password}) {
        createUserWithEmailAndPassword(this.auth, email, password)
        .then((UserCredential) => {
            const user = UserCredential.user
            console.log(UserCredential)
        })
        .catch((err) => {
            console.error(err.message);
            console.log(err.code);
        })
    }

    signIn({email, password}) {
        signInWithEmailAndPassword(this.auth, email, password)
            .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    logOut() {
        signOut(this.auth)
        .then(() => console.log("Signed out success"))
        .catch((err) => console.log("firebase authservice error :: logOut :: ", err))
    }
}

const authservice = new authService();

export default authservice;