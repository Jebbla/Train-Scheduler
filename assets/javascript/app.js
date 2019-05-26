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
                ['#29323c', '#485563'],
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
    apiKey: "AIzaSyDldQc5kJXoZ2Xw1PLXJwHSou-jLhKQjjc",
      authDomain: "jebbla-train-sceduler.firebaseapp.com",
      databaseURL: "https://jebbla-train-sceduler.firebaseio.com",
      projectId: "jebbla-train-sceduler",
      storageBucket: "jebbla-train-sceduler.appspot.com",
      messagingSenderId: "797932428455",
      appId: "1:797932428455:web:69114ee6b33841ea"
};
firebase.initializeApp(config);

$("#submit-input").on("click", function () {
    event.preventDefault();
    var trainName = $("#train-name").val();
    var trainDest = $("#train-destination").val();
    var trainFreq = $("#train-frequency").val();
    var trainTime = $("#train-first-time").val();

    database.ref().push({
        trainName: trainName,
        trainDest: trainDest,
        trainFreq: trainFreq,
        trainTime: trainTime,
    });
});