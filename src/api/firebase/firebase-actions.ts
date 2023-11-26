import { sendPasswordResetEmail, signOut } from 'firebase/auth';
import { auth } from './firebaseconfig';
export const googleSignOut = async () => {
	return signOut(auth)
		.then(() => {
			return true;
		})
		.catch((error) => {
			throw new Error(error);
		});
};
//TODO: Wrong email are still returning positive messages
export const sendPasswordResetEmailFirebase = async (email:string) => {
	
	const messageReset = await sendPasswordResetEmail(auth, email)
	.then(() => {
		return {
			status: 'success',
			message: 'E-mail enviado com sucesso'
		}
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message; 
		console.log(errorCode)
		return {
			status: 'fail',
			message: 'type: '+ errorCode+ ': ' + errorMessage
		}
	});
	return messageReset;
}
