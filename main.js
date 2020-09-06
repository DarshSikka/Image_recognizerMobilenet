//#live::::live webcam preview
Webcam.set({
    width:340,
    height:250,
    image_format:'jpg',
    jpg_quality:1.0,
    constraints: {
        facingMode: "environment"
      }
});
Webcam.attach("#live");
function takeSnippet(){
    Webcam.snap(function(data_uri){
               document.getElementById("FinalPhotograph").src=data_uri;
    });
}
var classifier=ml5.imageClassifier('MobileNet', function(){console.log(ml5.version)});
var ClassificationImage=new Image();
function checkStart(){
    console.log('checkStarted');
    ClassificationImage.src=document.getElementById('FinalPhotograph').src;
    check(ClassificationImage);
}
function check(image){
    classifier.classify(image, result);
}
//#guessed, give answer
function result(error, results){
    document.getElementById("flipping").src='MyCard.gif';
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById('Guessed').innerText=results[0].label;
    document.getElementById('flipping').src='Still.png';
}
}