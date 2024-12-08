// ฟังก์ชันสำหรับเปลี่ยนการแสดงฟิลด์อินพุตตามประเภทสี่เหลี่ยม
function toggleInputFields() {
  const shapeType = document.getElementById('shapeType').value;
  const squareInputs = document.getElementById('squareInputs');
  const rectangleInputs = document.getElementById('rectangleInputs');

  if (shapeType === 'square') {
    squareInputs.style.display = 'block';
    rectangleInputs.style.display = 'none';
  } else if (shapeType === 'rectangle') {
    squareInputs.style.display = 'none';
    rectangleInputs.style.display = 'block';
  }
}

// ฟังก์ชันสำหรับคำนวณพื้นที่
function calculateArea() {
  const shapeType = document.getElementById('shapeType').value;
  let area = 0;

  if (shapeType === 'square') {
    const side = parseFloat(document.getElementById('side').value);
    if (!isNaN(side) && side > 0) {
      area = side * side;
    }
  } else if (shapeType === 'rectangle') {
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    if (!isNaN(width) && !isNaN(height) && width > 0 && height > 0) {
      area = width * height;
    }
  }

  // อัปเดตผลลัพธ์บนหน้าจอ
  document.getElementById('result').textContent = area > 0 ? area.toFixed(2) : 'กรุณากรอกข้อมูลที่ถูกต้อง';
}
