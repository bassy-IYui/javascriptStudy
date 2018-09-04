//掛け算する
function multiplyNumber(leftText, rightText) {
    var result = 0;
    var Leftnum = parseFloat(leftText);
    var Rightnum = parseFloat(rightText);
    result = Leftnum * Rightnum;
    result = separateThousandsResult(result);
    return result;
}

//3桁区切りにする
function separateThousandsResult(result) {
    resultStr = result.toString();
    while (resultStr != (resultStr = resultStr.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
    return resultStr;
}