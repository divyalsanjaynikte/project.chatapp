var firebaseConfig = {
  apiKey: "AIzaSyAV8Ei9L7vAX_UTYA4QpBP2hiVK-UWa9ZM",
  authDomain: "kwitter-39e6d.firebaseapp.com",
  databaseURL: "https://kwitter-39e6d-default-rtdb.firebaseio.com",
  projectId: "kwitter-39e6d",
  storageBucket: "kwitter-39e6d.appspot.com",
  messagingSenderId: "387374489573",
  appId: "1:387374489573:web:e7749c60bbd0db2dd9990c"
};

firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



