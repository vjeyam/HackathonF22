const firebaseConfig = {
    apiKey: "AIzaSyAzdYLzh4_-QCZhU_dvtrqA-UkJOj9Q6xc",
    authDomain: "hometaskmanager-c91ac.firebaseapp.com",
    databaseURL: "https://hometaskmanager-c91ac-default-rtdb.firebaseio.com",
    projectId: "hometaskmanager-c91ac",
    storageBucket: "hometaskmanager-c91ac.appspot.com",
    messagingSenderId: "604698769278",
    appId: "1:604698769278:web:570118de5aa15c8cf6a52f",
    measurementId: "G-1N2SL2TPM7"
  };

  firebase.initializeApp(firebaseConfig);
  var userFormDB = firebase.database().ref("userForm");
  document.getElementById("userForm").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

  var name = getElementVal("enterName");
  var age = getElementVal("enterAge");
  var task = getElementVal("enterTask");
  var id = getElementVal("enterID");

  console.log(name, age, task, id);

  saveMessages(name, age, task, id);

    //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("userForm").reset();

//   saveMessages(name, emailid, msgContent);

//   //   enable alert
//   document.querySelector(".alert").style.display = "block";

//   //   remove the alert
//   setTimeout(() => {
//     document.querySelector(".alert").style.display = "none";
//   }, 3000);

//   //   reset the form
//   document.getElementById("contactForm").reset();
  }

  const saveMessages = (name, age, task, id) => {
    var newUserForm = userFormDB.push();
  
    newUserForm.set({
      name: name,
      age: age,
      task: task,
      id: id
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
