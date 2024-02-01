const posts = [
    {title: 'First Post', description: 'This is our first post'},
    {title: 'India', description: 'A country of diversity'}
];

function getAllPosts(){
    setTimeout(()=>{
        let output = "";
        posts.forEach((thePost, index)=>{
            output += `<li>${thePost.title}</li>`;
        });
          document.body.innerHTML = output; 
    }, 1000);
  
}

// function createNewPost(thePost, callBack){
//     setTimeout(()=>{
//         posts.push(thePost);
//         callBack();
//     }, 2000);
    
// }

function createNewPost(thePost){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(thePost);
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject('Error : something went wrong...');
            }
        }, 2000);
    });   
}


async function doIt(){

    await createNewPost({title: 'New Post', description: 'This post was created later on...'});
    getAllPosts();

}

doIt();



// createNewPost({title: 'New Post', description: 'This post was created later on...'})
// .then(getAllPosts)
// .catch(err => console.log(err));