let myAnimation1 = document.querySelector(".eleven u");

let myName = "Eleven";
for (let i = 0; i < myName.length; i++) {
  setTimeout(() => {
    myAnimation1.innerHTML += myName[i];
    console.log("in the matrix");
  }, 400 * i); // 2000 milliseconds (2 seconds) times the index

}

let cursor = document.querySelector(".cursor");
window.addEventListener("mousemove",(evt)=>{
  
    cursor.style.top = `${evt.clientY}px`;
    cursor.style.left = `${evt.clientX}px`;
    console.log("lmao");
})
// Initialising the canvas

