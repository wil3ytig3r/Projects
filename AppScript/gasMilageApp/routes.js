function view() {
  page = HtmlService.createTemplateFromFile("index"); 
  return page.evaluate(); 
}
