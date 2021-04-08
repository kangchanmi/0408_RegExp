$(function () {
    $("button").click(function () {

        var insData = $("#insData").val();
        insData = insData.trim();

        var pattern = "영어/숫자 유효성 검사";
        var regExp = /[^a-z|A-Z|0-9]/;
        var res = "";

        if (regExp.test(insData)) {
            res = "영어/숫자만 입력가능";
        } else {
            res = "영어/숫자 OK";
        }

        $("#chkPattern").text("패턴(비교기준) : " + pattern);
        $("#res").text("패턴 비교 결과 : " + res);

    });
});
