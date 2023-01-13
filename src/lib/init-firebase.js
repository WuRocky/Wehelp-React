import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAeIFEe-c29R0KaG8yvTDsKv8RZcI6rl6c",
	authDomain: "wehple-project.firebaseapp.com",
	databaseURL: "https://wehple-project-default-rtdb.firebaseio.com",
	projectId: "wehple-project",
	storageBucket: "wehple-project.appspot.com",
	messagingSenderId: "508948855096",
	appId: "1:508948855096:web:05a2be951d0efff1e9e9cd",
	measurementId: "G-B7VLX3QK8E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
