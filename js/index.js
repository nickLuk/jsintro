document.querySelector('button').addEventListener('click',load);
var input = document.querySelector('input');

function load(){
    let name = input.value;
    let url=`http://www.omdbapi.com/?i=tt3896198&apikey=1e580308&t=${name}`;
    //var req = new Request(link);
      fetch(url)
      .then(
          function(response){
              
              return response.json();
          }
      )
      .then(
        
          function(data){
              console.log(data.Poster)
            let text=document.querySelector('h3')
              text.innerHTML = data.Title;
             let poster = document.getElementById('poster')
            
             poster.innerHTML =`<img src="${data.Poster}">`
                                    
                
                
  
  
              }
          
      )
  }

