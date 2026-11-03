# Google Sheets Integration Setup Guide

This guide walks you through setting up Google Sheets integration for the contact form using Google Apps Script.

## Step 1: Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Spellbound Submissions"
4. Rename the first tab to "Contact Form"
5. In the "Contact Form" tab, first row, add these headers (exactly as shown):
   - **Timestamp**
   - **Name**
   - **Email**
   - **Company**
   - **Mobile**
   - **Message**
6. Add a second tab and name it "Newsletter"
7. In the "Newsletter" tab, first row, add these headers (exactly as shown):
   - **Timestamp**
   - **Email**

## Step 2: Add Google Apps Script

1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Delete any existing code in the editor
3. Paste the following code:

```javascript
function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const params = e.parameter;
  const type = params.type || "contact"; // Default to contact form

  // Debug logging
  console.log("Type: " + type);
  console.log("Params: " + JSON.stringify(params));

  let sheet;
  let rowData;

  if (type === "newsletter") {
    // Newsletter subscription
    sheet = ss.getSheetByName("Newsletter");
    if (!sheet) {
      console.log("Newsletter sheet not found");
      return ContentService.createTextOutput(JSON.stringify({status: "error", message: "Newsletter sheet not found"}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    rowData = [
      new Date(),
      params.email
    ];
  } else {
    // Contact form submission
    sheet = ss.getSheetByName("Contact Form");
    if (!sheet) {
      console.log("Contact Form sheet not found");
      return ContentService.createTextOutput(JSON.stringify({status: "error", message: "Contact Form sheet not found"}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    rowData = [
      new Date(),
      params.name,
      params.email,
      params.company,
      params.mobile || "", // Handle empty mobile
      params.message
    ];
  }

  sheet.appendRow(rowData);

  return ContentService.createTextOutput(JSON.stringify({status: "success"}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click the **Save** icon (floppy disk) and name the project (e.g., "Contact Form Handler")

## Step 3: Deploy as Web App

1. Click the blue **Deploy** button in the top right
2. Select **New deployment**
3. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
4. Fill in the deployment settings:
   - **Description**: "Contact Form Handler" (or any description)
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Important**: You may need to authorize the script - click "Review Permissions", select your account, then click "Advanced" > "Go to (script name) (unsafe)" > "Allow"
7. Copy the **Web app URL** (it ends with `/exec`)

**Note**: The function uses `doGet` instead of `doPost` to avoid CORS issues. GET requests work more reliably with Google Apps Script web apps.

## Step 4: Configure Your Project

1. Create a `.env` file in your project root (next to `.env.example`)
2. Add the following line with your web app URL:

```bash
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

3. Replace the URL with the one you copied in Step 3

## Step 5: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out the form and submit
4. Check your Google Sheet's "Contact Form" tab - you should see a new row with the form data and timestamp
5. Go to the homepage and test the newsletter subscription
6. Check your Google Sheet's "Newsletter" tab - you should see a new row with the email and timestamp

## How It Works

The Google Apps Script handles both form types using a `type` parameter:
- **Contact form**: Sends `type=contact` (default) with name, email, company, mobile, message
- **Newsletter form**: Sends `type=newsletter` with only email

Both submissions go to the same Google Sheet but are stored in different tabs for easy separation.

## Troubleshooting

### "Google Script URL not configured" error
- Make sure you created a `.env` file in the project root
- Verify the variable name is exactly `VITE_GOOGLE_SCRIPT_URL`
- Restart your development server after creating the `.env` file

### "Failed to submit form" error
- Verify the web app URL is correct and ends with `/exec`
- Make sure the Google Apps Script was deployed successfully
- Check that the script has proper permissions to access the spreadsheet
- **Important**: After updating the script code, you must redeploy the web app with "New deployment" (not update)
- Make sure you're using the latest deployment URL (it may change after redeployment)

### No data appearing in Google Sheet
- Ensure both tabs have the correct headers:
  - **Contact Form tab**: Timestamp, Name, Email, Company, Mobile, Message
  - **Newsletter tab**: Timestamp, Email
- **Critical**: Verify tab names match EXACTLY (case-sensitive): "Contact Form" and "Newsletter" - no extra spaces
- Check the Google Apps Script deployment logs (in the Apps Script editor, click "Executions")
- Look at the console logs to see which sheet the script is trying to access
- Verify the form field names match the script
- Open your browser's developer console (F12) and check for error messages when submitting
- Make sure you redeployed the script as a **new deployment** after updating the code

### Both forms going to the same tab
- Check the Google Apps Script execution logs (click "Executions" in the editor)
- Look for the "Type:" log message to see what type parameter is being received
- Verify you're using the NEW deployment URL (not the old one)
- Make sure you redeployed as a **new deployment** after updating the script

### Mobile number not saving
- Check the Google Sheet to confirm the "Mobile" column exists
- Verify the column is after "Company" and before "Message"
- Check the execution logs to see if the mobile parameter is being received
- Mobile is optional, so empty values will show as blank cells

### CORS issues
- The script uses `mode: "no-cors"` to avoid CORS issues
- This means we can't read the response, but the submission will still work
- Check your Google Sheet to verify submissions are going through

## Security Notes

- The web app is deployed with "Anyone" access, which means anyone with the URL can submit data
- For production, consider:
  - Adding a simple secret key validation in the script
  - Using a backend server instead of direct Google Apps Script
  - Implementing rate limiting

## Additional Features (Optional)

### Add Secret Key Validation

To add basic security, modify the Google Apps Script:

```javascript
function doGet(e) {
  const SECRET_KEY = "your-secret-key-here"; // Change this to a random string
  const providedKey = e.parameter.key;

  if (providedKey !== SECRET_KEY) {
    return ContentService.createTextOutput(JSON.stringify({status: "error", message: "Unauthorized"}))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const params = e.parameter;
  const type = params.type || "contact"; // Default to contact form

  let sheet;
  let rowData;

  if (type === "newsletter") {
    // Newsletter subscription
    sheet = ss.getSheetByName("Newsletter");
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({status: "error", message: "Newsletter sheet not found"}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    rowData = [
      new Date(),
      params.email
    ];
  } else {
    // Contact form submission
    sheet = ss.getSheetByName("Contact Form");
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({status: "error", message: "Contact Form sheet not found"}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    rowData = [
      new Date(),
      params.name,
      params.email,
      params.company,
      params.mobile,
      params.message
    ];
  }

  sheet.appendRow(rowData);

  return ContentService.createTextOutput(JSON.stringify({status: "success"}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Then update your `.env` file:
```bash
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?key=your-secret-key-here
```

The contact form and newsletter form will automatically append the correct `type` parameter when submitting.

## Important: After Updating the Script

Whenever you update the Google Apps Script code, you MUST:
1. Delete the old deployment (Deploy > Manage deployments > trash icon)
2. Create a NEW deployment (Deploy > New deployment)
3. Copy the NEW URL (it will be different)
4. Update your `.env` file with the new URL
5. Restart your dev server

Using the old deployment URL will run the old code, not your updates.
