# Bootcamp Keyword Extraction

## Overview
This project involves manually collecting text from bootcamp exercises and processing it to extract and categorize keywords. The processed data is then organized into a Google Sheet using Google Apps Script.

## Data Collection

### Manual Data Collection
1. **Collect Exercise Texts**:
   - Manually gather the exercise texts from your learning platform.
   - Save the collected texts into a CSV file or directly into a Google Sheet.

## Google Apps Script

### `clean_keywords.gs`
This Google Apps Script cleans and classifies keywords from the collected exercise texts and populates them into specific columns in Google Sheets.

#### Usage
1. **Open Google Sheets**:
   - Create a new Google Sheet or use an existing one where you have the collected texts.

2. **Access Apps Script**:
   - Go to Extensions > Apps Script.

3. **Add the Script**:
   - Copy and paste the Google Apps Script code into the editor.

4. **Replace Placeholders**:
   - Replace placeholders with your Google Sheet ID and other details as needed.

5. **Run the Script**:
   - Execute the script to process the data and populate it into the Google Sheet.

### Example Script

```javascript
function cleanAndClassifyKeywords() {
  var sheetId = 'YOUR_SHEET_ID_HERE'; 
  var sheet = SpreadsheetApp.openById(sheetId).getSheetByName('Sheet1'); // Replace 'Sheet1' with your sheet name
  var lastRow = sheet.getLastRow();
  
  var stopwords = ["i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now"];
  var skillsKeywords = ["java", "python", "javascript", "html", "css", "sql"]; // Example skill-related keywords
  var toolsKeywords = ["git", "github", "docker", "kubernetes", "aws", "azure"]; // Example tool-related keywords

  for (var i = 2; i <= lastRow; i++) {  // Assuming the first row is headers
    var exerciseText = sheet.getRange(i, 1).getValue();  // Get exercise text from the first column
    var keywords = getKeywords(exerciseText, stopwords);
    
    var skills = keywords.filter(function(word) {
      return skillsKeywords.includes(word);
    }).join(', ');
    
    var tools = keywords.filter(function(word) {
      return toolsKeywords.includes(word);
    }).join(', ');

    sheet.getRange(i, 2).setValue(keywords.join(', '));  // Set cleaned keywords in the second column
    sheet.getRange(i, 3).setValue(skills);  // Set skills in the third column
    sheet.getRange(i, 4).setValue(tools);  // Set tools in the fourth column
  }
}

function getKeywords(text, stopwords) {
  var words = text.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/);
  var keywords = words.filter(function(word) {
    return stopwords.indexOf(word) === -1 && word.length > 2;
  });
  return keywords;
}
