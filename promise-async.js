const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies

   // Progression 2: using setTimeout() - use 1000 units for time parameter


//Progression 3: Create a function to creat cookies and create an object of Promise.


    // Progression 4: adding two parameters and using setTimeout() - use 2000 units for time parameter

      
      // Progression 5: handling errors and adding new cookie to the list


// Progression 7: creating a new async function

// calling the new async function
let output = ''
function getcookies(){
  setTimeout(()=>{
    
  for(let i = 0;i<cookies.length;i++){
    output += `<li>${cookies[i].name}</li>`
  }
   document.body.innerHTML = output;
  },1000)
}

function createcookies(){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      cookies.push(newCookie);
      resolve();
        },2000)
  })
}

async function operation(){
   try{
     await createcookies();
     getcookies();
     
   }catch(err){console.log(err)}
 }
 operation()
 