var shan_c = document.querySelector('.canvas .shan #shan_c'),
  shan_ctx = shan_c.getContext('2d'),
  shan_cw = shan_c.width = 200,
  shan_ch = shan_c.height = 200,
  shan_rand = function (a, b) {
    return ~~((Math.random() * (b - a + 1)) + a);
  },
  dToR = function (degrees) {
    return degrees * (Math.PI / 180);
  },
  circle = {
    x: (shan_cw / 2) ,
    y: (shan_ch / 2) ,
    radius: 50,
    speed: 2,
    rotation: 0,
    angleStart: 270,
    angleEnd: 90,
    hue: 220,
    thickness: 9,
    blur: 25
  },
  particles = [],
  particleMax = 100,
  updateCircle = function () {
    if (circle.rotation < 360) {
      circle.rotation += circle.speed;
    } else {
      circle.rotation = 0;
    }
  },
  renderCircle = function () {
    shan_ctx.save();
    shan_ctx.translate(circle.x, circle.y);
    shan_ctx.rotate(dToR(circle.rotation));
    shan_ctx.beginPath();
    shan_ctx.arc(0, 0, circle.radius, dToR(circle.angleStart), dToR(circle.angleEnd), true);
    shan_ctx.lineWidth = circle.thickness;
    shan_ctx.strokeStyle = gradient1;
    shan_ctx.stroke();
    shan_ctx.restore();
  },
  renderCircleBorder = function () {
    shan_ctx.save();
    shan_ctx.translate(circle.x, circle.y);
    shan_ctx.rotate(dToR(circle.rotation));
    shan_ctx.beginPath();
    shan_ctx.arc(0, 0, circle.radius + (circle.thickness / 2), dToR(circle.angleStart), dToR(circle.angleEnd), true);
    shan_ctx.lineWidth = 2;
    shan_ctx.strokeStyle = gradient2;
    shan_ctx.stroke();
    shan_ctx.restore();
  },
  renderCircleFlare = function () {
    shan_ctx.save();
    shan_ctx.translate(circle.x, circle.y);
    shan_ctx.rotate(dToR(circle.rotation + 185));
    shan_ctx.scale(1, 1);
    shan_ctx.beginPath();
    shan_ctx.arc(0, circle.radius, 30, 0, Math.PI * 2, false);
    shan_ctx.closePath();
    var gradient3 = shan_ctx.createRadialGradient(0, circle.radius, 0, 0, circle.radius, 30);
    gradient3.addColorStop(0, 'hsla(330, 50%, 50%, .35)');
    gradient3.addColorStop(1, 'hsla(330, 50%, 50%, 0)');
    shan_ctx.fillStyle = gradient3;
    shan_ctx.fill();
    shan_ctx.restore();
  },
  renderCircleFlare2 = function () {
    shan_ctx.save();
    shan_ctx.translate(circle.x, circle.y);
    shan_ctx.rotate(dToR(circle.rotation + 165));
    shan_ctx.scale(1.5, 1);
    shan_ctx.beginPath();
    shan_ctx.arc(0, circle.radius, 25, 0, Math.PI * 2, false);
    shan_ctx.closePath();
    var gradient4 = shan_ctx.createRadialGradient(0, circle.radius, 0, 0, circle.radius, 25);
    gradient4.addColorStop(0, 'hsla(30, 100%, 50%, .2)');
    gradient4.addColorStop(1, 'hsla(30, 100%, 50%, 0)');
    shan_ctx.fillStyle = gradient4;
    shan_ctx.fill();
    shan_ctx.restore();
  },
  createParticles = function () {
    if (particles.length < particleMax) {
      particles.push({
        x: (circle.x + circle.radius * Math.cos(dToR(circle.rotation - 85))) + (shan_rand(0, circle.thickness * 2) - circle.thickness),
        y: (circle.y + circle.radius * Math.sin(dToR(circle.rotation - 85))) + (shan_rand(0, circle.thickness * 2) - circle.thickness),
        vx: (shan_rand(0, 100) - 50) / 1000,
        vy: (shan_rand(0, 100) - 50) / 1000,
        radius: shan_rand(1, 6) / 2,
        alpha: shan_rand(10, 20) / 100
      });
    }
  },
  updateParticles = function () {
    var i = particles.length;
    while (i--) {
      var p = particles[i];
      p.vx += (shan_rand(0, 100) - 50) / 750;
      p.vy += (shan_rand(0, 100) - 50) / 750;
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= .01;

      if (p.alpha < .02) {
        particles.splice(i, 1)
      }
    }
  },
  renderParticles = function () {
    var i = particles.length;
    while (i--) {
      var p = particles[i];
      shan_ctx.beginPath();
      shan_ctx.fillRect(p.x, p.y, p.radius, p.radius);
      shan_ctx.closePath();
      shan_ctx.fillStyle = 'hsla(0, 0%, 100%, ' + p.alpha + ')';
    }
  },
  clear = function () {
    shan_ctx.globalCompositeOperation = 'destination-out';
    shan_ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    shan_ctx.fillRect(0, 0, shan_cw, shan_ch);
    shan_ctx.globalCompositeOperation = 'lighter';
  }
// 初始化 然后 循环
shan_loop = function () {
  clear(); 
  updateCircle();
  renderCircle();
  renderCircleBorder();
  renderCircleFlare();
  renderCircleFlare2();
  createParticles();
  updateParticles();
  renderParticles();
}
// 初始化
shan_ctx.shadowBlur = circle.blur;
shan_ctx.shadowColor = 'hsla(' + circle.hue + ', 80%, 60%, 1)';
shan_ctx.lineCap = 'round'

var gradient1 = shan_ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
gradient1.addColorStop(0, 'hsla(' + circle.hue + ', 60%, 50%, .25)');
gradient1.addColorStop(1, 'hsla(' + circle.hue + ', 60%, 50%, 0)');

var gradient2 = shan_ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
gradient2.addColorStop(0, 'hsla(' + circle.hue + ', 100%, 50%, 0)');
gradient2.addColorStop(.1, 'hsla(' + circle.hue + ', 100%, 100%, .7)');
gradient2.addColorStop(1, 'hsla(' + circle.hue + ', 100%, 50%, 0)');

setInterval(shan_loop, 16);