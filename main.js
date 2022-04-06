Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera= document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_url+'"/>';

    });
}
console.log('ml5 version;',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rqizYL412/model.json')
  
function modelLoaded(){
    console.log('Model loaded');

}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="the first prediction is"+ prediction_1;
    speak_data_2="and the second prediction is"+ prediction_2;

    function check(){
        function check()
        {
            img=document.getElementById('captured_image');
            classifier.classify(img,gotResult);
        }
        function gotResult(error,results){
            if(error){
                console.error(error);
            }else{
                console.log(results);
                document.getElementById("result_emotion_name").innerHTML=results[0].label;
                document.getElementById("result_emotion_name2").innerHTML=results[1].label;
                prediction_1=results[0].label;
                prediction_2=results[1].label;
                speak();
                
        if(results[0].label=="Thumbs up")
                {
                    document.getElementById("update_emoji");
                }
        if(results[0].label=="Namaste")
        {
            document.getElementById("update_emoji");
        }
        if(results[0].label=="Thumbs down")
                {
                    document.getElementById("update_emoji");
                }
        
                if(results[0].label=="Rock it")
                {
                    document.getElementById("update_emoji");
                }
        
        
        
                if(results[1].label=="Thumbs up")
                {
                    document.getElementById("update_emoji2");
                }
        if(results[1].label=="Namaste")
        {
            document.getElementById("update_emoji2");
        }
        if(results[1].label=="Thumbs down")
                {
                    document.getElementById("update_emoji2");
                }
        
                if(results[1].label=="Rock it")
                {
                    document.getElementById("update_emoji2");
                }
               
            }}   
    }
}
