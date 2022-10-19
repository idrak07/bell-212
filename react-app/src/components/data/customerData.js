import firebase from '../Login/firebase.init';
import Customer from '../models/customer';


const firestore = firebase.firestore();

export const getCustomers = async () => {
    try {
        const response = await firestore.collection('engine');
        const data = await response.get();
        let array = [];
        data.forEach(doc => {
            const customer = new Customer(
                doc.id,
                doc.data().question,
                doc.data().option3,
                doc.data().option1,
                doc.data().option2,
                doc.data().selection,
                doc.data().option5,
                doc.data().option4
            );

            array.push(customer);
        });
        return array;
    } catch (error) {
        throw error;
    }
}

export const addCustomer = async (customer) => {
    try {
        await firestore.collection('engine').doc().set(customer);
    } catch (error) {
        throw error;
    }
}

export const getCustomer = async (id) => {
    try {
        const customer = await firestore.collection('engine').doc(id);
        const data = await customer.get();
        return data.data();
    } catch (error) {
        throw error;
    }
}

export const updateCustomer = async (id, data) => {
    try {
        const customer = await firestore.collection('engine').doc(id);
        await customer.update(data)
    } catch (error) {
        throw error;
    }
}

export const deleteCustomer = async (id) => {
    try {
        await firestore.collection('engine').doc(id).delete();
    } catch (error) {
        throw error;
    }
}