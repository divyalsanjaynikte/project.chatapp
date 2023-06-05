var firebaseConfig = {
  apiKey: "AIzaSyAV8Ei9L7vAX_UTYA4QpBP2hiVK-UWa9ZM",
  authDomain: "kwitter-39e6d.firebaseapp.com",
  databaseURL: "https://kwitter-39e6d-default-rtdb.firebaseio.com",
  projectId: "kwitter-39e6d",
  storageBucket: "kwitter-39e6d.appspot.com",
  messagingSenderId: "387374489573",
  appId: "1:387374489573:web:e7749c60bbd0db2dd9990c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }