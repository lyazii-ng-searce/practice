let randomNum=generateRandomSequence();
console.log(randomNum);

let container=document.getElementById("container");
randomNum.forEach((item)=>{
    let column=document.createElement("div");
    item=item/1000*60;
    column.style.height=item+"vh";
    column.className="bar";
    container.append(column);
})

function generateRandomSequence(n=100){
    let arr=[];
    for(let i=0;i<n;i++){
        let temp=Math.floor(Math.random()*1000);
        arr[i]=temp;
    }
    return arr;
}