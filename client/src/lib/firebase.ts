import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

let firebaseApp: FirebaseApp | null = null;
let firestoreDb: Firestore | null = null;

const firebaseConfig = {
	apiKey: "AIzaSyAGV-ypFbhiTscbDJyXVcZO1d8iIR2jQUk",
	authDomain: "skill-chain-sih.firebaseapp.com",
	projectId: "skill-chain-sih",
	storageBucket: "skill-chain-sih.firebasestorage.app",
	messagingSenderId: "1035225376387",
	appId: "1:1035225376387:web:2f7b3b163fe5a4edd75db6",
	measurementId: "G-YQHTYLV697",
};

export function getFirebaseApp(): FirebaseApp {
	if (firebaseApp) return firebaseApp;
	const apps = getApps();
	firebaseApp = apps.length ? apps[0] : initializeApp(firebaseConfig);
	return firebaseApp;
}

export function getDb(): Firestore {
	if (firestoreDb) return firestoreDb;
	const app = getFirebaseApp();
	firestoreDb = getFirestore(app);
	return firestoreDb;
}


