/**
 * Google Sheets webhook for Attend newsletter sign-ups.
 *
 * Setup:
 * 1. Create a Google Sheet with columns: Email | Source | Subscribed At
 * 2. Extensions → Apps Script → paste this file → Save
 * 3. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the /exec URL into NEWSLETTER_SHEET_WEBHOOK_URL
 */

function appendSubscription(payload) {
  const email = String(payload.email || '')
    .trim()
    .toLowerCase();
  const source = String(payload.source || '').trim();
  const subscribedAt = String(
    payload.subscribedAt || new Date().toISOString(),
  );

  if (!email || email.indexOf('@') === -1) {
    return { success: false, error: 'Invalid email.' };
  }

  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Subscribers') ||
    SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  sheet.appendRow([email, source, subscribedAt]);

  return { success: true };
}

function doGet(e) {
  try {
    const result = appendSubscription({
      email: e.parameter.email,
      source: e.parameter.source,
      subscribedAt: e.parameter.subscribedAt,
    });
    return jsonResponse(result);
  } catch (error) {
    return jsonResponse({ success: false, error: String(error) });
  }
}

function doPost(e) {
  try {
    const raw =
      (e.postData && (e.postData.contents || e.postData.getDataAsString())) ||
      '{}';
    const payload = JSON.parse(raw);
    const result = appendSubscription(payload);
    return jsonResponse(result);
  } catch (error) {
    return jsonResponse({ success: false, error: String(error) });
  }
}

function jsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
