import app from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export class authService {
    auth = getAuth()

    async createUser({email, auth, password}) {
        const response = await createUserWithEmailAndPassword(auth, email, password)
    }
}