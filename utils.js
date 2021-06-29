import { isYes } from "./utils";


export function isYes(word){
    //logic to determine if user input is yes
    //return true or false
    word = word.toLowerCase();

    if (word === 'yes' || word === 'y'){
        return true;
    } else {
        return false;
    }
}
    