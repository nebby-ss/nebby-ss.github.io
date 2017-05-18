function validateForm(){
			var err = false;
			var errMsg = "";
			//code to validate form entries
			
			var txtFullName = document.getElementById("fullname").value;
			var txtEmail = document.getElementById("email").value;
			var txtSubject = document.getElementById("subject").value;
			var txtEnquiry = document.getElementById("enquiry").value;
			
			/*
			if (txtLName != null && txtLName != "" && txtLName != " "){
				err = false;
			} else {
				err = true;
				alert("Last Name cannot be blank!");
			}
			*/
			
			
			
			if (txtFullName == null || txtFullName == "" || txtFullName == " "){
				err = true;
				errMsg += "Full Name cannot be blank!\n";
				//alert("Full Name cannot be blank!");
			}
			
			
			if (txtEmail == null || txtEmail == "" || txtEmail == " "){
				err = true;
				errMsg += "E-Mail cannot be blank!\n";
				//alert("Last Name cannot be blank!");
			}
			
			if (txtSubject == null || txtSubject == "" || txtSubject == " "){
				err = true;
				errMsg += "Subject cannot be blank!\n";
				//alert("Last Name cannot be blank!");
			}
			
			if (txtEnquiry == null || txtEnquiry == "" || txtEnquiry == " "){
				err = true;
				errMsg += "Enquiry cannot be blank!\n";
				//alert("Last Name cannot be blank!");
			}
			
			
			if(err == true){
				alert(errMsg);
				return false;	
			} else {
				return true;
			}
		}