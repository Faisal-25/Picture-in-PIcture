const videoElement = document.getElementById('video');
const button = document.getElementById('button');
 
//we are gonna write an async function to select a media stream 
//and pass it to video elemen and then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }

    }catch(error){
        console.log('error');
    }
}
button.addEventListener('click',async()=>{
    hidden = false;
    await videoElement.requestPictureInPicture();
    hidden = true;
});
//On load
selectMediaStream();