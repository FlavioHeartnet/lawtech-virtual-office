import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBZQo1g-BXmb-2jesWRaDzvT-ZNqMR2Xfc',
	authDomain: 'law-tech-project.firebaseapp.com',
	projectId: 'law-tech-project',
	storageBucket: 'law-tech-project.appspot.com',
	messagingSenderId: '842908599365',
	appId: '1:842908599365:web:4d98745db803bdb6f24f2c',
	measurementId: 'G-4GB71Z1QZ3'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
