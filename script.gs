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
    sheet = activeSpreadsheet.insertSheet(sheetName, 0);
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
  var currentDate = Utilities.formatDate(currentTime, Session.getScriptTimeZone(), "M/d/yyyy");

  // Special Schedule (1:30 Dismissal) on Friday, Sept. 1, 2023
  if (currentDate == "9/1/2023") {
    if (hour == 7 && minute >= 48 || hour == 8 && minute <= 24) {
      period = "Period 0";
    } else if (hour == 8 && minute >= 30 || hour == 9 && minute <= 6) {
      period = "Period 1";
    } else if (hour == 9 && minute >= 12 || hour == 9 && minute <= 48) {
      period = "Period 2";
    } else if (hour == 10 && minute >= 9 || hour == 10 && minute <= 45) {
      period = "Period 3";
    } else if (hour == 10 && minute >= 51 || hour == 11 && minute <= 31) {
      period = "Period 4";
    } else if (hour == 11 && minute >= 31 || hour == 12 && minute <= 6) {
      period = "Lunch";
    } else if (hour == 12 && minute >= 12 || hour == 12 && minute <= 48) {
      period = "Period 5";
    } else if (hour == 12 && minute >= 54 || hour == 13 && minute <= 30) {
      period = "Period 6";
    } else if (hour == 13 && minute >= 30 || hour >= 14) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
    } else {
        period = "Passing Period";
    }
  }

  // Homecoming Schedule on Sept. 22, 2023
  else if (currentDate == "9/22/2023") {
    if (hour == 7 && minute >= 53 || hour == 8 && minute <= 24) {
      period = "Period 0";
    } else if (hour == 8 && minute >= 30 || hour == 9 && minute <= 1) {
      period = "Period 1";
    } else if (hour == 9 && minute >= 7 || hour == 9 && minute <= 38) {
      period = "Period 2";
    } else if (hour == 9 && minute >= 44 || hour == 10 && minute <= 15) {
      period = "Period 3";
    } else if (hour == 10 && minute >= 36 || hour == 11 && minute <= 7) {
      period = "Period 4";
    } else if (hour == 11 && minute >= 13 || hour == 11 && minute <= 44) {
      period = "Period 5";
    } else if (hour == 11 && minute >= 50 || hour == 12 && minute <= 21) {
      period = "Period 6";
    } else if (hour == 12 && minute >= 21) {
      period = "Lunch and Festivities";
    } else if (hour >= 13) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
    } else {
        period = "Passing Period";
    }
    }

  // Pre-PSAT on Tuesday, October 10, 2023
  else if (currentDate == "10/10/2023") {
    if (hour == 8 && minute >= 35 || hour == 9 && minute <= 28) {
      period = "Period 0";
    } else if (hour == 9 && minute >= 34 || hour == 10 && minute <= 27) {
      period = "Period 1";
    } else if (hour == 10 && minute >= 27 || hour == 10 && minute <= 42) {
      period = "Break";
    } else if (hour == 10 && minute >= 48 || hour == 11 && minute <= 41) {
      period = "Period 2";
    } else if (hour == 11 && minute >= 47 || hour == 12 && minute <= 17) {
      period = "Pre-PSAT";
    } else if (hour == 12 && minute >= 17 || hour == 12 && minute <= 52) {
      period = "Lunch";
    } else if (hour == 12 && minute >= 58 || hour == 13 && minute <= 51) {
      period = "Period 3";
    } else if (hour == 13 && minute >= 57 || hour == 14 && minute <= 50) {
      period = "Period 4";
    } else if (hour == 14 && minute >= 56 || hour >= 15) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
    } else {
        period = "Passing Period";
    }
  }

  // PSAT/NMSQT on Wednesday, October 11, 2023
  else if (currentDate == "10/11/2023") {
    if (hour == 8 && minute >= 40 || hour == 12 && minute <= 2) {
      period = "Testing (9th, 10th, & 11th)";
    } else if (hour == 9 && minute >= 34 || hour == 12 && minute <= 2) {
      period = "12th Activities";
    } else if (hour == 12 && minute >= 2 || hour == 12 && minute <= 37) {
      period = "Lunch";
    } else if (hour == 12 && minute >= 43 || hour == 13 && minute <= 36) {
      period = "Period 5";
    } else if (hour == 13 && minute >= 36 || hour == 13 && minute <= 51) {
      period = "Break";
    } else if (hour == 13 && minute >= 57 || hour == 14 && minute <= 50) {
      period = "Period 6";
    } else if (hour == 14 && minute >= 56 || hour >= 15) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
    } else {
        period = "Passing Period";
    }
  }

  // Emergency Drill/Great Shake Out on Thursday, October 19, 2023
  else if (currentDate == "10/19/2023") {
    if (hour == 7 && minute >= 34 || hour == 8 && minute <= 24) {
      period = "Period 0";
    } else if (hour == 8 && minute >= 30 || hour == 9 && minute <= 20) {
      period = "Period 1";
    } else if (hour == 9 && minute >= 26 || hour == 10 && minute <= 16) {
      period = "Period 2";
    } else if (hour == 10 && minute >= 16 || hour == 10 && minute <= 31) {
      period = "Break";
    } else if (hour == 10 && minute >= 37 || hour == 11 && minute <= 19) {
      period = "Period 3 Drill";
    } else if (hour == 11 && minute >= 19 || hour == 12 && minute <= 9) {
      period = "Period 3";
    } else if (hour == 12 && minute >= 15 || hour == 13 && minute <= 5) {
      period = "Period 4";
    } else if (hour == 13 && minute >= 5 || hour == 13 && minute <= 40) {
      period = "Lunch";
    } else if (hour == 13 && minute >= 46 || hour == 14 && minute <= 36) {
      period = "Period 5";
    } else if (hour == 14 && minute >= 42 || hour == 15 && minute <= 32) {
      period = "Period 6";
    } else if (hour == 15 && minute >= 32 || hour >= 16) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
    } else {
        period = "Passing Period";
    }
  }

  // 1st Semester Finals - Day 1
  else if (currentDate == "12/20/2023") {
    if (hour == 8 && minute >= 30 || hour == 10 && minute <= 30) {
      period = "Period 1 Final";
    } else if (hour == 10 && minute >= 30 || hour == 11 && minute <= 5) {
      period = "Brunch";
    } else if (hour == 11 && minute >= 11 || hour == 13 && minute <= 11) {
      period = "Period 2 Final";
    } else if (hour == 13 && minute >= 11 || hour == 13 && minute <= 26) {
      period = "Break";
    } else if (hour == 13 && minute >= 32 || hour == 15 && minute <= 32) {
      period = "Period 0 Final";
    } else if (hour == 15 && minute >= 32 || hour >= 16) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
    } else {
        period = "Passing Period";
    }
  }

  // 1st Semester Finals - Day 2
  else if (currentDate == "12/21/2023") {
    if (hour == 8 && minute >= 30 || hour == 10 && minute <= 30) {
      period = "Period 3 Final";
    } else if (hour == 10 && minute >= 30 || hour == 11 && minute <= 5) {
      period = "Brunch";
    } else if (hour == 11 && minute >= 11 || hour == 13 && minute <= 11) {
      period = "Period 4 Final";
    } else if (hour == 13 && minute >= 11 || hour == 13 && minute <= 26) {
      period = "Break";
    } else if (hour == 13 && minute >= 32 || hour == 15 && minute <= 32) {
      period = "Make Up Final by Appointment";
    } else if (hour == 15 && minute >= 32 || hour >= 16) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
    } else {
        period = "Passing Period";
    }
  }

  // 1st Semester Finals - Day 3
  else if (currentDate == "12/22/2023") {
    if (hour == 8 && minute >= 30 || hour == 10 && minute <= 30) {
      period = "Period 5 Final";
    } else if (hour == 10 && minute >= 30 || hour == 11 && minute <= 5) {
      period = "Brunch";
    } else if (hour == 11 && minute >= 11 || hour == 13 && minute <= 11) {
      period = "Period 6 Final";
    } else if (hour == 13 && minute >= 11 || hour == 13 && minute <= 26) {
      period = "Break";
    } else if (hour == 13 && minute >= 32 || hour == 15 && minute <= 32) {
      period = "Make Up Final by Appointment";
    } else if (hour == 15 && minute >= 32 || hour >= 16) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
    } else {
        period = "Passing Period";
    }
  }

  // Modified Regular Schedule 23-24
  else if (
    currentDate == "8/9/2023" ||
    currentDate == "1/9/2024" ||
    currentDate == "3/15/2024" ||
    currentDate == "3/18/2024"
  ) {
    if (hour == 7 && minute >= 38 || hour == 8 && minute <= 24) {
      period = "Period 0";
    } else if (hour == 8 && minute >= 30 || hour == 9 && minute <= 16) {
      period = "Period 1";
    } else if (hour == 9 && minute >= 22 || hour == 10 && minute <= 8) {
      period = "Period 2";
    } else if (hour == 10 && minute >= 8 || hour == 10 && minute <= 23) {
      period = "Break";
    } else if (hour == 10 && minute >= 29 || hour == 11 && minute <= 15) {
      period = "Period 3";
    } else if (hour == 11 && minute >= 21 || hour == 12 && minute <= 11) {
      period = "Period 4";
    } else if (hour == 12 && minute >= 11 || hour == 12 && minute <= 46) {
      period = "Lunch";
    } else if (hour == 12 && minute >= 52 || hour == 13 && minute <= 38) {
      period = "Period 5";
    } else if (hour == 13 && minute >= 44 || hour == 14 && minute <= 30) {
      period = "Period 6";
    } else if (hour == 14 && minute >= 36 || hour >= 15) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
    } else {
      period = "Passing Period";
    }
  }

    // SBAC Odd Days
  else if (currentDate == "4/23/2024" || currentDate == "4/25/2024") {
    if (hour == 7 && minute >= 27 || hour == 8 && minute <= 24) {
      period = "Period 0";
    } else if (hour == 8 && minute >= 30 || hour == 10 && minute <= 28) {
      period = "Period 1";
    } else if (hour == 10 && minute >= 28 || hour == 10 && minute <= 43) {
      period = "Break";
    } else if (hour == 10 && minute >= 49 || hour == 12 && minute <= 47) {
      period = "Period 3";
    } else if (hour == 12 && minute >= 47 || hour == 13 && minute <= 22) {
      period = "Lunch";
    } else if (hour == 13 && minute >= 28 || hour == 15 && minute <= 26) {
      period = "Period 5";
    } else if (hour == 15 && minute >= 26 || hour >= 16) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
    } else {
      period = "Passing Period";
    }
  }

  // SBAC Even Days
  else if (currentDate == "4/22/2024" || currentDate == "4/24/2024") {
    if (hour == 7 && minute >= 27 || hour == 8 && minute <= 24) {
      period = "Period 0";
    } else if (hour == 8 && minute >= 30 || hour == 10 && minute <= 28) {
      period = "Period 2";
    } else if (hour == 10 && minute >= 28 || hour == 10 && minute <= 43) {
      period = "Break";
    } else if (hour == 10 && minute >= 49 || hour == 12 && minute <= 47) {
      period = "Period 4";
    } else if (hour == 12 && minute >= 47 || hour == 13 && minute <= 22) {
      period = "Lunch";
    } else if (hour == 13 && minute >= 28 || hour == 15 && minute <= 26) {
      period = "Period 6";
    } else if (hour == 15 && minute >= 26 || hour >= 16) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
    } else {
      period = "Passing Period";
    }
  }

  // Farewell/Academic Pep Rally
  else if (currentDate == "5/17/2024") {
    if (hour == 7 && minute >= 38 || hour == 8 && minute <= 24) {
      period = "Period 0";
    } else if (hour == 8 && minute >= 30 || hour == 9 && minute <= 16) {
      period = "Period 1";
    } else if (hour == 9 && minute >= 22 || hour == 10 && minute <= 8) {
      period = "Period 2";
    } else if (hour == 10 && minute >= 8 || hour == 10 && minute <= 23) {
      period = "Break";
    } else if (hour == 10 && minute >= 29 || hour == 11 && minute <= 15) {
      period = "Period 3";
    } else if (hour == 11 && minute >= 21 || hour == 12 && minute <= 21) {
      period = "Period 4 Assembly";
    } else if (hour == 12 && minute >= 21 || hour == 13 && minute <= 7) {
      period = "Period 4 Class Time";
    } else if (hour == 13 && minute >= 7 || hour == 13 && minute <= 42) {
      period = "Lunch";
    } else if (hour == 13 && minute >= 48 || hour == 14 && minute <= 34) {
      period = "Period 5";
    } else if (hour == 14 && minute >= 40 || hour == 15 && minute <= 26) {
      period = "Period 6";
    } else if (hour == 15 && minute >= 26 || hour >= 16) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
    } else {
      period = "Passing Period";
    }
  }

  // Locker Clean Out - Thursday, May 23, 2024
  else if (currentDate === "5/23/2024") {
    if (hour === 7 && minute >= 24 || hour === 8 && minute <= 24) {
      period = "Period 0";
    } else if (hour === 8 && minute >= 30 || hour === 10 && minute <= 10) {
      period = "Period 2";
    } else if (hour === 10 && minute >= 16 || hour === 10 && minute <= 38) {
      period = "Trojan Time";
    } else if (hour === 10 && minute >= 38 || hour === 10 && minute <= 58) {
      period = "Locker Clean Out";
    } else if (hour === 10 && minute >= 58 || hour === 11 && minute <= 13) {
      period = "Break";
    } else if (hour === 11 && minute >= 19 || hour === 12 && minute <= 59) {
      period = "Period 4";
    } else if (hour === 12 && minute >= 59 || hour === 13 && minute <= 34) {
      period = "Lunch";
    } else if (hour === 13 && minute >= 40 || hour === 15 && minute <= 20) {
      period = "Period 6";
    } else if (hour === 15 && minute >= 20 || hour >= 16) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
    } else {
      period = "Passing Period";
    }
  }

  // 2nd Semester Finals - Day 1: Wednesday, May 29, 2024
  else if (currentDate === "5/29/2024") {
    if (hour === 8 && minute >= 30 || hour === 10 && minute <= 30) {
      period = "Period 1 Final";
    } else if (hour === 10 && minute >= 30 || hour === 11 && minute <= 5) {
      period = "Brunch";
    } else if (hour === 11 && minute >= 11 || hour === 13 && minute <= 11) {
      period = "Period 2 Final";
    } else if (hour === 13 && minute >= 11 || hour === 13 && minute <= 26) {
      period = "Break";
    } else if (hour === 13 && minute >= 32 || hour === 15 && minute <= 32) {
      period = "Period 0 Final";
    } else if (hour === 15 && minute >= 32 || hour >= 16) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
    } else {
      period = "Passing Period";
    }
  }

  // 2nd Semester Finals - Day 2: Thursday, May 30, 2024
  else if (currentDate === "5/30/2024") {
    if (hour === 8 && minute >= 30 || hour === 10 && minute <= 30) {
      period = "Period 3 Final";
    } else if (hour === 10 && minute >= 30 || hour === 11 && minute <= 5) {
      period = "Brunch";
    } else if (hour === 11 && minute >= 11 || hour === 13 && minute <= 11) {
      period = "Period 4 Final";
    } else if (hour === 13 && minute >= 11 || hour === 13 && minute <= 26) {
      period = "Break";
    } else if (hour === 13 && minute >= 32 || hour === 15 && minute <= 32) {
      period = "Make-up Final (by Appt)";
    } else if (hour === 15 && minute >= 32 || hour >= 16) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
    } else {
      period = "Passing Period";
    }
  }

  // 2nd Semester Finals - Day 3: Friday, May 31, 2024
  else if (currentDate === "5/31/2024") {
    if (hour === 8 && minute >= 30 || hour === 10 && minute <= 30) {
      period = "Period 5 Final";
    } else if (hour === 10 && minute >= 30 || hour === 11 && minute <= 5) {
      period = "Brunch";
    } else if (hour === 11 && minute >= 11 || hour === 13 && minute <= 11) {
      period = "Period 6 Final";
    } else if (hour === 13 && minute >= 11 || hour === 13 && minute <= 26) {
      period = "Break";
    } else if (hour === 13 && minute >= 32 || hour === 15 && minute <= 32) {
      period = "Make-up Final (by Appt)";
    } else if (hour === 15 && minute >= 32 || hour >= 16) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
    } else {
      period = "Passing Period";
    }
  }

  else if (dayOfWeek == 1 || dayOfWeek == 4 || dayOfWeek == 5) {
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
    } else if (hour == 12 && minute >= 54 || hour == 13 && minute <= 28) {
      period = "Lunch";
    } else if (hour == 13 && minute >= 35 || hour == 14 && minute <= 31) {
      period = "Period 5";
    } else if (hour == 14 && minute >= 38 || hour == 15 && minute <= 34) {
      period = "Period 6";
    } else if (hour >= 15 && minute >= 35 || hour >= 16 ) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
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
    } else if (hour >= 15 && minute >= 20 || hour >= 16) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
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
    } else if (hour >= 15 && minute >= 20 || hour >= 16) {
      period = "After School";
    } else if (hour >= 0 && hour <= 7) {
      period = "Before School";
    } else {
        period = "Passing Period";
    }
  }

  return period;
}