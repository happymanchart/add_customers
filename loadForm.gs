function loadMainForm() {
  
  const htmlServ = HtmlService.createTemplateFromFile("main");
  const html = htmlServ.evaluate();
  html.setWidth(850).setHeight(600);
  const ui = SpreadsheetApp.getUi();
  ui.showModalDialog(html, "ฟอร์มบันทึกข้อมูลลูกค้า");
  
}


function createMenu_() {

  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu("Baby Grand");
  menu.addItem("ฟอร์มบันทึกข้อมูล", "loadMainForm");
  menu.addToUi();

}

function onOpen() {

  createMenu_();

}
