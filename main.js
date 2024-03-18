//https://teachablemachine.withgoogle.com/models/2_wyjKBHp/
//C-111-Jhanett
Webcam.set({
    width:350,
    height:300,
    imageFormat:'png',
    pngQuality:90
});

//Camera = document.getElementById("Camera");

Webcam.attach('#Camera');

function takeSnapShot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2_wyjKBHp/model.json',modeLoaded);

function modeLoaded() {
    console.log('Modelo Carregado');
}

var prediction1;

function speak() {
    var synth = window.speechSynthesis;
    speakData1 = "A primeira previsão é " + prediction1;
    
    var utterThis = new SpeechSynthesisUtterance(speakData1)
    synth.speak(utterThis);
}
//C-112-Janaina
function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult)
}

function gotResult(error,results) {
    if (error) {
        console.error(error);

    }
    else {
        console.log(results);
        document.getElementById("resultEmoticonName1").innerHTML =results[0].label
        prediction1=results[0].label
        
        if (results[0].label=="Like") {
            document.getElementById("updateEmoji1").innerHTML = "&#128077";
        }
        if (results[0].label=="Deslike") {
            document.getElementById("updateEmoji1").innerHTML = "&#128078";
        }
        if (results[0].label=="HeavyMetal") {
            document.getElementById("updateEmoji1").innerHTML = "&#129304";
        }
        if (results[0].label=="HangLose") {
            document.getElementById("updateEmoji1").innerHTML = "&#129305";
        }
        if (results[0].label=="Paz") {
            document.getElementById("updateEmoji1").innerHTML = "&#9996";
        }
        if (results[0].label=="Oi") {
            document.getElementById("updateEmoji1").innerHTML = "&#9995";
        }

        speak()
    }
};