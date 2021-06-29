


export function isYes(word){
    //logic to determine if user input is yes
    //return true or false
    word = word.toLowerCase();

    if (word === 'yes' || word === 'y' || word === 'yasss' || word === 'sure' || word === 'okay'){
        return true;
    } else {
        return false;
    }
}

export function isNo(word){
    word = word.toLowerCase();

    if (word === 'no' || word === 'nah'){
        return true;
    } else {
        return false;
    }
}