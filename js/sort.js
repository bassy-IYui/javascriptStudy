function sortText() {
    var sortText = document.getElementById("sort_text").value;
    var array = sortText.split(",");
    for (var i = 0; i < array.length; i++) {
        array[i] = parseFloat(array[i])
    }
    changeDescendingOrderText(array);
    var primeArray = primeDecisionText(array);
    changeAscendingOrderText(primeArray);
}

function changeDescendingOrderText(arrayInt) {
    arrayInt.sort(function(a, b) {
        if (a > b) {
            return -1;
        }
        if (a < b) {
            return 1;
        }
        return 0;
    });
    console.log(arrayInt);
    document.getElementById("result_sort_text").innerText = arrayInt;
}

function changeAscendingOrderText(primeArray) {
    primeArray.sort(function(a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });
    console.log(primeArray);
    document.getElementById("result_sort_prime_text").innerText = primeArray;
}

function primeDecisionText(arrayInt) {
    var primeArray = [];
    for (var i = 0; i < arrayInt.length; i++) {
        var num = arrayInt[i];
        if (num === 2) {
            primeArray.push(num);
        } else {
            for (var j = 2; j < num; j++) {
                if (num % j === 0) {
                    break
                }
                if (j + 1 === num) {
                    primeArray.push(num);
                }
            }
        }
    }

    return primeArray;
}