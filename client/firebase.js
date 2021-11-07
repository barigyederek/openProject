// Your web app's Firebase configuration
// Add your firebase config details here
var firebaseConfig = {
    apiKey: "AIzaSyDF1DlgYZydc30RBGgP5f6JpX9mfFWT3tc",
    authDomain: "igmmsversion1.firebaseapp.com",
    databaseURL: "https://igmmsversion1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "igmmsversion1",
    storageBucket: "igmmsversion1.appspot.com",
    messagingSenderId: "33624439551",
    appId: "1:33624439551:web:65a7fa8a6094040e6deaca",
    measurementId: "G-77W4F5J71Z"
  };
  
  
  // // Initialize Firebase


  // firebase.initializeApp(firebaseConfig);
  
  // // Set database variable
  // var database = firebase.database()
  


// import { getDatabase, ref, onValue} from "firebase/database";
// const db = getDatabase();

// const dev = ref(db, 'users/' + devicename );
// onValue(dev, (snapshot) => {
//   const data = snapshot.val();
//   alert(data.id)

// });


//   function to save data to realtime database
//   function save() {
//     var email = document.getElementById('email').value
  
//     database.ref('bio-data').set({
//       email : email
//     })
  
//     alert('Saved')
//   }
  
  //Function to retrieve the data stored in the realtime database
  
  import { getDatabase,ref, onValue } from "firebase/database";

const database = getDatabase();
const userData = ref(database,'/users/'+ devicename);
onValue(userData,(snapshot)=>{
  test(snapshot);
  // const data = snapshot.val();
  // if(snapshot.exists()){
  //   console.log(snapshot.val());
  // } else {
  //   console.log("Unable to retrive data");
  // }
});

function test() {
  if(snapshot.exists()){
    console.log(snapshot.val());
  } else {
    console.log("Unable to retrive data");
  }
}

// function to retrive data from the database
  
  function get() {
    var username = document.getElementById('refresh').value
  
    var user_ref = database.ref('users/' + devicename)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
  
      alert(data.refresh)
  
    })
  
  }
  
  ////Function to update the data stored in the realtime database
  // function update() {
  //   var email = document.getElementById('email').value
  
  //   var updates = {
  //     email : email,
  //     password : password
  //   }
  
  //   database.ref('users/' + username).update(updates)
  
  //   alert('updated')
  // }
  
  ////Function to delete the data from the realtime database
  // function remove() {
  //   var username = document.getElementById('email').value
  
  //   database.ref('users/' + username).remove()
  
  //   alert('deleted')
  // }
