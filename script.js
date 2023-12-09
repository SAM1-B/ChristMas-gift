const container = document.getElementById("container");
const captureButton = document.getElementById ("capture-button");
const previewContainer = document.getElementById("preview-container");
const downloadButton = document.getElementById("download-button");

captureButton.addEventListener("click", async()=>{
    downloadButton.classList.remove("hide");
   previewContainer.classList.remove("hide");
   previewContainer.style.display="block";
    const canvas = await html2canvas(container);
    const imageURL = canvas.toDataURL();

    previewContainer.innerHTML=`<img src="${imageURL}" id="image">`;
    downloadButton.href = imageURL;
    downloadButton.download="image.png";
});

window.onload = function(){
  downloadButton.classList.add("hide");
 previewContainer.classList.add("hide");
  previewContainer.innerHTML = " ";

}

downloadButton.addEventListener("click", function(){
    downloadButton.classList.toggle("hide");
 previewContainer.classList.toggle("hide");
 previewContainer.style.display="none";
 

})



// IMAGE UPLOAD
const image_input= document.querySelector("#image_input");
var uploaded_image= "";

image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
})
