function allData() {
    fetch('https://finalspaceapi.com/api/v0/character/')
      .then(response => response.json())
      .then(data => {
        Cards(data);
      })
      
  }
  
  function Cards(data) {
    const Container = document.getElementById('container');
    data.forEach(data1 => {
      const card = document.createElement('div');
      card.classList.add('col-lg-4', 'mb-4','col-sm-12');
  
      card.innerHTML = `
      
      <br>
        <div class="card">
        
       
          <img src="${data1.img_url}" class="card-img-top"><br>
          <h2 class="card-title">${data1.name}</h2>
         
        </div>
      `;
  
      Container.appendChild(card);
    });
  }
 
  allData();
  
  