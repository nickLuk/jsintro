
document.querySelector('button').addEventListener('click',load);
function load(){

    let url='http://www.omdbapi.com/?apikey=1e580308&t=Batman';
      fetch(url)
      .then(
          function(response){
              console.log(response);
              return response.json();
          }
      )
      .then(
        
          function(data){
              console.log(data.poster);
            var poster = document.getElementById('poster');
                                       
                
                
  
  
              }
          
      )
  }

