document.onmousedown = disabledClick;
function disabledClick(event){
    if(event.button==2){
        return false;
    }
    // console.log(event);
}

// (중요)우클릭 방지 스크립트 사용하기 위해서는 아래 코드를 body에 추가해야함 
{/* <body oncontextmenu='return false' onselectstart='return false' ondragstart="return false"></body> */}