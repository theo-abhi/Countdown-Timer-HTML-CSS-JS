# Countdown-Timer-HTML-CSS-JS

A simple and customizable countdown timer built using HTML, CSS, and JavaScript.

## Features

- **Clear Visual Display:** Presents the remaining time in an easy-to-read format (Days, Hours, Minutes, Seconds).
- **Customizable Target Date/Time:** Easily set the countdown target directly in the JavaScript.
- **Event Handling:** Triggers an action (e.g., displays a message) when the countdown reaches zero.
- **Basic Styling:** Includes default styling that can be easily modified with CSS.
- **Lightweight and No Dependencies:** Built with vanilla JavaScript, HTML, and CSS, requiring no external libraries.

## How to Use

1.  **Download the Files:** You can either clone this repository or download the `index.html`, `style.css`, and `script.js` files.

2.  **Open `index.html`:** Open the `index.html` file in your web browser.

3.  **Customize the Target Date:** Open the `script.js` file in a text editor. Locate the following line:

    ```javascript
    const targetDate = new Date("YYYY-MM-DDTHH:MM:SS"); // Replace with your target date and time
    ```

    Replace `"YYYY-MM-DDTHH:MM:SS"` with your desired target date and time in the ISO 8601 format (e.g., `"2025-12-25T00:00:00"` for Christmas 2025 at midnight).

4.  **Customize the Completion Message (Optional):** In `script.js`, find the following line:

    ```javascript
    document.querySelector(".countdown").innerHTML =
      "<h1>Countdown has expired!</h1>";
    // Message when countdown ends
    ```

    Modify `"Countdown has expired!"` to the message you want to display when the timer reaches zero.

5.  **Customize Styling (Optional):** Modify the `style.css` file to change the appearance of the timer to match your preferences.

## File Structure

├── index.html # The main HTML file containing the structure
├── style.css # The CSS file for styling
└── script.js # The JavaScript file for the countdown logic
