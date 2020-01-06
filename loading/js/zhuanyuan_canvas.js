var zhuanyuan_canvas = document.querySelector('#zhuan-yuan'),
    zhuanyuan_ctx = zhuanyuan_canvas.getContext('2d'),
    zhuanyuan_width = zhuanyuan_canvas.width = 150,
    zhuanyuan_height = zhuanyuan_canvas.height = 150,
    zhuanyuan_cx = zhuanyuan_width / 2,
    zhuanyuan_cy = zhuanyuan_height / 2,
    zhuanyuan_count = 40,
    sizeBase = 0.1,
    sizeDiv = 10,
    zhuanyuan_tick = 0;

zhuanyuan_ctx.translate(zhuanyuan_cx, zhuanyuan_cy);

(function zhuanyuan_loop() {
    requestAnimationFrame(zhuanyuan_loop);
    zhuanyuan_ctx.clearRect(-zhuanyuan_width / 2, -zhuanyuan_height / 2, zhuanyuan_width, zhuanyuan_height);
    zhuanyuan_ctx.fillStyle = '#fff';
    var angle = zhuanyuan_tick / 8,
        radius = -5 + Math.sin(zhuanyuan_tick / 15) * 50,
        size;

    for (var i = 0; i < zhuanyuan_count; i++) {
        angle += Math.PI / 30;
        radius += i / 40;
        size = sizeBase + i / sizeDiv;

        zhuanyuan_ctx.beginPath();
        zhuanyuan_ctx.arc(Math.cos(angle) * radius, Math.sin(angle) * radius, size, 0, Math.PI * 2, false);
        zhuanyuan_ctx.fillStyle = '#98bff6';
        zhuanyuan_ctx.fill();

        zhuanyuan_ctx.beginPath();
        zhuanyuan_ctx.arc(Math.cos(angle) * -radius, Math.sin(angle) * -radius, size, 0, Math.PI * 2, false);
        zhuanyuan_ctx.fillStyle = '#ffffff';
        zhuanyuan_ctx.fill();

        zhuanyuan_ctx.beginPath();
        zhuanyuan_ctx.arc(Math.cos(angle + Math.PI / 2) * radius, Math.sin(angle + Math.PI / 2) * radius, size, 0, Math.PI * 2,
            false);
        zhuanyuan_ctx.fillStyle = '#3e74dc';
        zhuanyuan_ctx.fill();

        zhuanyuan_ctx.beginPath();
        zhuanyuan_ctx.arc(Math.cos(angle + Math.PI / 2) * -radius, Math.sin(angle + Math.PI / 2) * -radius, size, 0, Math.PI * 2);
        zhuanyuan_ctx.fillStyle = '#ffbdff';
        zhuanyuan_ctx.fill();
    } 
    zhuanyuan_tick++;
})();