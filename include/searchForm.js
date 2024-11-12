$(function(){
    // enter값 전송 막기
    $('input').keypress(function(event){
        //enter값 막기 = submit 실행안되게 하기 위해
        if(event.keyCode == 13){
            try{
                document.getElementsByName('search')[0].value = '';
                return false;
            }catch(e){}
        }
    });
    
    // 검색 버튼 클릭시 input 나오게 하기
    $('button:submit').click(function(){
        try{    
            // window.location.href="/";
            // document.getElementsByName('search')[0].value = '';
            // return false;
            const searchBtn = document.getElementsByName('search');
            $(searchBtn).stop().show();
        }catch(e){

        }
    });
});