# Myaamia Word of the Day

This simple script **selects a random word** (and sentence, if applicable) from an *ILDA Dictionary JSON file* and **sends it to a Discord channel via a webhook**.

It was created for several purposes:
- to remember how JavaScript works.
- to learn about Node.js.
- to illustrate the possibilities for ILDA data.

# Setup and Usage

1. Ensure Node.js is installed on your system.
  - This script requires `axios` for HTTP requests:
  ```shell
  npm install axios  
  ```
2. Ensure your *ILDA Dictionary JSON file* is in `data/entries.json`
3. In your favorite plain text editor, open `index.js` and replace `WEBHOOK_URL` with your Discord webhook URL.
4. Test the script & your setup: `node index.js`.
5. Customize it & expand it; the limit is your imagination.
  - Change the greeting.
  - Replace the image, unless you love Rusty.
  - Place it in a `crontab` to schedule it.
  - ...or do whatever you want!

