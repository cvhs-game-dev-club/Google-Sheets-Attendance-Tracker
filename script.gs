function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function processForm(form) {
  var studentID = form.inputField;
  Logger.log('Student ID: ' + studentID);
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var currentTime = new Date();
  var sheetName = Utilities.formatDate(currentTime, Session.getScriptTimeZone(), "M/d/yyyy");
  var sheet = activeSpreadsheet.getSheetByName(sheetName);
  if (!sheet) {
    sheet = activeSpreadsheet.insertSheet(sheetName);
    sheet.appendRow(["Student ID", "Current Time", "Period"]);
  }
  var period = getPeriod(currentTime);
  sheet.appendRow([studentID, currentTime, period]);
}

function getPeriod(currentTime) {
  var dayOfWeek = currentTime.getDay();
  var hour = currentTime.getHours();
  var minute = currentTime.getMinutes();
  var period = "";

  if (dayOfWeek == 1 || dayOfWeek == 4 || dayOfWeek == 5) {
    if (hour == 7 && minute >= 24 || hour == 8 && minute <= 23) {
      period = "Period 0";
    } else if (hour == 8 && minute >= 30 || hour == 9 && minute <= 26) {
      period = "Period 1";
    } else if (hour == 9 && minute >= 33 || hour == 10 && minute <= 29) {
      period = "Period 2";
    } else if (hour == 10 && minute >= 51 || hour == 11 && minute <= 47) {
      period = "Period 3";
    } else if (hour == 11 && minute >= 54 || hour == 12 && minute <= 53) {
      period = "Period 4";
    } else if (hour == 13 && minute >= 35 || hour == 14 && minute <= 31) {
      period = "Period 5";
    } else if (hour == 14 && minute >= 38 || hour == 15 && minute <= 34) {
      period = "Period 6";
    } else if (hour >= 15 && minute >= 35) {
      period = "After School";
    } else {
        period = "Passing Period";
    }

  } else if (dayOfWeek == 2) {
    if (hour == 7 && minute >= 54 || hour == 8 && minute <= 23) {
      period = "Period 0";
    } else if (hour == 8 && minute >= 30 || hour == 10 && minute <= 9) {
      period = "Period 1";
    } else if (hour == 10 && minute >= 16 || hour == 11 && minute <= 17) {
      period = "Trojan Time";
    } else if (hour == 11 && minute >= 19 || hour == 12 && minute <= 58) {
      period = "Period 3";
    } else if (hour == 12 && minute >= 59 || hour == 13 && minute <= 33) {
      period = "Lunch";
    } else if (hour == 13 && minute >= 40 || hour == 15 && minute <= 19) {
      period = "Period 5";
    } else if (hour == 15 && minute >= 20) {
      period = "After School";
    } else {
        period = "Passing Period";
    }

  } else if (dayOfWeek == 3) {
    if (hour == 7 && minute >= 54 || hour == 8 && minute <= 23) {
      period = "Period 0";
    } else if (hour == 8 && minute >= 30 || hour == 10 && minute <= 9) {
      period = "Period 2";
    } else if (hour == 10 && minute >= 16 || hour == 11 && minute <= 17) {
      period = "Trojan Time";
    } else if (hour == 11 && minute >= 19 || hour == 12 && minute <= 58) {
      period = "Period 4";
    } else if (hour == 12 && minute >= 59 || hour == 13 && minute <= 33) {
      period = "Lunch";
    } else if (hour == 13 && minute >= 40 || hour == 15 && minute <= 19) {
      period = "Period 6";
    } else if (hour == 15 && minute >= 20) {
      period = "After School";
    } else {
        period = "Passing Period";
    }
  }

  return period;
}