// import client from "./client";


import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from "../config/firebase/firebase";





const getListingsFromFirebase = async (refName,id) => {
  let ref ;
ref  = collection(db, refName);
if(id != null){
  
  ref  = collection(db, refName,id);
}

  const data1 = await getDocs(ref);
  const filteredData = data1.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  
  return filteredData;
};

const getListingByIdFromFirebase = async (refName, id) => {
  const ref = doc(collection(db, refName), id);

  const docSnap = await getDoc(ref);
  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id };
  } else {
    return null; // Document with the given ID not found
  }
};


const getListingDetailsFromFirebase = async (projectRefPath) => {
  

  try {
    
    const projectSnapshot = await getDoc(doc(db, projectRefPath));

    if (projectSnapshot.exists()) {
      const projectData = projectSnapshot.data();
      // Now you have the data for the project
      console.log('Project Data:', projectData);
    } else {
      console.log('Project does not exist.');
    }
  } catch (error) {
    console.error('Error fetching project data:', error);
  }


  // ----------- Bek ---------------


//   let ref ;
// ref  = collection(db, refName);
// if(id != null){
  
//   ref  = collection(db, refName,id);
// }

//   const data1 = await getDocs(ref);
//   const filteredData = data1.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  
//   return filteredData;
};

const getMyListingsFromFirebase = async (currentUserID) => {
  const q = query(missingPersonsCollectionRef, where("userId", "==", currentUserID));

  const querySnapshot = await getDocs(q);

  const filteredData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return filteredData;
};








const getListingsFromFirebaseBySearch = async (searchText) => {

const data1 = await getDocs(missingPersonsCollectionRef)
const filteredData = data1.docs.map((doc) => ({...doc.data(), id: doc.id}) )


 const results = filteredData.filter((person) =>
      person.name.toLowerCase().includes(searchText.toLowerCase())
    );

return results;
};














export default {
  getListingsFromFirebase,getListingByIdFromFirebase, getListingDetailsFromFirebase, getMyListingsFromFirebase, getListingsFromFirebaseBySearch
}



// const getListings = () => client.get(endpoint);
//const endpoint = "/listings";
// export const addListing = (listing, onUploadProgress) => {
//   const data = new FormData();
//   data.append("title", listing.title);
//   data.append("price", listing.price);
//   data.append("categoryId", listing.category.value);
//   data.append("description", listing.description);

//   listing.images.forEach((image, index) =>
//     data.append("images", {
//       name: "image" + index,
//       type: "image/jpeg",
//       uri: image,
//     })
//   );

//   if (listing.location)
//     data.append("location", JSON.stringify(listing.location));

//   return client.post(endpoint, data, {
//     onUploadProgress: (progress) =>
//       onUploadProgress(progress.loaded / progress.total),
//   });
// };

// export default {
//   addListing,
//   getListings,
// };


