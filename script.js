const prizes = [
  "🎓 100% Free Coaching",
  "🎁 ₹500 Amazon Coupon",
  "📚 Free Study Material",
  "💰 ₹500 Cashback",
  "✨ Coaching @ ₹1"
];

const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const result = document.getElementById("result");
let deg = 0;

function drawWheel() {
  const ctx = wheel.getContext("2d");
  const segmentAngle = 360 / prizes.length;

  for (let i = 0; i < prizes.length; i++) {
    const start = (segmentAngle * i) * Math.PI / 180;
    const end = (segmentAngle * (i + 1)) * Math.PI / 180;
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 200, start, end);
    ctx.fillStyle = i % 2 === 0 ? "#ba68c8" : "#7986cb";
    ctx.fill();
    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate((start + end) / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#fff";
    ctx.font = "bold 14px sans-serif";
    ctx.fillText(prizes[i], 180, 10);
    ctx.restore();
  }
}
drawWheel();

spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  result.classList.add("hidden");
  const randomIndex = Math.floor(Math.random() * prizes.length);
  const extra = Math.floor(Math.random() * 360);
  const totalSpins = 5;
  deg += totalSpins * 360 + (360 - randomIndex * (360 / prizes.length));
  wheel.style.transition = "transform 6s ease-out";
  wheel.style.transform = `rotate(${deg}deg)`;

  setTimeout(() => {
    result.textContent = `🎉 You won: ${prizes[randomIndex]} 🎉`;
    result.classList.remove("hidden");
    spinBtn.disabled = false;
  }, 6000);
});
