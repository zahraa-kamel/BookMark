var SiteNameInput =document.getElementById('InputName');
var SiteURLInput =document.getElementById('InputURL');
var rowData = document.getElementById('RowData');
var nameAlert =document.getElementById('nameAlert');
var formAlert =document.getElementById('formAlert');
var SiteList;



if (localStorage.getItem("bookmarksList")!=null) {
  SiteList = JSON.parse(localStorage.getItem("bookmarksList"));
    displaySite();
  
}
else{

SiteList=[];
}





// ADD function  


function AddSite(){

if( SiteNameInput.classList.contains('is-valid')
&& SiteURLInput.classList.contains('is-valid') )

{

var Website ={

    Name : SiteNameInput.value,
    Link: SiteURLInput.value,
}

SiteList.push(Website);

localStorage.setItem('bookmarksList',JSON.stringify(SiteList))
clearlist();
displaySite();
formAlert.classList.add('d-none')

}

else{

formAlert.classList.remove('d-none')

}


}





//clear function
function clearlist(){
    SiteNameInput.value=null;
    SiteURLInput.value=null;
}




// Display function

function displaySite(){

    var cartoona='';

    for( var i = 1; i < SiteList.length; i++ ){

        cartoona +=
        `
       
              <tr>
                <th scope="row">${[i]}</th>
                <td>${SiteList[i].Name}</td>
                <td>    <button class="btn btn-outline btn-success  " onclick="DisplayURL(${i})"><i class="fa-regular fa-eye me-2"></i>view</button> </td>
                <td><button class="btn btn-danger btn-outline " onclick="DeletMark(${i})"> <i class="fa-solid me-2 fa-trash"></i>Delete</button>
                </td>
              </tr> `
            
           
    }

rowData.innerHTML=cartoona;
    
}



// Display URL
function DisplayURL(indexMark){

  
  window.open(SiteList[indexMark].Link);


}



//Delete Mark


function DeletMark(deltedindex){
  SiteList.splice(deltedindex , 1);
  localStorage.setItem('bookmarksList' ,JSON.stringify(SiteList));
  displaySite();

}


// validation 
// var nameRegex = /^\w{3,}(\s+\w+)*$/;
// var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;


function validateForm(element){

  var regex = {
    InputName : /^\w{3,}(\s+\w+)*$/,
    InputURL : /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/,

  }

  if( regex[element.id].test(element.value)){
    element.classList.add('is-valid')
    element.classList.remove('is-invalid')
    nameAlert.classList.add('d-none');

  }
  else{
    element.classList.add('is-invalid')
    element.classList.remove('is-valid')
    nameAlert.classList.remove('d-none');
  }
console.log( element.id)


}
