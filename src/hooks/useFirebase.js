import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import inisializeAthentication from "../components/pages/Login/Firebase/firebase.init";

inisializeAthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [redLocation, setRedLocation] = useState(false);
    const auth = getAuth();


    /**
     * sign in usign google
     */
    const signusingGoogle = () => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
            setError('');
            setRedLocation(true);
        }).catch((error) => {
            setError(error.message);
        }).finally(()=> setIsLoading(false));
    }

    const handleredLocation = () =>{
        setRedLocation(false);
    }

    

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[])

    /**
     * logout system
     */
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
        // Sign-out successful.
        }).finally(()=> setIsLoading(false));
    }

    return {
        user,
        error,
        signusingGoogle,
        logOut,
        isLoading,
        redLocation,
        handleredLocation
    }
}

export default useFirebase;