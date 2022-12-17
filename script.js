// alert ("are you connected");


let pictureBox = document.getElementById("picture-box");
//console.log(pictureBox)



function dataFromUrl (evt) {
    evt.target.style.display = "none";
    $.ajax ({
        url: "https://api.nasa.gov/planetary/apod?api_key=EeuWnBDPnTaeGXEIn4Y2ABX84HoySZfEkKWecEOF"
    })
    .then(
        (data) =>{
            //console.log(data)

            let pictureElement = document.createElement ("img");
            pictureElement.setAttribute("src" , data.url)  
            //console.log(pictureElement)
            pictureBox.appendChild(pictureElement)
            
            let nameImage = document.createElement("p");
            nameImage.textContent = data.title;
            pictureBox.appendChild(nameImage)

            let imageExpl = document.createElement("p");
            imageExpl.textContent = data.explanation;
            pictureBox.appendChild(imageExpl)


        },
        (error) => {
            console.log("bad request:" , error); 
        }
    )

}

let btnImg =document.getElementById("btnImg");

btnImg.addEventListener("click" , dataFromUrl)