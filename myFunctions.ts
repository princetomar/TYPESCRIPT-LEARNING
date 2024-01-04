function addTwo(num: number) {
  return num + 2;
}

addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("prince");

function signUpUser(name: string, email: string, isPaid: boolean) {
  console.log(`User with email ${email} signedUP successfully !`);
}

signUpUser("PRINCE", "prince123@gmail.com", true);

// ARROW FUNCTION
let isPaidUser = (email: string, isPaid: boolean) => {
  if (isPaid == true) {
    console.log(`User with email ${email} has paid`);
  } else {
    console.log(`User with email ${email} hasn't paid`);
  }
};

isPaidUser("prince123@gmail.com", true);

// MAKE A FUNCTION RETURN ONLY A SPECIFIC TYPE
function checkUser(email: string, valid: boolean): string {
  if (valid == true) {
    console.log(`User with email ${email} has paid`);
    let outVal = `User with email ${email} has paid`;
    return outVal;
  } else {
    console.log(`User with email ${email} hasn't paid`);
    let outVal = `User with email ${email} hasn't paid`;
    return outVal;
  }
}

checkUser("abc123@gmail.com", true);

export {};
