// alert ("are you connected");

const pictureBox = document.getElementById("picture-box"); 

$.ajax({
    url: "https://api.nasa.gov/planetary/apod?api_key=EeuWnBDPnTaeGXEIn4Y2ABX84HoySZfEkKWecEOF" 
}).then(
    (data) => {
        console.log(data)
        apiExample.push(data)

        for ( let i=0 ; i <= apiExample.length ; i++){ 
            const pictureElement = document.createElement("img"); 
        pictureElement.setAttribute("src" , apiExample[i].url); 
        pictureBox.appendChild(pictureElement)
        //console.log(pictureElement)
       
         }
   }, 
   (error) => {
    console.log("bad request:", error); 
   }
);