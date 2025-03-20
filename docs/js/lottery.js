document.getElementById("drawButton").addEventListener("click", handleDraw);

function handleDraw() {
  const numN = parseInt(document.getElementById("numN").value, 10);
  const numX = parseInt(document.getElementById("numX").value, 10);

  if (!isValidInput(numN, numX)) {
    displayMessage(
      "無効な入力です。1-100の範囲で正しい数を入力してください。",
      true
    );
    return;
  }

  const result = drawLottery(numN, numX);
  displayMessage(`選ばれた番号: ${result.join(", ")}`);
}

function isValidInput(N, X) {
  return (
    !isNaN(N) && !isNaN(X) && N >= 1 && N <= 100 && X >= 1 && X <= 100 && X <= N
  );
}

// N 個の番号から X 個の番号を選ぶ
function drawLottery(N, X) {
  const numbers = Array.from({ length: N }, (_, i) => i + 1);
  const result = [];
  for (let i = 0; i < X; i++) {
    const index = Math.floor(Math.random() * numbers.length);
    result.push(numbers.splice(index, 1)[0]);
  }
  return result;
}

function setupButtonHandlers(handlers) {
  handlers.forEach(({ buttonClass, handler }) => {
    document.querySelector(buttonClass).addEventListener("click", handler);
  });
}

function displayMessage(message, isError = false) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = message;
  resultDiv.style.color = isError ? "red" : "black";
}
