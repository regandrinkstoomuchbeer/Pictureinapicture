const video = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadmetadata = () => {
            videoElement.play();
        } 

    }
    catch (error) {
        console.log('whoops, Error Motherfucker', error)
        
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    await videoElement.requestPictureinPicture();
    button.disabled = false


});

selectMediaStream();