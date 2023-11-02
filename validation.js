 var fullNameBool = false
            var userNameBool = false
            var numberBool = false
            var emailBool = false
            var passwordBool = false
            var confirmPasswordBool = false
            function setCookie(cookieName,cookieValue,daysToExpire)
        {
          var date = new Date();
          date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
          document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
        }
		function getCookie(cookieName)
        {
          var name = cookieName + "=";
          var allCookieArray = document.cookie.split(';');
          for(var i=0; i<allCookieArray.length; i++)
          {
            var temp = allCookieArray[i].trim();
            if (temp.indexOf(name)==0)
            return temp.substring(name.length,temp.length);
       	  }
        	return "";
        } 

        function myCookie() {
            var userLength = getCookie('Total_User')
         //   alert('awdwad')
         //   alert(getCookie('Total_User'))
		 	document.getElementById("myFullName").value=""
		//	document.getElementById("myUser").value=""
		//	document.getElementById("myMobileNumber").value=""
			document.getElementById("myEmailId").value=""
			document.getElementById("myPassword").value=""
			document.getElementById("myConfirmPassword").value=""
		//	document.getElementById("myUserReg").value=""
			document.getElementById("myPassReg").value=""
			
            if (userLength == null || userLength == "") {
                setCookie('Total_User',0,30)
            }
        }

        //-------------------------------- Register A new User -----------------------------
        
        function createMyUser() {

            if(fullNameBool && emailBool && passwordBool && confirmPasswordBool) 
            {
                var fullName = document.getElementById('myFullName').value
              //  var userName = document.getElementById('myUser').value
              //  var mobileNumber = document.getElementById('myMobileNumber').value
                var emailID = document.getElementById('myEmailId').value
                var pwd = document.getElementById('myPassword').value
             //   alert("hello")
                var userLength = getCookie('Total_User')
                setCookie('Full Name '+userLength, fullName, 30)
             //   setCookie('User '+userLength, userName, 30)
               // setCookie('Mobile '+userLength, mobileNumber, 30)
                setCookie('Email '+userLength, emailID, 30)
                setCookie('Password '+userLength, pwd, 30)                
                alert(getCookie('Full Name '+userLength))
                //alert(getCookie('User '+userLength))
               // alert(getCookie('Mobile '+userLength))
                alert(getCookie('Email '+userLength))
                alert(getCookie('Password '+userLength))
                userLength = parseInt(userLength) + 1
                alert(userLength)
                setCookie('Total_User', userLength, 30)
				document.getElementsByClassName('myFullName-error')[0].style.display="none"
				document.getElementById('id02').style.display="none"
				alert("Successful")
				
            }
            else {  
                alert("Please fill all fields correctly")
            }

        /*    var username = document.getElementById('myUser').value
            var password = document.getElementById('myPass').value
            alert('Username: '+username)
            alert('Password: '+password)
            var userLength = getCookie('dab')
            setCookie('user'+userLength, username, 30) 
            setCookie('Pass '+userLength, password, 30)
            userLength = parseInt(userLength) + 1           
            alert(userLength)
            setCookie('dab', userLength, 30) */

        }

        //
        //------------------------------- User Login -----------------------------------
        //


        function validateMyUser() {
            var length = getCookie('Total_User')
           // alert(length)
				
            for(let i=0; i<length; i++) {
                var username = document.getElementById('myUserReg').value
                var password1 = document.getElementById('myPassReg').value
                var user = getCookie('Email '+i)
                var pass = getCookie('Password '+i)
			//	alert(user)
			//	alert(pass)
                if(username == user && password1 == pass)
                {window.open("loader.html","_self")
              //          alert("successful")
				//		document.getElementById('modal-wrapper').style.display='none';
						alert("Welcome: "+username)
						document.getElementById('myPassReg').style.border="1px solid #ccc"
						document.getElementsByClassName('myPassReg-error')[0].style.display="none"
						
						break;	
                }
				
				else
				{
					document.getElementById('myPassReg').style.border="1px solid red"
					document.getElementsByClassName('myPassReg-error')[0].style.display="block"
					document.getElementsByClassName('myPassReg-error')[0].innerHTML="Invalid Username or Password"
					/*if(username == "")
					{
						alert("Empty Username")
						document.getElementById('myUserReg').style.border="1px solid red"
						document.getElementsByClassName('myUserReg-error')[0].style.display="block"
						document.getElementsByClassName('myUserReg-error')[0].innerHTML="Username Cannot be Empty"
					}
					else
					{
						document.getElementById('myUserReg').style.border="1px solid #ccc"
						document.getElementsByClassName('myUserReg-error')[0].style.display="none"
					}
					
					if(password1 == "")
					{
						alert("Empty Password")
						document.getElementById('myPassReg').style.border="1px solid red"
						document.getElementsByClassName('myPassReg-error')[0].style.display="block"
						document.getElementsByClassName('myPassReg-error')[0].innerHTML="Password Cannot be Empty"
					}
					else
					{
						document.getElementById('myPassReg').style.border="1px solid #ccc"
						document.getElementsByClassName('myPassReg-error')[0].style.display="none"
					}
						
					if(username != user)
					{
						//alert("Invalid Username")
						document.getElementById('myUserReg').style.border="1px solid red"
						document.getElementsByClassName('myUserReg-error')[0].style.display="block"
						document.getElementsByClassName('myUserReg-error')[0].innerHTML="Invalid Username"
					}
					else
					{
						document.getElementById('myUserReg').style.border="1px solid #ccc"
						document.getElementsByClassName('myUserReg-error')[0].style.display="none"
					}
					
					if(password1 != pass)
					{
						//alert("Invalid Password")
						document.getElementById('myPassReg').style.border="1px solid red"
						document.getElementsByClassName('myPassReg-error')[0].style.display="block"
						document.getElementsByClassName('myPassReg-error')[0].innerHTML="Invalid Password"
					}
					else
					{
						document.getElementById('myPassReg').style.border="1px solid #ccc"
						document.getElementsByClassName('myPassReg-error')[0].style.display="none"
					}*/
				}
            }
        }

        //
        //------------------------------ Show All Registered Users ----------------------------
        //

        function getMyCooks() {
            var length = getCookie('Total_User')
            alert(length)
            for(let i=0; i<=length; i++){
                alert(getCookie('Full Name '+i))
                alert(getCookie('User '+i))
                alert(getCookie('Mobile '+i))
                alert(getCookie('Email '+i))
                alert(getCookie('Password '+i))
            }
                
        }

        /*function creatMyPass() {
            setCookie('Pass '+0, 'ahmed123', 30)
            setCookie('Pass '+1, 'rayyan123', 30)
        }*/ 
        //
        //------------------------------------- Validation--------------------------------
        //
        //------------------------------ Full Name Validation ----------------------------
        //

        function checkFullName() {
			var myRegexp = /^[A-Za-z\s]{1,}$/
            if(myRegexp.test(document.getElementById('myFullName').value)==true) {
                fullNameBool = true;
				//alert("Successful")
				document.getElementById('myFullName').style.border="1px solid #ccc"
				document.getElementsByClassName('myFullName-error')[0].style.display="none"
            }
            else {
                fullNameBool = false;				
				document.getElementById('myFullName').style.border="1px solid red"
				document.getElementsByClassName('myFullName-error')[0].style.display="block"
				document.getElementsByClassName('myFullName-error')[0].innerHTML="Invalid Full Name"
               // alert('cannot be empty')
            }
        }
        

        //
        //---------------------------- Username Validation ----------------------------
        //

        function checkUsername() {
           var myRegexp = /^[a-zA-Z][a-zA-Z0-9_-]{5,}$/
		   
           if(myRegexp.test(document.getElementById('myUser').value)==false) {
			   document.getElementById('myUser').style.border="1px solid red"
				document.getElementsByClassName('myUser-error')[0].style.display="block"
				document.getElementsByClassName('myUser-error')[0].innerHTML="The Username should start with Character and length must <br> be 6"
               //alert("Cannot start by number and length must be greater 6")
                userNameBool = false
            }
           else {
                var length = getCookie('Total_User')
                for(let i=0; i<=length; i++) {
                    var username = getCookie('User '+i)
                    var usernameTextField = document.getElementById('myUser').value
                    if(usernameTextField == username)
                    {
                        //alert('Username Already exists ')
						document.getElementById('myUser').style.border="1px solid red"
						document.getElementsByClassName('myUser-error')[0].style.display="block"
						document.getElementsByClassName('myUser-error')[0].innerHTML="Username already exist"
                        return;
                    }
                }
               // alert("Successful")
				document.getElementById('myUser').style.border="1px solid #ccc"
				document.getElementsByClassName('myUser-error')[0].style.display="none"
                userNameBool = true
           }
        }
        
        //
        //---------------------------- Mobile Number Validation ----------------------------
        //

        function checkMobileNumber() {
            var myRegexp = /^[6-9]\d{9}$/
            if(myRegexp.test(document.getElementById('myMobileNumber').value)==false) {
               //alert("Please Enter a valid Number")
				document.getElementById('myMobileNumber').style.border="1px solid red"
				document.getElementsByClassName('myMobileNumber-error')[0].style.display="block"
				document.getElementsByClassName('myMobileNumber-error')[0].innerHTML="Invalid Mobile Number"
                numberBool = false
           }
           else {
                var length = getCookie('Total_User')
                for(let i=0; i<=length; i++) {
                    var mobileNumber= getCookie('Mobile '+i)
                    var mobileNumberTextField = document.getElementById('myMobileNumber').value
                    if(mobileNumber == mobileNumberTextField)
                    {
                        //alert('Mobile Number Already exists ')
						document.getElementById('myMobileNumber').style.border="1px solid red"
						document.getElementsByClassName('myMobileNumber-error')[0].style.display="block"
						document.getElementsByClassName('myMobileNumber-error')[0].innerHTML="Mobile Number already exist"
                        return;
                    }
                }
                //alert("Successful")
				document.getElementById('myMobileNumber').style.border="1px solid #ccc"
				document.getElementsByClassName('myMobileNumber-error')[0].style.display="none"
                numberBool = true
           }
        }
        
        //
        //---------------------------- EmailId Id Validation ----------------------------
        //

        function checkEmailId() {
            var myRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if(myRegexp.test(document.getElementById('myEmailId').value)==false) {
               //alert("Please Enter a valid Email Id")
			   document.getElementById('myEmailId').style.border="1px solid red"
				document.getElementsByClassName('myEmailId-error')[0].style.display="block"
				document.getElementsByClassName('myEmailId-error')[0].innerHTML="Invalid Email ID"
                emailBool = false
           }
           else {
                var length = getCookie('Total_User')
                for(let i=0; i<=length; i++) {
                    var emailID= getCookie('Email '+i)
                    var emailIDTextField = document.getElementById('myEmailId').value
                    if(emailID == emailIDTextField)
                    {
						document.getElementById('myEmailId').style.border="1px solid red"
						document.getElementsByClassName('myEmailId-error')[0].style.display="block"
						document.getElementsByClassName('myEmailId-error')[0].innerHTML="Email ID already exists"
                        //alert('Email Already exists ')
                        return;
                    }
                }
             //   alert("Successful")
				document.getElementById('myEmailId').style.border="1px solid #ccc"
				document.getElementsByClassName('myEmailId-error')[0].style.display="none"
                emailBool = true
           }
        }
        
        //
        //---------------------------- Password Validation ----------------------------
        //

        function checkPassword() {
            var myRegexpStrong = /^.*(?=.{12,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
            var myRegexpMedium = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
            if(myRegexpStrong.test(document.getElementById('myPassword').value)==true) {
                //alert('Strong Password')
				document.getElementById('myPassword').style.border="1px solid #ccc"
				document.getElementsByClassName('myPassword-error')[0].style.display="block"
				document.getElementsByClassName('myPassword-error')[0].style.color="green"
				document.getElementsByClassName('myPassword-error')[0].innerHTML="Strong Password"
                passwordBool = true
            } else if(myRegexpMedium.test(document.getElementById('myPassword').value)==true) {
                //alert('Medium Password')
				document.getElementById('myPassword').style.border="1px solid #ccc"
				document.getElementsByClassName('myPassword-error')[0].style.display="block"
				document.getElementsByClassName('myPassword-error')[0].style.color="yellow"
				document.getElementsByClassName('myPassword-error')[0].innerHTML="Medium Password"
                passwordBool = true
            } else {
                //alert("Weak Password please enter atleast one lowercase one uppercase one digit and one alphanumeric")
				document.getElementById('myPassword').style.border="1px solid red"
				document.getElementsByClassName('myPassword-error')[0].style.display="block"
				document.getElementsByClassName('myPassword-error')[0].innerHTML="Weak Password must contain atleast 1 upper, 1 lower, <br> 1 alpha-numeric and 1 digit"
                passwordBool = false
            }
        }
        
        //
        //---------------------------- Confirm Password Validation ----------------------------
        //

        function checkConfirmPassword() {

            var a = document.getElementById('myConfirmPassword').value
            var b = document.getElementById('myPassword').value
            if(document.getElementById('myConfirmPassword').value=="") {
                //alert("cannot be empty")
				document.getElementById('myConfirmPassword').style.border="1px solid red"
				document.getElementsByClassName('myConfirmPassword-error')[0].style.display="block"
				document.getElementsByClassName('myConfirmPassword-error')[0].innerHTML="Confirm Password cannot be empty"
                confirmPasswordBool = false
            }
            else if(a==b) {
               // alert("successful")
				document.getElementById('myConfirmPassword').style.border="1px solid #ccc"
				document.getElementsByClassName('myConfirmPassword-error')[0].style.display="none"
                confirmPasswordBool = true
            }
            else {
                //alert("Password does not match")                
				document.getElementById('myConfirmPassword').style.border="1px solid red"
				document.getElementsByClassName('myConfirmPassword-error')[0].style.display="block"
				document.getElementsByClassName('myConfirmPassword-error')[0].innerHTML="Password does not match"
                confirmPasswordBool = false
            }
        }
		
		//Function for closing the Sign Up button
		function close_signup_button()
		{
			document.getElementById("myFullName").value=""
			//document.getElementById("myUser").value=""
			//document.getElementById("myMobileNumber").value=""
			document.getElementById("myEmailId").value=""
			document.getElementById("myPassword").value=""
			document.getElementById("myConfirmPassword").value=""
		//	document.getElementById("myUserReg").value=""
			document.getElementById("myPassReg").value=""
			
			
			document.getElementsByClassName('myFullName-error')[0].style.display="none"
		//	document.getElementsByClassName('myUser-error')[0].style.display="none"
		//	document.getElementsByClassName('myMobileNumber-error')[0].style.display="none"
			document.getElementsByClassName('myEmailId-error')[0].style.display="none"
			document.getElementsByClassName('myPassword-error')[0].style.display="none"
			document.getElementsByClassName('myConfirmPassword-error')[0].style.display="none"
		//	document.getElementsByClassName('myUserReg-error')[0].style.display="none"
			document.getElementsByClassName('myPassReg-error')[0].style.display="none"
			
			document.getElementById('myFullName').style.border="1px solid #ccc"
		//	document.getElementById('myUser').style.border="1px solid #ccc"
		//	document.getElementById('myMobileNumber').style.border="1px solid #ccc"
			document.getElementById('myEmailId').style.border="1px solid #ccc"
			document.getElementById('myPassword').style.border="1px solid #ccc"
			document.getElementById('myConfirmPassword').style.border="1px solid #ccc"
		//	document.getElementById('myUserReg').style.border="1px solid #ccc"
			document.getElementById('myPassReg').style.border="1px solid #ccc"
			
			document.getElementById('id02').style.display='none';
			
		}
		
		//Function for closing the Sign In button
		function close_signin_button()
		{
			document.getElementById("myFullName").value=""
		//	document.getElementById("myUser").value=""
		//	document.getElementById("myMobileNumber").value=""
			document.getElementById("myEmailId").value=""
			document.getElementById("myPassword").value=""
			document.getElementById("myConfirmPassword").value=""
		//	document.getElementById("myUserReg").value=""
			document.getElementById("myPassReg").value=""
			
			
			document.getElementsByClassName('myFullName-error')[0].style.display="none"
			//document.getElementsByClassName('myUser-error')[0].style.display="none"
		//	document.getElementsByClassName('myMobileNumber-error')[0].style.display="none"
			document.getElementsByClassName('myEmailId-error')[0].style.display="none"
			document.getElementsByClassName('myPassword-error')[0].style.display="none"
			document.getElementsByClassName('myConfirmPassword-error')[0].style.display="none"
		//	document.getElementsByClassName('myUserReg-error')[0].style.display="none"
			document.getElementsByClassName('myPassReg-error')[0].style.display="none"
			
			document.getElementById('myFullName').style.border="1px solid #ccc"			
		//	document.getElementById('myUser').style.border="1px solid #ccc"
		//	document.getElementById('myMobileNumber').style.border="1px solid #ccc"
			document.getElementById('myEmailId').style.border="1px solid #ccc"
			document.getElementById('myPassword').style.border="1px solid #ccc"
			document.getElementById('myConfirmPassword').style.border="1px solid #ccc"
		//	document.getElementById('myUserReg').style.border="1px solid #ccc"
			document.getElementById('myPassReg').style.border="1px solid #ccc"
			document.getElementById('id01').style.display='none';
		}