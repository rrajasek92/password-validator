export function validatePassword (conditions, password) {
  let map = {};
  console.log("PASSWORD: " + password)
  for(let i in conditions){
    map[conditions[i]] = false;
    valSwitch(conditions[i], map, password);
  }
  return map;
}

function valSwitch(condition, map, password) {
  switch(condition){
    case "8-72 Characters":
      if(password.length>=8 && password.length<=72) map[condition] = true;
      break;
    case "1 Lower Case Character":
      for(let i in password){
        if(password[i] != password[i].toUpperCase()){
          map[condition] = true;
          break;
        }
      }
      break;
    case "Should Not Match Your Email Address":
      if(password!=sessionStorage.getItem("email")) map[condition] = true;
      break;
    case "1 Uppercase Character":
      for(let i in password){
        if(password[i] != password[i].toLowerCase()){
          map[condition] = true;
          break;
        }
      }
      break;
    case "1 Number":
      map[condition] = /\d/.test(password);
      break;
    default:
      return;
  }
}
