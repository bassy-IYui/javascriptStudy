   function showResult() {
       var leftText = document.getElementById("left_textbox").value;
       var rightText = document.getElementById("right_textbox").value;
       if (isNumber(leftText) && isNumber(rightText)) {
           var result = MultiplyNumber(leftText, rightText);
           document.getElementById("result_label").innerText = result;
       } else {
           document.getElementById("result_label").innerText = "数字を入力してください"
       }

       function isNumber(numVal) {
           var pattern = /^[-+]?([1-9]\d*|0)(\.\d+)?$/;
           return pattern.test(numVal);
       }
   }