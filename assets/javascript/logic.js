var config = {
    apiKey: "AIzaSyBfV6QjznhGES4tntZFYOJ__a9R4fs0lz8",
    authDomain: "uw-bootcamp-191d8.firebaseapp.com",
    databaseURL: "https://uw-bootcamp-191d8.firebaseio.com",
    storageBucket: "uw-bootcamp-191d8.appspot.com",
};
    firebase.initializeApp(config);
    
    var dataRef = firebase.database();
    
    var train = "";
    var destination = "";
    var time = "";
    var frequency = "";
    
    $("#addTrain").on("click", function(event) {
    
        event.preventDefault();
    
        train = $("#trainInput").val().trim();
        destination = $("#destinationInput").val().trim();
        time = $("#timeInput").val().trim();
        frequency = $("#frequencyInput").val().trim();
    
        dataRef.ref().push({
            
            train: train,
            destination: destination,
            time: time,
            frequency: frequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
});

