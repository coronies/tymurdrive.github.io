(function () {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = 500;
  var h = 500;
  var w = window.innerWidth;
  var particles = [];
  var string = ["#d902ee", "#ffd79d", "#f162ff", "#320d3e"];
  var maxvelocity = 0.4;
  let pTimestamp = 0;

  class Particle {
    constructor() {
      this.x = Math.floor(Math.random() * w) + 1;
      this.y = Math.floor(Math.random() * h) + 1;
      this.velocityX = Math.random() * (2 * maxvelocity) - maxvelocity;
      this.velocityY = Math.random() * (2 * maxvelocity) - maxvelocity;
      this.color = string[Math.floor(Math.random() * 4)];
    }
    drawp() {
      ctx.beginPath();

      ctx.fillStyle = this.color;

      ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    }
  }
  function tick(timestamp) {
    requestAnimationFrame(tick);
    clear();
    pTimestamp = timestamp;

    for (var i in particles) {
      if (particles[i].x >= w || particles[i].x <= 0) {
        particles[i].velocityX = -1 * particles[i].velocityX;
      }
      if (particles[i].y >= h || particles[i].y <= 0) {
        particles[i].velocityY = -1 * particles[i].velocityY;
      }

      particles[i].x += particles[i].velocityX;
      particles[i].y += particles[i].velocityY;
      particles[i].drawp();
    }
    for (var i = 0; i < particles.length; i++) {
      for (var j = 0; j < particles.length; j++) {
        let c = Math.sqrt(
          Math.pow(particles[j].x - particles[i].x, 2) +
            Math.pow(particles[j].y - particles[i].y, 2)
        );
        if (c < 200) {
          console.log("fdfdf");
          ctx.beginPath();

          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.lineWidth = 3;
          let g = c / 200;
          ctx.strokeStyle = "rgba(88,24,69,0.07)";
          ctx.opacity = ctx.stroke();
          ctx.closePath();
        }
        if (c < 200 && c > 100) {
          console.log("fdfdf");
          ctx.beginPath();

          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.lineWidth = 3;
          let g = c / 200;
          ctx.strokeStyle = "rgba(0,160,244,0.2)";
          ctx.stroke();
          ctx.closePath();
        }
        if (c < 80 && c > 40) {
          console.log("fdfdf");
          ctx.beginPath();

          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.lineWidth = 3;
          let g = c / 200;
          ctx.strokeStyle = "rgba(255,255,255,0.6)";
          ctx.stroke();
          ctx.closePath();
        }
        if (c < 40) {
          console.log("fdfdf");
          ctx.beginPath();

          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.lineWidth = 3;
          let g = c / 200;
          ctx.strokeStyle = "rgba(255,255,255,1)";
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  }
  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  function init() {
    requestAnimationFrame(tick);

    for (var i = 0; i < 40; i++) {
      particles.push(new Particle());
    }
    particles.forEach((x) => {
      x.drawp();
    });
  }
  init();
})();
