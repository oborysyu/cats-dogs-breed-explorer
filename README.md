# NextJS Cats and Dogs breed explorer App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

**To run project locally** you need to launch these commands (after cloning this repository): 
1. **add .env file** in the root of project; you need to add these variables in this file:
DOGS_API_URL="https://api.thedogapi.com/v1/"\
CATS_API_URL="https://api.thecatapi.com/v1/"\
DOGS_API_KEY="your_api_key"\
CATS_API_KEY="your_api_key"

2. **npm ci** 

3. **npm run dev**

Next, you could open the application in the browser.

**Application** 
This application accesses a remote API to obtain data on dog and cat breeds (by default, there are 10 dog breeds and 10 cat breeds on the page). Clicking on a pet breed card opens a separate tab in the browser with detailed information about this breed. A field for searching for a breed from the loaded list on the page has been added to the main page.

Live demo - https://cats-dogs-breed-explorer.vercel.app/