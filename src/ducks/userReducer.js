import axios from "axios";

const initialState = {
  fullname: "",
  email: "",
  phoneNumber: "",
  photoURL: "",
  living: "",
  aboutMe: "",
  city: "",
  species: "",
  breed: "",
  gender: "",
  color: "",
  size: "",
  age: "",
  goodWith: "",
  userInfo: ""
};

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_EMAIL = "UPDATE_EMAIL";
const UPDATE_PHONE_NUMBER = "UPDATE_PHONE_NUMBER";
const UPDATE_PHOTO_URL = "UPDATE_PHOTO_URL";
const UPDATE_LIVING = "UPDATE_LIVING";
const UPDATE_ABOUT_ME = "UPDATE_ABOUT_ME";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_SPECIES = "UPDATE_SPECIES";
const UPDATE_BREED = "UPDATE_BREED";
const UPDATE_GENDER = "UPDATE_GENDER";
const UPDATE_COLOR = "UPDATE_COLOR";
const UPDATE_SIZE = "UPDATE_SIZE";
const UPDATE_AGE = "UPDATE_AGE";
const UPDATE_GOOD_WITH = "UPDATE_GOOD_WITH";
const SET_ADOPTION_INFO = "SET_ADOPTION_INFO";

function userReducer(state = initialState, action) {
  // console.log(action.type, action.payload, state);
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        fullname: action.payload
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case UPDATE_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.payload
      };
    case UPDATE_PHOTO_URL:
      return {
        ...state,
        photoURL: action.payload
      };
    case UPDATE_LIVING:
      return {
        ...state,
        living: action.payload
      };
    case UPDATE_ABOUT_ME:
      return {
        ...state,
        aboutMe: action.payload
      };
    case UPDATE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case UPDATE_SPECIES:
      return {
        ...state,
        species: action.payload
      };
    case UPDATE_BREED:
      return {
        ...state,
        breed: action.payload
      };
    case UPDATE_GENDER:
      return {
        ...state,
        gender: action.payload
      };
    case UPDATE_COLOR:
      return {
        ...state,
        color: action.payload
      };
    case UPDATE_SIZE:
      return {
        ...state,
        size: action.payload
      };
    case UPDATE_AGE:
      return {
        ...state,
        age: action.payload
      };
    case UPDATE_GOOD_WITH:
      return {
        ...state,
        goodWith: action.payload
      };

    default:
      return state;
  }
}

export function setAdoptionInfo(
  fullname,
  city,
  email,
  phoneNumber,
  photoURL,
  living,
  aboutMe,
  species,
  breed,
  gender,
  color,
  size,
  age,
  goodWith
) {
  console.log(phoneNumber, aboutMe);
  return {
    type: SET_ADOPTION_INFO,
    payload: axios.post("/api/user", {
      fullname,
      city,
      email,
      phoneNumber,
      photoURL,
      living,
      aboutMe,
      species,
      breed,
      gender,
      color,
      size,
      age,
      goodWith
    })
  };
}

// export function setUserInfo(
//   fullname,
//   city,
//   email,
//   phone,
//   photoURL,
//   living,
//   aboutme
// ) {
//   return {
//     type: SET_USER_INFO,
//     payload: axios.post("/api/user", {
//       fullname,
//       city,
//       email,
//       phone,
//       photoURL,
//       living,
//       aboutme
//     })
//   };
// }

export function updateName(fullname) {
  return {
    type: UPDATE_NAME,
    payload: fullname
  };
}

export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    payload: email
  };
}

export function updateNumber(phoneNumber) {
  return {
    type: UPDATE_PHONE_NUMBER,
    payload: phoneNumber
  };
}

export function updatePhotoURL(photoURL) {
  return {
    type: UPDATE_PHOTO_URL,
    payload: photoURL
  };
}

export function updateLiving(living) {
  return {
    type: UPDATE_LIVING,
    payload: living
  };
}
export function updateAboutMe(aboutMe) {
  return {
    type: UPDATE_ABOUT_ME,
    payload: aboutMe
  };
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}

export function updateSpecies(species) {
  return {
    type: UPDATE_SPECIES,
    payload: species
  };
}

export function updateBreed(breed) {
  return {
    type: UPDATE_BREED,
    payload: breed
  };
}

export function updateGender(gender) {
  return {
    type: UPDATE_GENDER,
    payload: gender
  };
}

export function updateColor(color) {
  return {
    type: UPDATE_COLOR,
    payload: color
  };
}

export function updateSize(size) {
  return {
    type: UPDATE_SIZE,
    payload: size
  };
}

export function updateAge(age) {
  return {
    type: UPDATE_AGE,
    payload: age
  };
}

export function updateGoodWith(goodWith) {
  return {
    type: UPDATE_GOOD_WITH,
    payload: goodWith
  };
}

export default userReducer;
