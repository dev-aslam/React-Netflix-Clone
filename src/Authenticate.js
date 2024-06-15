import {  signInWithEmailAndPassword} from "firebase/auth";
import { auth  } from "./firebase";


export const authenticate  = (props) =>{
return signInWithEmailAndPassword(auth, props.email, props.password)
.then((userCredential) => {
    return userCredential.user;
  })
  .catch((error) => {
    throw error
  });

}

// updateProfile(auth.currentUser, {
//     displayName: "John Smith",
//   }).then(() => {
//     console.log("updated")
//   }).catch((error) => {
//     console.log(error)
//   });