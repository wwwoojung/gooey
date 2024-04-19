GOOEY();

function GOOEY() {
    let container = document.getElementById('wrap');
    const num = 40;
    for (i = 0; i < 40; i++) {
        const ball_box = document.createElement('div');
        ball_box.className = 'ball';
        container.appendChild(ball_box);
    }
    setInterval(function () {
        let ball = document.getElementsByClassName('ball');
        for (i = 0; i < ball.length; i++) {
            ball[i].style.left = Math.floor(Math.random() * 90) + 'vw';
            ball[i].style.top = Math.floor(Math.random() * 80) + 'vh';
        }
    }, 2000)
};