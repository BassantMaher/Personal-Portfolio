
            // form 
            function openForm() {
              // change the style sheet display property to block for the form to appear
                document.getElementById("myForm").style.display = "block";
              }
              
              function closeForm() {
                // change the style sheet display property to none to disappear form
                document.getElementById("myForm").style.display = "none";
              }
              
              function displayDetails(){
                let email = document.getElementById("email").value;
                let message = document.getElementById("message").value;
                console.log("your email: " + email + "\nyour message: " + message);
              }