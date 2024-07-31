<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Emoji Rain with Vue</title>
  <style>
    #canvas {
      position: absolute;
      top: 0;
      left: 0;
    }
  </style>
</head>
<body>
  <div id="app">
    <canvas id="canvas"></canvas>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <script>
    new Vue({
      el: '#app',
      mounted() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const emojiArray = 
        ["✌", "😂", "😝", "😁", "😱", "👉", "🙌", "🍻", "🔥", "🌈", "☀", "🎈", "🌹", "💄", "🎀", "⚽", "🎾", "🏁", "😡", "👿", "🐻", "🐶", "🐬", "🐟", "🍀", "👀", "🚗", "🍎", "💝", "💙", "👌", "❤", "😍", "😉", "😓", "😳", "💪", "💩", "🍸", "🔑", "💖", "🌟", "🎉", "🌺", "🎶", "👠", "🏈", "⚾", "🏆", "👽", "💀", "🐵", "🐮", "🐩", "🐎", "💣", "👃", "👂", "🍓", "💘", "💜", "👊", "💋", "😘", "😜", "😵", "🙏", "👋", "🚽", "💃", "💎", "🚀", "🌙", "🎁", "⛄", "🌊", "⛵", "🏀", "🎱", "💰", "👶", "👸", "🐰", "🐷", "🐍", "🐫", "🔫", "👄", "🚲", "🍉", "💛", "💚"]; // 可以根据需要添加更多的表情符号

        function generateRandomNumber(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function animate() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < emojis.length; i++) {
            ctx.font = '30px serif';
            ctx.fillText(emojis[i].emoji, emojis[i].x, emojis[i].y);
            emojis[i].y += generateRandomNumber(1, 3);
            if (emojis[i].y > canvas.height) {
              emojis[i].x = generateRandomNumber(0, canvas.width);
              emojis[i].y = generateRandomNumber(-100, 0);
            }
          }
          requestAnimationFrame(animate);
        }

        const emojis = [];
        for (let i = 0; i < 50; i++) { // 控制初始生成的emoji数量
          emojis.push({
            emoji: emojiArray[Math.floor(Math.random() * emojiArray.length)],
            x: generateRandomNumber(0, canvas.width),
            y: generateRandomNumber(-canvas.height, 0)
          });
        }

        animate();
      }
    });
  </script>
</body>
</html>
