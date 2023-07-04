robohash();

function robohash() {
    let elementoRobohash = document.querySelector('robohash');
    let imgRobo = document.createElement('img')
    imgRobo.src = 'https://robohash.org/'+Math.random();
    elementoRobohash.appendChild(imgRobo);
}
