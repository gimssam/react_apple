document.onkeydown = disabledF12;
function disabledF12(e){
    if(e.keyCode == 123){
        e.preventDefault();
        e.returnvalue = false;
    }
    // console.log(e);
}

// (중요)F12 방지 스크립트 사용하기 위해서는 아래 코드를 body에 추가 안해도 됨
{/* <body oncontextmenu='return false' onselectstart='return false' ondragstart="return false"></body> */}
// 속성 빼고 사용
{/* <body></body> */}