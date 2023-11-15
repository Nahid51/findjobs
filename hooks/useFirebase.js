import { useEffect, useState } from 'react';
import app from '@/firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { toast } from 'react-toastify';

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = (pathname, router) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const destination = pathname?.state?.from || '/';
                router.push(destination);
                setUser(user);
                console.log(user);
                setError('');
                toast.success("User successfully logged in!");
            }).catch((error) => {
                // Handle Errors here.
                setError(error.message);
                toast.error(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const userRegistration = (email, name, password, pathname, router) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = pathname?.state?.from || '/';
                router.push(destination);
                setError('');
                // Signed in 
                const newUser = { email, displayName: name };
                setUser(newUser);
                toast.success("User successfully registered!");
                // update profile
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
            })
            .catch((error) => {
                setError(error.message);
                toast.error(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, pathname, router) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                // Signed in 
                const destination = pathname?.state?.from || '/';
                router.push(destination);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setError('');
            toast.success("User successfully logged out!");
        })
            .catch((error) => {
                setError(error.message);
                toast.error(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // observe user state
    useEffect(() => {
        const userState = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => userState;
    }, [auth]);

    return {
        user, admin, userRegistration, loginUser, logOut, isLoading, error, googleSignIn
    }
};

export default useFirebase;