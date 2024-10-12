import axios from "axios";

let gumStream = null;
let recorder = null;
let audioContext = null;

export default function recorder(){
    const startFunction = () => {
        let constraints = {
            'audio' : true,
            'video' : false,
        }

        let audioContext = new window.AudioContext();
        console.log("sample rate : ",audioContext.sampleRate);

        navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream){
            gumStream = stream

            let input = audioContext.createMediaStreamSource(stream);
            
            recorder = new window.Recorder(input, {
                numChannels : 1
            })

            recorder.record();
        }).catch(function (err){
            console.log("Error", err);
        });
    }

    const stopRecord = () => {
        recorder.stop();
        gumStream.getAudioTracks()[0].stop();

        recorder.exportWAV(onStop);
    }
    
    const onStop = (blob) => {

    }
    return(
        <div></div>
    )
}