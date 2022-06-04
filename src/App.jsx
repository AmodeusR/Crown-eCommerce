import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Home, Authentication, Shop, Checkout, PageNotFound } from "./pages";
import { Navigation } from "./components";
import {
  onAuthStateChangedListener,
  createUserDoc,
} from "./utils/firebase/firebase";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      dispatch(setCurrentUser(user));

      if (user) {
        createUserDoc(user);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
