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

// 맨 위에 킥보드 총 사용 시간 표시
window.addEventListener('DOMContentLoaded', () => {
    const totalUsage = dailyData.reduce((total, data) => total + data.usageTime, 0);
    document.getElementById('total-usage').textContent = `킥보드를 총 ${totalUsage}분 사용했습니다.`;
});

// 하루 동안 걸었던 킥보드 시간 그래프 그리기

// 시계 그래프 업데이트 함수
function updateClock() {
    const canvas = document.getElementById('graph');
    const context = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = (canvas.width - 10) / 2;
    const startAngle = -Math.PI / 2;
    const endAngle = startAngle + (elapsedTime / 360) * (2 * Math.PI);

    // 배경 원 그리기
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.lineWidth = 10;
    context.strokeStyle = '#D5D8FF';
    context.stroke();

    // 채워지는 원 그리기
    context.beginPath();
    context.arc(centerX, centerY, radius, startAngle, endAngle);
    context.lineWidth = 10;
    context.strokeStyle = '#FFC717';
    context.stroke();

    // 시간 텍스트 그리기
    context.font = 'bold 60px Arial';
    context.fillStyle = '#12103A';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    const minutes = Math.floor(elapsedTime / 60).toString().padStart(2, '0');
    const seconds = (elapsedTime % 60).toString().padStart(2, '0');
    const timeText = `${minutes}:${seconds}`;
    context.fillText(timeText, centerX, centerY);

    // 사용량 텍스트 업데이트
    const usageLabel = document.querySelector('.usage-label');
    usageLabel.textContent = timeText;
}

// 타이머 시작 또는 정지 함수 호출
// 생략



const weeklyData = [
    { week: '월', usageTime: 7 },
    { week: '화', usageTime: 6 },
    { week: '수', usageTime: 1 },
    { week: '목', usageTime: 2 },
    { week: '금', usageTime: 4 },
    { week: '토', usageTime: 0 },
    { week: '일', usageTime: 0 }
];

const canvas = document.getElementById('weekly-chart');
const ctx = canvas.getContext('2d');

const barWidth = 40;
const chartHeight = canvas.height - 30;
const maxUsage = Math.max(...weeklyData.map(data => data.usageTime));

ctx.fillStyle = '#4caf50';
weeklyData.forEach((data, index) => {
    const x = 50 + index * 60;
    const barHeight = (data.usageTime / maxUsage) * chartHeight;
    const y = canvas.height - barHeight - 20;
    ctx.fillRect(x, y, barWidth, barHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(data.week, x + barWidth / 2, canvas.height - 5);
});

// 달력을 생성하는 함수
function generateCalendar(year, month, usageData) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();

    let calendarHTML = '<table>';
    calendarHTML += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';

    let day = 1;
    for (let i = 0; i < 6; i++) {
        calendarHTML += '<tr>';

        for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < firstDayOfWeek) || day > daysInMonth) {
                calendarHTML += '<td></td>'; // 비어있는 셀
            } else {
                const usage = usageData[day] || 0; // 해당 일의 사용 시간 (데이터가 없으면 0으로 처리)
                calendarHTML += '<td>' + day + '<br>' + usage + '분</td>'; // 일자와 사용 시간 표시
                day++;
            }
        }

        calendarHTML += '</tr>';

        if (day > daysInMonth) {
            break;
        }
    }

    calendarHTML += '</table>';
    return calendarHTML;
}

// 한 달 동안의 이용 내역을 가져오는 함수 (가상의 데이터로 예시)
function getMonthlyUsage() {
    const usageData = {
        5: 3,  // 5일: 120분 사용
        8: 3,
        10: 20,  // 10일: 90분 사용
        15: 9, // 15일: 180분 사용
        20: 11,
        24: 9,
        26: 1,
        28: 4
        // ...
    };

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    return generateCalendar(year, month, usageData);
}

// showCalendar() 함수 호출 시 모달 창 열기
function showCalendar() {
    const modalContainer = document.getElementById('modal-container');
    const calendar = document.getElementById('calendar');
    if (modalContainer.style.display === 'none') {
        modalContainer.style.display = 'block';
        calendar.innerHTML = getMonthlyUsage();
    } else {
        modalContainer.style.display = 'none';
        calendar.innerHTML = '';
    }
}

function closeModal() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.style.display = 'none';
}
