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

export const sendPasswordResetEmailFirebase = (email:string) => {
	return sendPasswordResetEmail(auth, email)
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
}
