function cleanAndCategorizeKeywords() {
  var sheetId = '1NsBjGQzv85KH1SIJwvLiILg_pQIPrrlu6NJupV5oknQ'; // Replace with your sheet ID
  var sheetName = 'Sheet1'; // Replace with your sheet name
  
  try {
    var spreadsheet = SpreadsheetApp.openById(sheetId);
    var sheet = spreadsheet.getSheetByName(sheetName);

    if (!sheet) {
      throw new Error("Sheet with the name '" + sheetName + "' not found.");
    }
    
    var lastRow = sheet.getLastRow();
    
    var stopwords = ["i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now", "kitt", "instructions"];
    
    var keywords = {
      relevant: ["Business Analysis", "Data Model", "Data Sources", "Pivot Tables", "Graphs", "Charts", "KPIs", "Data Cleaning", "Data Transformation", "Implementation", "Google Sheets", "CSV Files", "Media Acquisition", "Online Advertising", "Project Management"],
      lessRelevant: ["Data", "Team", "Create", "Deliverable", "Define", "Specify", "Analysis", "Challenge", "Context", "Summary", "Different"]
    };

    for (var i = 2; i <= lastRow; i++) {  // Start from row 2, assuming row 1 is headers
      var exerciseText = sheet.getRange(i, 2).getValue();  // Get text from Column A
      var cleanedKeywords = getKeywords(exerciseText, stopwords);
      
      // Cleaned keywords in Column B
      sheet.getRange(i, 3).setValue(cleanedKeywords.join(', '));  

      var relevantList = [];
      var lessRelevantList = [];
      
      keywords.relevant.forEach(function(keyword) {
        if (cleanedKeywords.indexOf(keyword.toLowerCase()) !== -1) {
          relevantList.push(keyword);
        }
      });
      
      keywords.lessRelevant.forEach(function(keyword) {
        if (cleanedKeywords.indexOf(keyword.toLowerCase()) !== -1) {
          lessRelevantList.push(keyword);
        }
      });

      // Relevant keywords in Column C
      sheet.getRange(i, 4).setValue(relevantList.join(', '));  
      // Less relevant keywords in Column D
      sheet.getRange(i, 5).setValue(lessRelevantList.join(', '));  
    }
  } catch (error) {
    Logger.log("Error: " + error.message);
  }
}

function getKeywords(text, stopwords) {
  var words = text.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/);
  var keywords = words.filter(function(word) {
    return stopwords.indexOf(word) === -1 && word.length > 2;
  });
  return keywords;
}