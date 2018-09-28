// import axios from "axios";

// const initialState = {
//   petspecies: "",
//   petbreed: "",
//   petname: "",
//   petgender: "",
//   petsize: "",
//   petcolor: "",
//   petage: "",
//   petgoodWith: "",
//   petphotoURL: ""
// };

// const UPDATE_SPECIES = "UPDATE_SPECIES";
// const UPDATE_BREED = "UPDATE_BREED";
// const UPDATE_PETNAME = "UPDATE_PETNAME";
// const UPDATE_GENDER = "UPDATE_GENDER";
// const UPDATE_SIZE = "UPDATE_SIZE";
// const UPDATE_COLOR = "UPDATE_COLOR";
// const UPDATE_AGE = "UPDATE_AGE";
// const UPDATE_GOOD_WITH = "UPDATE_GOOD_WITH";
// const UPDATE_PHOTO_URL = "UPDATE_PHOTO_URL";

// const GET_PETS = "GET_PETS";
// const GET_PET = "GET_PET";
// const SET_PET_INFO = "SET_PET_INFO";

// function petReducer(state = initialState, action) {
//   //   console.log(action.type, action.payload, state);
//   switch (action.type) {
//     case UPDATE_SPECIES:
//       return {
//         ...state,
//         petspecies: action.payload
//       };

//     case UPDATE_BREED:
//       return {
//         ...state,
//         petbreed: action.payload
//       };
//     case UPDATE_PETNAME:
//       return {
//         ...state,
//         petname: action.payload
//       };
//     case UPDATE_GENDER:
//       return {
//         ...state,
//         petgender: action.payload
//       };
//     case UPDATE_SIZE:
//       return {
//         ...state,
//         petsize: action.payload
//       };
//     case UPDATE_COLOR:
//       return {
//         ...state,
//         petcolor: action.payload
//       };
//     case UPDATE_AGE:
//       return {
//         ...state,
//         petage: action.payload
//       };
//     case UPDATE_GOOD_WITH:
//       return {
//         ...state,
//         petgoodWith: action.payload
//       };
//     case UPDATE_PHOTO_URL:
//       return {
//         ...state,
//         petphotoURL: action.payload
//       };

//     case GET_PETS:
//       return {
//         ...state,
//         pets: action.payload.data
//       };
//     case GET_PET:
//       return {
//         ...state,
//         pet: action.payload.data
//       };
//     default:
//       return state;
//   }
// }

// export function setPetInfo(
//   petspecies,
//   petbreed,
//   petname,
//   petgender,
//   petsize,
//   petcolor,
//   petage,
//   petgoodWith,
//   petphotoURL,
//   userid
// ) {
//   return {
//     type: SET_PET_INFO,
//     payload: axios.post("/api/user/pets", {
//       petspecies,
//       petbreed,
//       petname,
//       petgender,
//       petsize,
//       petcolor,
//       petage,
//       petgoodWith,
//       petphotoURL,
//       userid
//     })
//   };
// }

// export function updateSpecies(petspecies) {
//   return {
//     type: UPDATE_SPECIES,
//     payload: petspecies
//   };
// }

// export function updateBreed(petbreed) {
//   return {
//     type: UPDATE_BREED,
//     payload: petbreed
//   };
// }

// export function updatePetName(petname) {
//   return {
//     type: UPDATE_PETNAME,
//     payload: petname
//   };
// }

// export function updateGender(petgender) {
//   return {
//     type: UPDATE_GENDER,
//     payload: petgender
//   };
// }

// export function updateSize(petsize) {
//   return {
//     type: UPDATE_SIZE,
//     payload: petsize
//   };
// }

// export function updateColor(petcolor) {
//   return {
//     type: UPDATE_COLOR,
//     payload: petcolor
//   };
// }

// export function updateAge(petage) {
//   return {
//     type: UPDATE_AGE,
//     payload: petage
//   };
// }

// export function updateGoodWith(petgoodWith) {
//   return {
//     type: UPDATE_GOOD_WITH,
//     payload: petgoodWith
//   };
// }

// export function updatePhotoURL(petphotoURL) {
//   return {
//     type: UPDATE_PHOTO_URL,
//     payload: petphotoURL
//   };
// }

// export function getPets() {
//   return {
//     type: GET_PETS,
//     payload: axios("api/user/pets")
//   };
// }

// export function getPet(id) {
//   return {
//     type: GET_PET,
//     payload: axios(`api/user/${id}`)
//   };
// }
// export default petReducer;
