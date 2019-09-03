import { firestore } from '../firebase/firebaseUtils';

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

        return userRef;
    }
};