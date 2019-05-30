var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: 'assets/images/train.jpg',
        blendingMode: 'multiply'
    },
    states : {
        "default-state": {
            gradients: [
                ['#235432', '#483789'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 7000
        }
    }
});
var config = 
{
    apiKey: "AIzaSyBIjeDuHNravF4irOmhcIDI4FlWOGPh_-s",
    authDomain: "class-7be17.firebaseapp.com",
    databaseURL: "https://class-7be17.firebaseio.com",
    projectId: "class-7be17",
    storageBucket: "class-7be17.appspot.com",
    messagingSenderId: "115562070662",
    appId: "1:115562070662:web:038e6c68cdfdd09b"
};
firebase.initializeApp(config);
var database = firebase.database();

var frequency = 0;


var currentTime = moment();

console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
$("#timeNow").text(currentTime);



//$("#submit").on("click", function() 
$("#train-submit").on("click", function () {
    event.preventDefault();
 console.log("hi do i work?");

    var trainName = $("#train-name").val().trim();
    var trainDest = $("#train-destination").val().trim();
    var trainFreq = $("#train-frequency").val().trim();
    var trainTime = $("#train-first-time").val().trim();

    database.ref().push({
        trainName: trainName,
        trainDest: trainDest,
        trainFreq: trainFreq,
        trainTime: trainTime,
    });

    console.log(trainName);
//clears input
    $("#train-name").val("");
    $("#train-destination").val("");
    $("#train-frequency").val("");
    $("#train-first-time").val("");


});
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  var trainName = childSnapshot.val().trainName;
  var trainDest = childSnapshot.val().trainDest;
  var trainFreq = childSnapshot.val().trainFreq;
  var trainTime = childSnapshot.val().trainTime;
  
  //var tranTimePretty = moment.unix(trainTime).format("MM/DD/YYYY");

  // Calculate the months worked using hardcore math
  // To calculate the months worked
  //var empMonths = moment().diff(moment(empStart, "X"), "months");
  //console.log(empMonths);

  // Calculate the total billed rate
  //var empBilled = empMonths * empRate;
  //console.log(empBilled);

  var newRow = $("<tr>").append( 
    $("<td>").text(trainName),
    $("<td>").text(trainDest),
    $("<td>").text(trainTime),
    $("<td>").text(trainFreq),
   //$("<td>").text(minutesAway)
  )
    $("#train-table > tbody").append(newRow);

  });



