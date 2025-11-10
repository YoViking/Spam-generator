let imageCount = 0;

const spamImage = "Assets/Spam.jpg";
const spamAudio = new Audio("Assets/spam_audio.mp3")

const maxImages = 3000;

function getSpam() {
  
  if (imageCount < maxImages) {
    imageCount++;
    
    
    spamAudio.currentTime = 0; // Reset to start
    spamAudio.play();
    
   
    document.getElementById("spamCount").textContent = imageCount;
    
    
    let htmlString = '';
    for (let i = 0; i < imageCount; i++) {
      htmlString += `<img src="${spamImage}" alt="spam" class="spam-img">`;
    }
    
    document.getElementById("spam").innerHTML = htmlString;
  }
}