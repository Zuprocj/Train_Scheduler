var config = {
    apiKey: "AIzaSyBfV6QjznhGES4tntZFYOJ__a9R4fs0lz8",
    authDomain: "uw-bootcamp-191d8.firebaseapp.com",
    databaseURL: "https://uw-bootcamp-191d8.firebaseio.com",
    storageBucket: "uw-bootcamp-191d8.appspot.com",
};
firebase.initializeApp(config);
var database = firebase.database();
$("#train").submit(function(event) {
    var trainName = $("#trainInput").val().trim();
    var destinationName = $("#destinationInput").val().trim();
    var timeStart = moment($("#timeInput").val().trim(), "HH:mm").format("X");
    var frequencyRate = $("#frequencyInput").val().trim();  
    var newTrain = {
    name: trainName,
    destination: destinationName,
    start: timeStart,
    frequency: frequencyRate,
};
    database.ref().push(newTrain);
    $("#train-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");
    return false;
});
database.ref().on("child_added", function(childSnapshot, prevChildKey){  
    var trainName = childSnapshot.val().name;
    var destinationName = childSnapshot.val().destination;
    var timeStart = childSnapshot.val().start;
    var frequencyRate = childSnapshot.val().frequency;
    var firstTimeConverted = moment(timeStart, "HH:mm").subtract(1, "years");
    var currentTime = moment();
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    var tRemainder = diffTime % frequencyRate;
    var tMinutesTillTrain = frequencyRate - tRemainder;
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    var formattedTime = moment(nextTrain).format("HH:mm");
     $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destinationName + "</td><td>" + frequencyRate 
     + "</td><td>" + formattedTime +"</td><td>" + tMinutesTillTrain + "</td>");
 });
