function sortText() {
    var sortText = document.getElementById("sort_text").value;
    var array = sortText.split(",");
    for (var i = 0; i < array.length; i++) {
        array[i] = parseFloat(array[i])
    }
    array.sort(function(a, b) {
        if (a > b) {
            return -1;
        }
        if (a < b) {
            return 1;
        }
        return 0;
    });
    console.log(array);
    document.getElementById("result_sort_text").innerText = array;
}