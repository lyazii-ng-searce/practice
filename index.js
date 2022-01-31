let container=document.getElementById("container");
let buttonRandom=document.getElementById("btn-random");
let buttonSort=document.getElementById("btn-sort");

let randomNum=generateRandomSequence();
display();
// console.log(randomNum);

buttonRandom.addEventListener("click",()=>{
    randomNum=generateRandomSequence();
    display();
})
buttonSort.addEventListener("click",()=>{
    randomNum.sort((a,b)=>a-b);
    // console.log(randomNum);
    display();
})

function display(){
    // container.innerHTML="";
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    randomNum.forEach((item)=>{
        let column=document.createElement("div");
        item=item/1000*60;
        column.style.height=item+"vh";
        column.className="bar";
        container.append(column);
    })
}

function generateRandomSequence(n=100){
    let arr=[];
    for(let i=0;i<n;i++){
        let temp=Math.floor(Math.random()*1000);
        arr[i]=temp;
    }
    return arr;
}