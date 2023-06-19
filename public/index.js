
// 홈 화면 요청에 대한 처리
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 다른 화면 요청에 대한 처리
app.get('/screen1', (req, res) => {
  res.sendFile(path.join(__dirname, 'screen1.html'));
});

app.get('/screen2', (req, res) => {
  res.sendFile(path.join(__dirname, 'screen2.html'));
});

app.get('/screen3', (req, res) => {
  res.sendFile(path.join(__dirname, 'screen3.html'));
});

app.get('/screen4', (req, res) => {
  res.sendFile(path.join(__dirname, 'screen4.html'));
});

// POST 요청 처리 예시
app.post('/submit', (req, res) => {
  const data = req.body;
  // 데이터 처리 로직 추가

  // 응답 전송
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
