$(function () {

    $("button").click(function () {

        var chkData = $("#insData").val(); // 비교 내용 1 / input 내용
        chkData = chkData.trim(); // 앞뒤 공백 제거

        // 비교 기준
        var pattern = "한글 유효성 검사"; // 비교 내용 2  / 패턴 (비교기준)
        var regExp = /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        // var regExp = new RegExp(pattern);
        var res = "";


        if (regExp.test(chkData)) {
            res = "한글만 입력가능";
        } else {
            res = "올바른 입력입니다.";
        }


        $("#chkPattern").text("패턴(비교기준) : " + pattern)
        $("#res").text("패턴 비교 결과 : " + res);




    });

});
