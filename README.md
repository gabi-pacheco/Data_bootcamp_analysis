# Analyzing My Data Analytics Bootcamp Journey

## Project Overview
This repository documents my journey through Le Wagon’s Data Analytics bootcamp, focusing on the tools and skills acquired, challenges completed, and overall learning progress. The primary outcome of this project is an interactive dashboard that provides insights into the time invested, challenges tackled, and the key skills and tools developed throughout the bootcamp.

## Objective
The objective of this project is to create a comprehensive dashboard that visualizes and analyzes the data from my bootcamp experience. This [dashboard](https://lookerstudio.google.com/s/s6aC9VzIn0g) serves as a reflection of my learning journey, highlighting key milestones, tools used, and overall progress throughout the bootcamp.

## Data Collection
- **Sources:**
  - Learning structure, challenge descriptions, project outlines, and video lecture durations were manually extracted from the bootcamp’s online platform into a Google Sheets file.
  - Study load data (time spent in live-coding events, self-study, and watching lectures) was manually logged based on calendar events and personal tracking.
  
- **Tools Used for Data Collection:**
  - **Google Sheets:** Used for organizing all collected data.
  - **Python Scripts:** Developed to automate keyword extraction and categorization.

## Data Processing and Cleaning
- **Keyword Extraction:**
  - Keywords were initially extracted and cleaned using Google Sheets, with automation through a custom Google Apps Script.
  
- **Categorization:**
  - The dataset was structured with columns for units, modules, challenge numbers, and challenge text. Keywords were categorized into groups such as relevant keywords, tools, functions, and metrics using Python.

- **Cleaning:**
  - Python scripts were used to split comma-separated lists into individual rows, resulting in multiple DataFrames for different keyword categories.

- **Transformation:**
  - Only two keyword categories—relevant keywords and tools—were used to create pivot tables in Google Sheets, establishing the frequency of each word per challenge, learning module, and unit.

## Dashboard Development
- **Tools Used:** 
  - **Google Looker Studio:** Used to create the interactive dashboard.
  
- **Key Visualizations:**
  - **Modules and Challenges:** Displayed the number of modules and challenges per learning unit.
  - **Time Investment:** Illustrated the time spent on lectures, live-coding, and self-study per unit.
  - **Tools Usage:** Highlighted the top 5 tools featured in challenges per unit.
  - **Keyword Frequency:** Showed the top 5 keywords present in challenges per unit.

## Key Insights
- **Total Learning Hours:** 105.37 hours of video lectures and live-coding sessions.
- **Challenges Completed:** 209
- **Projects Built:** 4
- **Self-Study Hours:** 451
- **Tools Mastered:** 27

## Areas for Improvement
- **Skill Segmentation:** I aim to segment the skills acquired in each challenge by analyzing and categorizing the content. To achieve this, I plan to delve deeper into natural language processing (NLP) techniques.

## Future Enhancements
- **Advanced Analytics:** Integrate predictive analytics to forecast progress based on historical data.
- **Peer Comparisons:** Expand the dashboard to include comparisons with peer performance and collaborative project outcomes.

## Conclusion
This project not only helped document and analyze my bootcamp journey but also significantly strengthened my data analytics and visualization skills. The dashboard is a testament to my dedication to continuous learning and growth in the field of data analytics.

## Timeline
**Part-Time Bootcamp:** January - July 2024  
**Note:** This analysis reflects the content available during this period. Le Wagon’s bootcamp content and syllabus can change at their discretion.

## Explore More
For more technical details on how this project was built, including the specific tools, scripts, and processes used, please visit my [portfolio](https://troopl.com/gabriellapacheco). Your feedback is always welcome as I continue to refine my skills and expand my knowledge in the field of data analytics.

---

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgments
- Le Wagon for providing the structure and content that formed the basis of this analysis.
