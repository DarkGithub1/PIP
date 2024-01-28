const videoElement=document.getElementById('video');
const button=document.getElementById('button');

// Prompt to select media stream

async function selectMedia(params) {
    try {
        const mediaStream= await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaStream;
        videoElement.onloadedmetadata=()=>{
            videoElement.play();
        }
    } catch (error) {
        console.log(error);
    }
}
selectMedia()

button.addEventListener('click',async ()=>{
    button.disabled=true;
    await videoElement.requestPictureInPicture();
    button.disabled=false;
})