import {atom} from "recoil";


export const textState = atom({
    key: 'modalState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });