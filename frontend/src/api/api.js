export const Chat=async(usermsg)=>{
    console.log(usermsg);
const response=await fetch(`http://localhost:3000`,{
    method:"POST",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify({message:usermsg})
})
const result=await response.json();
return result;
}