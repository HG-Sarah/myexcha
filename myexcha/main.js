const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('from-currency');
const toSelect = document.getElementById('to-currency');
const convertBtn = document.getElementById('convert-btn');
const resultDiv = document.getElementById('result');

// 숫자만 입력 가능하도록 제한
amountInput.addEventListener('input', () => {
  amountInput.value = amountInput.value.replace(/[^0-9]/g, '');
});

convertBtn.addEventListener('click', async () => {
  const amount = amountInput.value;
  const from = fromSelect.value;
  const to = toSelect.value;

  if (!amount) {
    resultDiv.textContent = '금액을 입력해주세요.';
    return;
  }

  resultDiv.textContent = '변환 중...';

  try {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
    const data = await response.json();
    const rate = data.rates[to];
    const converted = (amount * rate).toFixed(2);

    resultDiv.textContent = `${amount} ${from} = ${converted} ${to}`;
  } catch (error) {
    resultDiv.textContent = '환율 정보를 가져오는데 실패했습니다.';
  }
});
