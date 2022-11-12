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
  userFormDB.on("value", (snapshot) => {
  document.getElementById("userForm").addEventListener("submit", submitForm);
  

  var data = snapshot.val();
  document.querySelector("#task").innerHTML = "";
  for (let i in data){
    if (data[i].name != ""){
    document.querySelector("#task").innerHTML += ` 
    <div style="width: 100%;
    background: rgb(0, 255, 106);
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 5px;
    height: 110px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);"> 
    
    Name: ${data[i].name} <br>
    Age: ${data[i].age} <br>
    Task: ${data[i].task} <br>
    <br>
    <button type="button" onclick="deleteTask('${i}')"
    style="border: none;
    color: white;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    background-color: #008CBA;"> Submit Task!</button>
    <br></br>
    <!--<button type="submit" id = "insert">Submit</button> -->
    </div>`
    console.log(data[i])
    }
  }

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
  };})

  function deleteTask(i) {
    firebase.database().ref("userForm/" + i).remove();
  }
