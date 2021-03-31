

const header=document.getElementById("navbar");
document.addEventListener("scroll",()=>{
    if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5)    {
        document.getElementById("navbar").style.backgroundColor="#FFFFFF";    
    }
    else{
        document.getElementById("navbar").style.backgroundColor="transparent";    
    }
});

function aww(){
    document.getElementById("not").style.display="none";
}

document.getElementById("mover2").addEventListener("click",()=>{
    document.getElementById("collasle").scrollLeft+=375;
});


document.getElementById("mover1").addEventListener("click",()=>{
    document.getElementById("collasle").scrollLeft-=375;
});


document.getElementById("navbarbutton").addEventListener("click",()=>{
    document.getElementById("navlist").style.display="block";
});

document.getElementById("close").addEventListener("click",()=>{
    document.getElementById("navlist").style.display="none";
});