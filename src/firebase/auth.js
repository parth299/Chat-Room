import app from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
}

const authservice = new authService();

export default authservice;