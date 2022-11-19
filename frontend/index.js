const container = document.getElementById('container');
console.log(container);

const getPlayers = () => {
    const players = fetch('https://foot-bet-backend-lesson.onrender.com/players')
        .then(response => response.json())
        .then(data => data);
    return players;
}

const init = async () => {
    const players = await getPlayers();
    
    console.log(players)
    for(player of players) {
        container.innerHTML += `
            <div class="player-card">
                <img src=${player.photo}>
                <p class="player-name">${player.name}</p>
                <p class="player-overall">${player.overall}</p>
                <p class="player-position">Position: ${player.main_position}</p>
                <p class="player-id">ID: ${player._id}</p>
            </div>
        `;
    }
}

init();

