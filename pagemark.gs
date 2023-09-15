function pageMark(e) {
  var range = e.range;
  var sheet = range.getSheet();
  var sheetName = sheet.getName();

  // PC Web TC 시트
  if (sheetName === 'PC Web TC') {
    var column = range.getColumn();

    if (column === 24) { // X열(24)에 대한 처리
      var row = range.getRow();
      var value = sheet.getRange(row, column).getValue();

      if (typeof value === 'number') {
        var prefixedValue = 'P. ' + value;
        sheet.getRange(row, column).setValue(prefixedValue);
      }
    }
  }

  // PC OS TC 시트
  if (sheetName === 'PC OS TC') {
    var column = range.getColumn();

    if (column === 24) { // X열(24)에 대한 처리
      var row = range.getRow();
      var value = sheet.getRange(row, column).getValue();

      if (typeof value === 'number') {
        var prefixedValue = 'P. ' + value;
        sheet.getRange(row, column).setValue(prefixedValue);
      }
    }
  }

  // MO Web TC 시트
  if (sheetName === 'MO Web TC') {
    var column = range.getColumn();

    if (column === 22) { // V열(22)에 대한 처리
      var row = range.getRow();
      var value = sheet.getRange(row, column).getValue();

      if (typeof value === 'number') {
        var prefixedValue = 'P. ' + value;
        sheet.getRange(row, column).setValue(prefixedValue);
      }
    }
  }

  // FreecShot TC 시트
  if (sheetName === 'FreecShot TC') {
    var column = range.getColumn();

    if (column === 20) { // T열(20)에 대한 처리
      var row = range.getRow();
      var value = sheet.getRange(row, column).getValue();

      if (typeof value === 'number') {
        var prefixedValue = 'P. ' + value;
        sheet.getRange(row, column).setValue(prefixedValue);
      }
    }
  }
}
