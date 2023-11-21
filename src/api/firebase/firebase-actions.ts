import { signOut } from 'firebase/auth';
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
