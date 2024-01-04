"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("prince");
function signUpUser(name, email, isPaid) {
    console.log("User with email ".concat(email, " signedUP successfully !"));
}
signUpUser("PRINCE", "prince123@gmail.com", true);
// ARROW FUNCTION
var isPaidUser = function (email, isPaid) {
    if (isPaid == true) {
        console.log("User with email ".concat(email, " has paid"));
    }
    else {
        console.log("User with email ".concat(email, " hasn't paid"));
    }
};
isPaidUser("prince123@gmail.com", true);
// MAKE A FUNCTION RETURN ONLY A SPECIFIC TYPE
function checkUser(email, valid) {
    if (valid == true) {
        console.log("User with email ".concat(email, " has paid"));
        var outVal = "User with email ".concat(email, " has paid");
        return outVal;
    }
    else {
        console.log("User with email ".concat(email, " hasn't paid"));
        var outVal = "User with email ".concat(email, " hasn't paid");
        return outVal;
    }
}
checkUser("abc123@gmail.com", true);
