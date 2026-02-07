document.getElementById('consultationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const region = document.getElementById('region').value;
    const address = document.getElementById('address').value;

    // 현재는 콘솔에만 출력 (나중에 메일 전송 로직이 들어갈 자리)
    console.log("의뢰인 정보 확인:");
    console.log("이름:", name);
    console.log("지역:", region);
    console.log("주소:", address);

    alert(`${name}님, 상담 의뢰가 정상적으로 접수되었습니다.`);
});