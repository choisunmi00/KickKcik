function navigateToScreen(screenName) {
  switch (screenName) {
    case 'screen1':
      window.location.href = '/screen1'; // screen1.html로 이동
      break;
    case 'screen2':
      window.location.href = '/screen2'; // screen2.html로 이동
      break;
    case 'screen3':
      window.location.href = '/screen3'; // screen3.html로 이동
      break;
    case 'screen4':
      window.location.href = '/screen4'; // screen4.html로 이동
      break;
    default:
      console.error('유효하지 않은 화면 이름입니다.');
      break;
  }
}


// 시간을 측정하기 위한 변수
let startTime;
let elapsedTime = 0;

// 타이머 시작
function startTimer() {
  startTime = new Date();
  // 1초마다 updateElapsedTime 함수 호출
  setInterval(updateElapsedTime, 1000);
}

// 경과 시간 갱신
function updateElapsedTime() {
  const now = new Date();
  elapsedTime = Math.floor((now - startTime) / 1000); // 경과 시간(초) 계산

  // 경과 시간에 따른 알람 조건 확인
  if (elapsedTime >= 60) {
    // 60초 이상 경과 시 알람 실행
    playAlarm();
  }
}

// 알람 실행
function playAlarm() {
  // 알람 실행 로직 추가
  // 예시: 경고 메시지 출력
  alert("킥보드 이용 시간이 초과되었습니다!");
}

////////////////////////////////////////////////////
//screen1
// 알림 설정 정보 저장을 위한 변수들
let isAlarmEnabled = false;
let alarmRange = "day";
let alarmLimit = 0;
let alarmMethod = "sound";
let isRepeatEnabled = false;
let alarmSound = "laugh";

// 알림 설정 정보 업데이트
function updateAlarmSettings() {
  isAlarmEnabled = document.getElementById("alarm-toggle").checked;
  alarmRange = document.getElementById("alarm-range").value;
  alarmLimit = document.getElementById("alarm-limit").value;
  alarmMethod = document.getElementById("alarm-method").value;
  isRepeatEnabled = document.getElementById("alarm-repeat").checked;
  alarmSound = document.getElementById("alarm-sound").value;

  // 여기서 알림 설정 정보를 서버로 전송하거나 필요한 동작을 수행할 수 있습니다.
}

// 알림 설정 폼 제출 시 업데이트 함수 호출 및 동작 수행
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
  updateAlarmSettings();
  // 필요한 추가 동작 수행
});

// 버튼 요소 가져오기
const toggleBtn = document.getElementById('toggle-btn');

// 버튼 클릭 이벤트 처리
toggleBtn.addEventListener('click', function () {
  if (toggleBtn.textContent === 'ON') {
    toggleBtn.textContent = 'OFF';
    toggleBtn.classList.add('active');
  } else {
    toggleBtn.textContent = 'ON';
    toggleBtn.classList.remove('active');
  }
});

// 버튼 요소 가져오기
const repeatBtn = document.getElementById('repeat-btn');

// 버튼 클릭 이벤트 처리
repeatBtn.addEventListener('click', function () {
  if (repeatBtn.textContent === 'ON') {
    repeatBtn.textContent = 'OFF';
    repeatBtn.classList.add('active');
  } else {
    repeatBtn.textContent = 'ON';
    repeatBtn.classList.remove('active');
  }
});
