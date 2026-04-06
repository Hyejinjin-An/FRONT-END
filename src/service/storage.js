import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../config/firebase";

export async function uploadAvater(userId, file) 
{
    const storageRef = ref(storage, `avatars/${userId}/${file.name}`);
    const snapShot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapShot.ref);   

    return url;
}