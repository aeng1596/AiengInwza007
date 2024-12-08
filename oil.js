function calculateLiters() {
  const fuelType = document.getElementById('fuelType').value;
  const amount = parseFloat(document.getElementById('amount').value);
  let pricePerLiter = 0;

  // เช็คประเภทน้ำมันและกำหนดราคา
  if (fuelType === 'gasoline91') {
    pricePerLiter = 35.68;
  } else if (fuelType === 'gasolineE85') {
    pricePerLiter = 33.69;
  } else if (fuelType === 'gasoline95') {
    pricePerLiter = 44.34;
  } else if (fuelType === 'diesel') {
    pricePerLiter = 32.94;
  }

  // คำนวณจำนวนลิตรที่ได้จากจำนวนเงิน
  const liters = amount / pricePerLiter;

  // แสดงผลจำนวนลิตรที่ได้
  document.getElementById('result').textContent = liters > 0 ? liters.toFixed(2) : 'กรุณากรอกจำนวนเงินที่ถูกต้อง';
}
