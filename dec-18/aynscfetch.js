async function fetchOneUser(){

    const mojombo=await fetch("https://api.github.com/users")
    const mojomboDetails=await mojombo.json();
    
    mojomboDetails.forEach(ele=>{
        if(ele.login=="mojombo"){
        console.log("Id: "+ele.id);
        console.log(" url: "+ele.url)
        console.log("Type of user: "+ele.type);
        }

    })
}
fetchOneUser()