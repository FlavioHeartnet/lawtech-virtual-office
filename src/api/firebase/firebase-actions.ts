import { sendPasswordResetEmail, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseconfig';

export const createNewUserWithEmailAndPassword = (email: string, password: string) => {
	return createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			return {
				status: 'success',
				message: userCredential.user.getIdToken
			};
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			return {
				status: 'fail',
				message: 'type: ' + errorCode + ': ' + errorMessage
			};
		});
};

export const googleSignOut = async () => {
	return signOut(auth)
		.then(() => {
			return true;
		})
		.catch((error) => {
			throw new Error(error);
		});
};

export const sendPasswordResetEmailFirebase = async (email: string) => {
	const messageReset = await sendPasswordResetEmail(auth, email)
		.then(() => {
			return {
				status: 'success',
				message: 'E-mail enviado com sucesso'
			};
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode);
			return {
				status: 'fail',
				message: 'type: ' + errorCode + ': ' + errorMessage
			};
		});
	return messageReset;
};
