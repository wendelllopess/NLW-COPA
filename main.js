function createGame(player1, hour, player2) {
  return `
   <li>
     <img src="./assents/icon-${player1}.svg" alt="Bandeira do ${player1}" />
     <strong>${hour}</strong>
     <img src="./assents/icon-${player2}.svg" alt="Bandeira da ${player2}" />
   </li>
  `
}

let delay = 0;
function creatCard(date, day, games) {
  delay = delay + 0.3;
  return ` 
    <div class="card" style="animation-delay:${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
           ${games}
            
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =    
    creatCard("24/11", "quinta", createGame("brasil", "16:00", "servia"))+   
    creatCard("28/11", "segunda", createGame("brasil", "13:00", "suica"))+
    creatCard("02/12", "sexta", createGame("brasil", "16:00", "camarao"))
      
      
      
