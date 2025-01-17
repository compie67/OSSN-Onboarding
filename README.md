# Onboarding Component

## Description
The Onboarding component dynamically loads and displays a hover video for menu items (e.g., Groups) using AJAX. The video is fetched dynamically from the server to ensure lightweight performance.

## Installation
1. Copy the `Onboarding` folder to your OSSN installation directory under `components/`.
2. Enable the component in the OSSN Admin Panel.
3. Flush the cache via **Admin Panel → Basic Settings → Cache Settings → Flush Cache**.

## Directory Structure

components/
└── Onboarding/
    ├── actions/
    │   └── ajax_video.php
    ├── css/
    │   └── hover_video.css
    ├── js/
    │   └── hover_video.js
    ├── videos/
    │   └── sidebar_video.mp4
    ├── ossn_com.php
    ├── ossn_com.xml
    └── README.md


## How It Works
1. **AJAX Request**:
   - When hovering over the "Groups" menu item, an AJAX request is made to the `onboarding/ajax_video` action.
   - The server responds with the video HTML.
2. **Dynamic Display**:
   - The video is displayed in a popup container next to the menu item.
   - The popup disappears when the cursor leaves the menu item.

## Notes
- Ensure the `videos/sidebar_video.mp4` file or other exists and is accessible.
- Adjust the `menu-section-groups` selector in `hover_video.js` if needed.

status debug gives me
[17-Jan-2025 12:42:34 CET] Onboarding component initialized.
[17-Jan-2025 12:42:34 CET] Onboarding component initialized.
function onboarding_init() {
    error_log("Onboarding component initialized."); // Debug log
    so the modules is properly activated

setting trigger now is set on the about url (hover_video.js)

