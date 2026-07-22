# IDGAF-google-extension

## Description

**ONLY WEB VERSION**

**This extension was created as an opportunity to experiment with Google Chrome extensions and to study their limits and capabilities...**  ~~also sometimes i'm a bit prickly~~

This Google Chrome extension scans the currently displayed Instagram profile and compares the lists of followers and following. It highlights users who are not mutuals, helping you manage your connections more effectively. The extension does **not require any email or password** to run. It uses your **own authenticated session** to make API calls and scrape the follower/following lists, and it only works with public profiles that you have access to.
Enjoy questioning your "friendships" if you find out some of them are not mutual ;)

## Features

- Adds a floating button to the bottom-right corner of the page, independent of Instagram's own layout.
- Scans the currently viewed profile (based on the URL).
- Fetches the lists of followers and following, showing live progress and counts as it goes.
- Displays non-mutual connections in a modal, with a result count on each tab.
- Caches the results after the first scan — reopening the modal doesn't refetch. Use the refresh button to run it again.
- Stop button to cancel an in-progress scan at any time.

## Installation (Unpacked Extension)

1. Download or clone this repository.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable Developer mode (toggle in the top-right corner).
4. Click **Load unpacked** and select the extension's folder.
5. The extension will be installed and ready to use.

## Usage

1. Open Instagram's website ([https://www.instagram.com/](https://www.instagram.com/)) and log in.
2. Navigate to any profile page (e.g., [https://www.instagram.com/username/](https://www.instagram.com/username/)).
3. A floating button will appear in the bottom-right corner of the page.
4. Click it to open a modal and run a scan.
5. The extension fetches the followers and following lists, showing each step's progress, then highlights non-mutuals with a count per tab.
6. Reopening the modal later reuses the cached results. Click the refresh button in the modal header to run the scan again, or the stop button to cancel a scan in progress.

## Notes

- This extension requires you to be logged in to Instagram.
- Instagram's rate limits may affect data fetching speed.
- Only public profiles can be scanned (you must have access to see the follower/following lists).
- Future updates may include additional filtering options and UI improvements.
