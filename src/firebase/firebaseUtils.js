import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAqD2C1-oxuok4TdmtXe05ewE10RjwpQD0",
    authDomain: "clothes-ecommerce-db.firebaseapp.com",
    databaseURL: "https://clothes-ecommerce-db.firebaseio.com",
    projectId: "clothes-ecommerce-db",
    storageBucket: "",
    messagingSenderId: "365331357951",
    appId: "1:365331357951:web:8b99c2bcac7e6763"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//signIn with Google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//Create user in db
export const createUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                uid: userAuth.uid,
                displayName, 
                email, 
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user: ', error.message);
        }
    }
    
    return userRef;
};

export default firebase;