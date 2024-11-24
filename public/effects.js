
let signedIn = false;


function buttonAction(element) {
    if (signedIn == true){

        if (element.classList.contains("reserved")) {
            element.classList.remove("reserved")
            var textParts = element.textContent.split('\n');
    
            element.textContent = textParts[0];
            
            
        }else {
            element.classList.add("reserved")
            element.textContent =element.textContent + '\n Reserved';
    
            
        }
    }else{

        alert("You must sign in to reserve courts")
    }

}

function signIn(element){
    if (signedIn == true){
        signedIn = false;
        element.textContent = "Sign In"
    }else{
        signedIn = true;
        element.textContent = "Sign Out"
    }

}


