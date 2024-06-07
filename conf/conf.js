const conf = {
    firebaseApi: String(import.meta.env.VITE_FIREBASE_API_KEY),
    firebaseProjectId: String(import.meta.env.VITE_FIREBASE_PROJECT_ID),
    firebaseMessageId: String(import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID),
    firebaseAppId: String(import.meta.env.VITE_FIREBASE_APP_ID),
    firebaseDatabaseUrl: String(import.meta.env.VITE_FIREBASE_DATABASE_URL)
}

export default conf;