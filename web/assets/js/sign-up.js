async function signUp(){
//    console.log("OK");
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
//    console.log(firstName);
//    console.log(lastName);
//    console.log(email);
//    console.log(password);

    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };
    
    const userJson = JSON.stringify(user);
    
    const response = await fetch(
            "SignUp",
    {
        method:"POST",
        body: userJson,
        header: {
            "Content-Type": "application/json"
        }
        
    }
    );
    
    if(response.ok) {
        const json = await response.json();
//        console.log(json);

        if(json.status){ //if true
//            //redirect another page
            document.getElementById("message").className = "text-success";
            document.getElementById("message").innerHTML = json.message;
            windows.location = "verify-account.html";
//            
        }else{  // status false
//            //custom message
//          console.log(json.message);            
            document.getElementById("message").innerHTML = json.message;

            
        }
    }else{
//        console.log(json.message);
        document.getElementById("message").innerHTML = "Registration failed. Please try again.! ";
    }

}

