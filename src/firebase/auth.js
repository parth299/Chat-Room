import app from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export class authService {
    auth = getAuth()
}