import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  updateMorningSessions,
  updateLunchSession,
  updateAfterNoonSessions,
} from "../redux/features/sessionSlice";

// firebase
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/config";

export const useFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let ref = query(collection(db, "morningSessions"), orderBy("sessionNbr"));

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });

      dispatch(updateMorningSessions(results));
    });

    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    let ref = collection(db, "lunchSession");

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });

      dispatch(updateLunchSession(results));
    });

    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    let ref = query(collection(db, "afterNoonSessions"), orderBy("sessionNbr"));

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });

      dispatch(updateAfterNoonSessions(results));
    });

    return () => {
      unsub();
    };
  }, []);
};
