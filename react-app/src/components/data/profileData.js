import firebase from '../Login/firebase.init';
import Profile from '../models/profile';


const firestore = firebase.firestore();

export const getProfiles = async () => {
    try {
        const response = await firestore.collection('profile');
        const data = await response.get();
        let array = [];
        data.forEach(doc => {
            const profile = new Profile(
                doc.id,
                doc.data().firstname,
                doc.data().lastname,
                doc.data().phonenumber,
                doc.data().semester,
                doc.data().city,
                doc.data().roll
            );

            array.push(profile);
        });
        return array;
    } catch (error) {
        throw error;
    }
}

export const addProfile = async (profile) => {
    try {
        await firestore.collection('profile').doc().set(profile);
    } catch (error) {
        throw error;
    }
}

export const getProfile = async (id) => {
    try {
        const profile = await firestore.collection('profile').doc(id);
        const data = await profile.get();
        return data.data();
    } catch (error) {
        throw error;
    }
}

export const updateProfile = async (id, data) => {
    try {
        const profile = await firestore.collection('profile').doc(id);
        await profile.update(data)
    } catch (error) {
        throw error;
    }
}

export const deleteProfile = async (id) => {
    try {
        await firestore.collection('profile').doc(id).delete();
    } catch (error) {
        throw error;
    }
}