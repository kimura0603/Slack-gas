function fillThreadTsForMessageWithoutReply(sheet) {
  console.log('call func fillThreadTsForMessageWithoutReply');
    sheet.getRange("E2:E" + sheet.getLastRow() + 1).copyTo(sheet.getRange("D2"), {contentsOnly:true});
}


function sortAllInSheet(sheet, sortColumn){
  sheet.getRange(2, 1, sheet.getLastRow()-1, sheet.getLastColumn()).sort(sortColumn);
}
