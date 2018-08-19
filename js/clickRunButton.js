   function showResult() {
       var leftText = document.getElementById("left_text").value;
       var rightText = document.getElementById("right_text").value;
       document.getElementById("result_label").innerText = "lt's \"my\" answer";

       if (isNumber("left_textbox_error", leftText)) {
           if (isNumber("right_textbox_error", rightText)) {
               var result = MultiplyNumber(leftText, rightText);
               document.getElementById("right_textbox_error").style.display = "none";
               document.getElementById("result_multiplication").innerText = result;
           }
           document.getElementById("left_textbox_error").style.display = "none";
       } else if (!isNumber("left_textbox_error", leftText)) {
           if (isNumber("right_textbox_error", rightText)) {
               document.getElementById("right_textbox_error").style.display = "none";
           }
       }
   }


   function isNumber(id, numVal) {
       var pattern = /^[-+]?([1-9]\d*|0)(\.\d+)?$/;
       if (numVal === "") {
           document.getElementById(id).style.display = "block"
           document.getElementById(id).innerText = "何か入力してください";
           return false;
       } else if (parseFloat(numVal) >= 10000) {
           document.getElementById(id).style.display = "block"
           document.getElementById(id).innerText = "数字は9999まで入力できます";
           return false;
       } else if (pattern.test(numVal)) {
           return true;
       } else {
           document.getElementById(id).style.display = "block"
           document.getElementById(id).innerText = "数字を入力してください";
           return false;
       }
   }