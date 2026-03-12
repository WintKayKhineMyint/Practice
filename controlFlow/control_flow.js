let userRole = "admin";
let accessLevel;

if(userRole === "admin"){
    accessLevel = "Full access granted";
}else if (userRole === "manager"){
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level: ",accessLevel);

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome,Admin!";
    }else {
        userMessage = "Welcome,User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message: ", userMessage);

let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:",userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated": "Not Authenticated";
console.log("Authentication Status:",authenticationStatus);

function checkAccess(role){
    if(role === "Employee"){
        console.log("You are authorized to Dietary Services.");
    }else if (role === "Enrolled Member"){
        console.log("You are authorized to have access with one to one interation with a dietician.");
    }else if(role === "Subscriber"){
        console.log("You are authorized to have part of the services.")
    }else if (role === "Non-subscriber"){
        console.log("You need to enroll or at lease subscribe.")
    }else {
        console.log("Role not recognized.")
    }
}
checkAccess("Employee");
checkAccess("Enrolled Member");
checkAccess("Subscriber");
checkAccess("Non-subscriber");
checkAccess("Adam");