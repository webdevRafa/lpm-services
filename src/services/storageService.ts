import { storage } from "../firebaseConfig";
import { ref, getDownloadURL } from "firebase/storage";

export const getBackgroundImageUrl = async () => {
    const imageRef = ref(storage, "real-estate-listings/driveway.jpg");
    return await getDownloadURL(imageRef);
}