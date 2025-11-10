let imageCount = 0;

const spamImage = "Assets/Spam.jpg";

const maxImages = 3000;

function getSpam() {
  
  if (imageCount < maxImages) {
    imageCount++;
    
    // Uppdatera spam counter
    document.getElementById("spamCount").textContent = imageCount;
    
    // Bygg upp bilderna
    let htmlString = '';
    for (let i = 0; i < imageCount; i++) {
      htmlString += `<img src="${spamImage}" alt="spam" class="spam-img">`;
    }
    
    document.getElementById("spam").innerHTML = htmlString;
  }
}