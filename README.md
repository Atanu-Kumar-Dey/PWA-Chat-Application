
# Chat Screen Progressive Web Application (PWA)

This is a progressive web application (PWA) developed using ReactJS that simulates a chat screen for both Android and iOS devices. The application fetches data from an API to display chat messages and implements lazy loading for new chats as the user scrolls.


## Features

- Real-time chat interface
- Lazy loading of new chats with Intersection Obsever(custom skeleton loader)
- Responsive design for Android and iOS devices
- Single-page application (SPA) architecture
- Built with ReactJS and Tailwind CSS
- Custom offline fallback page for cross platform



## Run Locally

Clone the project

```sh
  git clone https://github.com/Atanu-Kumar-Dey/PWA-Chat-Application
```

Go to the project directory

```sh
  cd PWA-Chat-Application
```

Install dependencies

```sh
  npm install
```

Start the server

```sh
  npm run start
```


## Deployment

This application is also deployed to Vercel[&nbsp;Live Demo](https://pwa-chat-application.vercel.app/)
<br/>
If it does not work then use this[&nbsp;Link](https://pwa-chat-application.onrender.com)


## API Reference

The application fetches chat data from the following API:

```http
  http://3.111.128.67/assignment/chat?page=0

```
  The `page` parameter indicates the page number for lazy loading. Subsequent hits to the API should increment the page number.


## Tech Stack

**Client:** React,Interesction Observer,TailwindCSS

**Design:** Figma


## Screenshots

<img width="181" alt="Screenshot 2023-05-25 223030" src="https://github.com/Atanu-Kumar-Dey/College-Hackathon-website-frontend/assets/83961023/5e906691-663f-4976-828e-3af445774d47">
<img width="181" alt="Screenshot 2023-05-25 223015" src="https://github.com/Atanu-Kumar-Dey/College-Hackathon-website-frontend/assets/83961023/05fbe415-baaf-4a4a-a754-1be9f7ecd2e5">
<img width="181" alt="Screenshot 2023-05-25 223231" src="https://github.com/Atanu-Kumar-Dey/College-Hackathon-website-frontend/assets/83961023/4ef2bbc5-5f6c-46f4-9394-71330d5a95d8">
<img width="181" alt="Screenshot 2023-05-25 223249" src="https://github.com/Atanu-Kumar-Dey/College-Hackathon-website-frontend/assets/83961023/1056d87f-6c62-4438-ad36-4dfb47354a8b">
<img width="336" alt="Screenshot 2023-05-25 223601" src="https://github.com/Atanu-Kumar-Dey/College-Hackathon-website-frontend/assets/83961023/5d0bc514-372c-41e4-a848-481fae6cd523">
<img width="960" alt="Screenshot 2023-05-25 222927" src="https://github.com/Atanu-Kumar-Dey/College-Hackathon-website-frontend/assets/83961023/adebdc36-3371-4d29-ac8f-3e408ef2abee">

## Troubleshoot 

The provided API uses HTTP, which is not secure. When the app is deployed on a website using HTTPS, a mixed content error occurs because the browser blocks insecure requests. Although the assignment suggests opening the API link in a new tab and allowing access, it doesn't resolve the mixed content issue. In the deployed link, the API request fails due to the same error.
