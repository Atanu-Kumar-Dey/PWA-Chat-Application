
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

This application is also deployed to render.com[&nbsp;Live Demo](https://pwa-chat-application.onrender.com)


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

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Troubleshoot 

The provided API uses HTTP, which is not secure. When the app is deployed on a website using HTTPS, a mixed content error occurs because the browser blocks insecure requests. Although the assignment suggests opening the API link in a new tab and allowing access, it doesn't resolve the mixed content issue. In the deployed link, the API request fails due to the same error.
