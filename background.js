const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
const clouds = [];

// tạo hearts
for(let i=0;i<40;i++){
    hearts.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        size: Math.random()*15+10,
        speed: Math.random()*1+0.5,
        sway: Math.random()*1
    });
}

// tạo clouds
for(let i=0;i<5;i++){
    clouds.push({
        x: Math.random()*canvas.width,
        y: Math.random()*200,
        size: Math.random()*80+50,
        speed: Math.random()*0.5+0.2
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // clouds
    clouds.forEach(c=>{
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.ellipse(c.x, c.y, c.size, c.size*0.6, 0, 0, Math.PI*2);
        ctx.fill();
        c.x += c.speed;
        if(c.x - c.size > canvas.width) c.x = -c.size;
    });

    // hearts
    hearts.forEach(h=>{
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,100,180,0.8)';
        ctx.moveTo(h.x,h.y);
        ctx.arc(h.x,h.y,h.size/2,0,Math.PI*2);
        ctx.fill();
        h.y += h.speed;
        h.x += Math.sin(h.y*h.sway)*0.5;
        if(h.y > canvas.height) { h.y = -h.size; h.x=Math.random()*canvas.width; }
    });

    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
