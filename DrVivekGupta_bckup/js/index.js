  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDoW_Z2530tH3Qx0SA29VgsoQq_eRM25dY",
    authDomain: "drvivekappointment-a3b00.firebaseapp.com",
    databaseURL: "https://drvivekappointment-a3b00.firebaseio.com",
    projectId: "drvivekappointment-a3b00",
    storageBucket: "drvivekappointment-a3b00.appspot.com",
    messagingSenderId: "813935499588",
    appId: "1:813935499588:web:6faed7aaa7afd40f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//Reference messages collection
 var messageRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
	e.preventDefault();
	
	var firstName = getInputVal('firstNameField');
	var lastName = getInputVal('lastNameField');
	var services = getInputVal('services');
	var phone = getInputVal('phoneField');
	var date = getInputVal('dateField');
	var time = getInputVal('timeField');
	var message = getInputVal('messageField');
	
	//save Message
	saveMessage(firstName, lastName, services, phone, date, time, message);
	window.location.replace("appointment_success.html");
	
}

function getInputVal(id){

	return document.getElementById(id).value;
	
}

function saveMessage(firstName, lastName, services, phone, date, time, message)
{
	var newMessageRef = messageRef.push();
	newMessageRef.set({
		firstName: firstName,
		lastName: lastName,
		services: services,
		phone: phone,
		date: date,
		time: time,
		message: message
	})
	
	
}

