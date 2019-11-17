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
    var database = firebase.database();

   database.ref('messages').on('value', gotData, errData);


function gotData(data)
{
//console.log(data.val());
var value = data.val();
var keys = Object.keys(value);
console.log(keys);
for ( var i = 0; i < keys.length; i++)
{
	var k = keys[i];
	var date = value[k].date;
	var firstName = value[k].firstName;
	var lastName = value[k].lastName;
	var message = value[k].message;
	var phone = value[k].phone;
	var services = value[k].services;
	var time = value[k].time;
	
	console.log(date, firstName, lastName, message, phone, services, time);
	var tbl = document.getElementById("data");
	var row = tbl.insertRow();
	var cell1 = row.insertCell();
	var cell2 = row.insertCell();
	var cell3 = row.insertCell();
	var cell4 = row.insertCell();
	var cell5 = row.insertCell();
	var cell6 = row.insertCell();
	var cell7 = row.insertCell();
	
	cell1.innerHTML = value[k].firstName;
	cell2.innerHTML = value[k].lastName;
	cell3.innerHTML = value[k].services;
	cell4.innerHTML = value[k].phone;
	cell5.innerHTML = value[k].date;
	cell6.innerHTML = value[k].time;
	cell7.innerHTML = value[k].message;
	
}
}
function errData(err)
{
console.log('Error');
console.log(err);
}
	
    

