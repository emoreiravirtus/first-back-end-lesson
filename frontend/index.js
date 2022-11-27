const container = document.getElementById('container');

let user = prompt("user name");
let password = prompt("password");

const getJWT = () => {
    console.log(user, password);
    const jwt = fetch('https://foot-bet-backend-lesson.onrender.com/login', {
        method: 'POST',
        body: JSON.stringify({
            user,
            password
        })
    })
    .then(response => response.json())
    .then(data => data)
    return jwt
}
const getPlayers = (jwt) => {
    console.log(jwt);
    const players = fetch('https://foot-bet-backend-lesson.onrender.com/players', {
        headers: {
            'x-access-token': jwt.token
        }
    })
        .then(response => response.json())
        .then(data => data);
    return players;
}

const init = async () => {
    const jwt = await getJWT();
    const players = await getPlayers(jwt);
    
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

