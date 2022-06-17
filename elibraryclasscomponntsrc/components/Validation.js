//ananthi@gmail.com

export function emailValidation(input){
    return /^.+@.+\..+$/.test(input);
}

//passowrd validation
export function passwordValidation(input){
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{5,30}$/.test(input);
}

 export function firstNameValidation(input){
   return /^[a-z]{3,15}$/.test(input);
 }

 export function lastNameValidation(input){
  return /^[A-Za-z].{2,15}$/.test(input);
}
export function bookIdValidation(input){
  return /^[0-9]$/.test(input);
}

export function bookTitleValidation(input){
  return /^[A-Za-z].{3,15}$/.test(input);
}
export function bookDescValidation(input){
  return /^[A-Za-z0-9\s].{3,15}$/.test(input);
}
export function authorNameValidation(input){
  return /^[A-Za-z].{3,15}$/.test(input);
}
export function noBooksValidation(input){
  return /^[0-9].{1,5}$/.test(input);
}

