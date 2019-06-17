    var firebaseConfig = {
    apiKey: "AIzaSyC0v3_GUJQbeCFhxiV6pQxuWnsZXZMFUBM",
    authDomain: "wallpaper-80b7b.firebaseapp.com",
    databaseURL: "https://wallpaper-80b7b.firebaseio.com",
    projectId: "wallpaper-80b7b",
    storageBucket: "wallpaper-80b7b.appspot.com",
    messagingSenderId: "725306985086",
    appId: "1:725306985086:web:0c71e31dffcb39e8"
  };

  firebase.initializeApp(config);

    firebase.auth.Auth.Persistence.LOCAL; 

    $("#btn-login").click(function(){
        
        var email = $("#email").val();
        var password = $("#password").val(); 

        var result = firebase.auth().signInWithEmailAndPassword(email, password);
    
        result.catch(function(error){
            var errorCode = error.code; 
            var errorMessage = error.message; 

            console.log(errorCode);
            console.log(errorMessage);
        });

    });

    $("#btn-logout").click(function(){
        firebase.auth().signOut();
    });

    function switchView(view){
        $.get({
            url:view,
            cache: false,  
        }).then(function(data){
            $("#container").html(data);
        });
    }