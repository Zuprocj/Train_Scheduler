var config = {
    apiKey: "AIzaSyAUDY8Df6KFsWUf3aTbs0JV2M3HDHODRt4",
    authDomain: "traintime-a4af9.firebaseapp.com",
    databaseURL: "https://traintime-a4af9.firebaseio.com",
    projectId: "traintime-a4af9",
    storageBucket: "",
    messagingSenderId: "904699414954",
    appId: "1:904699414954:web:6aa9ba54c88cd0e74ac3d3"
};

firebase.initializeApp(config);

var database = firebase.database();

var train = "";
var destination = "";
var time = "";
var frequency = "";

$("add-train-btn").on("click", function(event) {
    event.preventDeafault();
    train = $("train-input").val().trim();
    destination =$("destination-input").val().trim();
    frequency = $("frquency-input").val().trim();

    database.ref().push({
        train: train,
        destination: destination,
        time: time,
        frequency: frequency
    });
});
