import axios from "axios";

const initialState = {
  user: {},
  fullname: "",
  email: "",
  phoneNumber: "",
  address: "",
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
  mission: "",
  policy: "",
  shelter: ""
};

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_EMAIL = "UPDATE_EMAIL";
const UPDATE_PHONE_NUMBER = "UPDATE_PHONE_NUMBER";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
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
const UPDATE_MISSION = "UPDATE_MISSION";
const UPDATE_POLICY = "UPDATE_POLICY";
const UPDATE_SHELTER_FLAG = "UPDATE_SHELTER_FLAG";
const SET_ADOPTION_INFO = "SET_ADOPTION_INFO";
const GET_USER = "GET_USER";
const GET_USERS = "GET_USERS";
const GET_SHELTERS = "GET_SHELTERS";

function userReducer(state = initialState, action) {
  console.log(action.type, action.payload, state);
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
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: action.payload
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
    case UPDATE_MISSION:
      return {
        ...state,
        mission: action.payload
      };
    case UPDATE_POLICY:
      return {
        ...state,
        policy: action.payload
      };

    case UPDATE_SHELTER_FLAG:
      return {
        ...state,
        shelter: action.payload
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload.data
      };

    case GET_USERS:
      return {
        ...state,
        user: action.payload.data
      };

    case GET_SHELTERS:
      return {
        ...state,
        user: action.payload.data
      };

    default:
      return state;
  }
}

export function setAdoptionInfo(
  authid,
  fullname,
  city,
  email,
  phoneNumber,
  address,
  photoURL,
  living,
  aboutMe,
  species,
  breed,
  gender,
  color,
  size,
  age,
  goodWith,
  mission,
  policy,
  shelter
) {
  // console.log({
  //   authid,
  //   fullname,
  //   city,
  //   email,
  //   phoneNumber,
  //   address,
  //   photoURL,
  //   living,
  //   aboutMe,
  //   species,
  //   breed,
  //   gender,
  //   color,
  //   size,
  //   age,
  //   goodWith,
  //   mission,
  //   policy,
  //   shelter
  // });
  return {
    type: SET_ADOPTION_INFO,
    payload: axios.post("/api/user", {
      authid,
      fullname,
      city,
      email,
      phoneNumber,
      address,
      photoURL,
      living,
      aboutMe,
      species,
      breed,
      gender,
      color,
      size,
      age,
      goodWith,
      mission,
      policy,
      shelter
    })
  };
}

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
export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
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
export function updateMission(mission) {
  return {
    type: UPDATE_MISSION,
    payload: mission
  };
}
export function updatePolicy(policy) {
  return {
    type: UPDATE_POLICY,
    payload: policy
  };
}

export function updateShelterFlag(shelter) {
  return {
    type: UPDATE_SHELTER_FLAG,
    payload: shelter
  };
}

export function getUser() {
  return {
    type: GET_USER,
    payload: axios("/api/user")
  };
}

export function getUsers() {
  return {
    type: GET_USERS,
    payload: axios("/api/users")
  };
}

export function getShelters() {
  return {
    type: GET_SHELTERS,
    payload: axios("/api/shelters")
  };
}
export default userReducer;
