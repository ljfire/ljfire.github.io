let fire_mX = 100,
    fire_mY = 110
let fire = [],
    bound = [100, 100, 100, 100]

fire_mR = (n, i) => Math.floor(Math.random() * n) + i

fire_inject = () => {
    $(".wrap .canvas .fire").append("<canvas id='boll_fire'></canvas>")
    fire_can = document.querySelector(".canvas .fire #boll_fire")
    fire_con = fire_can.getContext("2d")
    fire_can.height = 200
    fire_can.width = 200
    fire_think()
}
fire_genFire = () => {
    for (let i = fire.length; i < 300; i++) {
        fire.push([fire_mR(bound[2] / 3, bound[0] + bound[2] / 3), fire_mR(bound[3], bound[1]), -Math.random(10) /
            100 + 1, Math.random(), fire_mR(5, 1)
        ])
    }
}

fire_think = () => {
    bound[0] = fire_mX - bound[2] / 2
    bound[1] = fire_mY - bound[3] / 2
    for (let i = 0; i < fire.length; i++) {
        fire[i][0] > bound[0] + bound[2] / 2 && fire[i][1] > bound[1] + bound[3] / 3 ? fire[i][0] += 0.3 :
            fire[i][0] -= 0.4
        fire[i][0] < bound[0] + bound[2] / 2 && fire[i][1] > bound[1] + bound[3] / 3 ? fire[i][0] -= 0.3 :
            fire[i][0] += 0.4
        fire[i][3] -= 0.01
        fire[i][1] *= fire[i][2]
        fire[i][1] <= 0 || fire[i][3] <= 0 ? fire.splice(i, 1) : null
    }
    fire_genFire()
    fire_animate()
    requestAnimationFrame(fire_think)
}

fire_animate = () => {
    fire_con.clearRect(0, 0, fire_can.width, fire_can.height)
    for (let i = 0; i < fire.length; i++) {
        fire_dC(fire[i][0], fire[i][1], fire[i][4], fire[i][3])
    }
}

fire_dC = (x, y, s, c) => {
    let rC = ["rgba(160, 50, 120, " + c + ")", "rgba(160, 160, 235, " + c + ")", "rgba(160, 220, 255, " + c + ")"]
    fire_con.beginPath()
    fire_con.save()
    fire_con.shadowColor = rC[fire_mR(rC.length, 0)]
    fire_con.shadowBlur = s / 2
    fire_con.fillStyle = rC[fire_mR(rC.length, 0)]
    fire_con.arc(x, y, s, 0, Math.PI * 2, true)
    fire_con.fill()
    fire_con.restore()
}
fire_inject()