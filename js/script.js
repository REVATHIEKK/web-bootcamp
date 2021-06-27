function changecontent(){
    let x=document.getElementById("know-more");
    if(x.style.display=="block")
    {
        x.style.display="none";
    }
    else{
        x.style.display="block";
    }
}

function validation(){

let x=documnet.getElementById("name-input").value;
let y=document.getElementById("email-input").value;
let z=document.getElementById("password-input").value;
    if(x=="")
    {
        document.getElementById("name-vaidation").style.display="block";
    } 
   
    if(y=="")
    {
        document.getElementById("email-vaidation").style.display="block";
    }
    if(z=="")
    {
        document.getElementById("password-vaidation").style.display="block";
    }
    if((x||y||z)=="")
{


    return false;
}

}