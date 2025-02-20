document.getElementById("drawButton").addEventListener("click", function () {
  const numN = document.getElementById("numN").value;
  const numX = document.getElementById("numX").value;

  const N = parseInt(numN, 10);
  const X = parseInt(numX, 10);

  if (!isValidInput(N, X)) {
    displayError("無効な入力です。1-100の範囲で正しい数を入力してください。");
    return;
  }

  const result = drawLottery(N, X);
  displayResult(result);
});

function isValidInput(N, X) {
  return (
    !isNaN(N) && !isNaN(X) && N >= 1 && N <= 100 && X >= 1 && X <= 100 && X <= N
  );
}

function displayError(message) {
  document.getElementById("result").innerText = message;
}

function drawLottery(N, X) {
  const numbers = Array.from({ length: N }, (_, i) => i + 1);
  const result = [];
  for (let i = 0; i < X; i++) {
    const index = Math.floor(Math.random() * numbers.length);
    result.push(numbers.splice(index, 1)[0]);
  }
  return result;
}

function displayResult(result) {
  document.getElementById("result").innerText = `選ばれた番号: ${result.join(
    ", "
  )}`;
}
