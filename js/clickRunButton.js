   function showResult() {
       var leftText = document.getElementById("left_textbox").value;
       var rightText = document.getElementById("right_textbox").value;
       var total = toMultiply(leftText, rightText);
       document.getElementById("result_label").innerText = total;
   }