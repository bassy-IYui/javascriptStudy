function calculation_time() {
    var date;
    var date1;
    var dateText = document.getElementById("date_text").value;
    if (dateText.length == 8) {
        var yyyy = dateText.substr(0, 4);
        var mm = dateText.substr(4, 2);
        var dd = dateText.substr(6, 2);
        date = new Date(yyyy + "/" + mm + "/" + dd);
        date1 = new Date(yyyy + "/" + mm + "/" + dd);
    } else {
        date = new Date(dateText);
        date1 = new Date(dateText);
    }


    if (checkDate(dateText)) {
        date.setDate(date.getDate() + 10);
        document.getElementById("ten_days_later").innerText = date.getFullYear() + "/" + ('0' + (date.getMonth() + 1)).slice(-2) + "/" + ('0' + date.getDate()).slice(-2);
        date1.setDate(date1.getDate() + 31);
        document.getElementById("thirty_one_days_later").innerText = date1.getFullYear() + "/" + ('0' + (date1.getMonth() + 1)).slice(-2) + "/" + ('0' + date1.getDate()).slice(-2);
    }
}

function checkDate(dateText) {
    if (dateText.match(/^\d{4}\/\d{1,2}\/\d{1,2}$/)) {
        return true
    } else if (dateText.match(/^\d{4}\-\d{2}\-\d{2}$/)) {
        return true
    } else if (dateText.match(/^\d{8}$/)) {
        return true
    } else {
        return false
    }
}