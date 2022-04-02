import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhr4PhNv5rIT3TROWW-1UtVscSa-GT9uE",
  authDomain: "ztm--crown-ecommerce-v2.firebaseapp.com",
  projectId: "ztm--crown-ecommerce-v2",
  storageBucket: "ztm--crown-ecommerce-v2.appspot.com",
  messagingSenderId: "303897843871",
  appId: "1:303897843871:web:2855b1f33268492adcaaaa",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

export const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const createUserDoc = async (userAuthData) => {
  if (!userAuthData) {
    console.error("User auth data needed");
    return;
  }

  const userDocRef = doc(db, "users", userAuthData.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    // Create user
    const { displayName, email } = userAuthData;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userDocRef;
};

export const userRegistration = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const userSignIn = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const userSignOut = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = async (callback) => {
  return onAuthStateChanged(auth, callback);
};


export const addCollectionAndDocuments = async (collectionKey, dataToAdd) => {
  const collectionRef = collection(db, collectionKey);
  console.log("started");

  const batch = writeBatch(db);

  dataToAdd.forEach(item => {
    const docRef = doc(collectionRef, item.title.toLowerCase());
    batch.set(docRef, item);
  });

  await batch.commit();

  console.log("done");
}

export const fetchData = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc, snapshot) => {
    const category = snapshot.data().title;
    return {...acc, [category]: snapshot.data()};
  }, []);

  return categoryMap;
}