#  User Management Table

Description: 

A React and TypeScript single-page app that fetches and displays user data from a mocked API. It uses React Hooks and a Context API for state management, featuring a sortable table with pagination. Includes unit tests and offers an optional aesthetically pleasing UI design.

# Table of Contents

- [Pre Requisites](#pre-requisites)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [API Documentation](#api-documentation)
- [Screenshot/Demo/URL](#screenshot)

# Pre Requisites

- Frontend: React, Context API, Ant Design
- Testing: Jest

# Folder Structure
![FS](https://github.com/Mirza-Hassan/React_UserTable_Task/assets/17096257/88e2082f-d218-48d7-bac6-c5a538be5612)

# Setup Instructions

1. Clone the repository:
```
git clone https://github.com/Mirza-Hassan/React_UserTable_Task
```
Navigate to the project directory:
```
cd frontend
```
2. Run the following command to install the required dependencies:
```
npm install
```
3. Run the project:
```
npm start
```

# Testing

1. Run your tests using the command:
```
npm test
```
2. If Jest is not already installed globally, You can install it using:
```
npm install --save-dev jest
```

# API Documentation

This documentation outlines two APIs:

**OpenWeatherMap API**
    - **Fetch Weather by City:**
        - **URL**: `http://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric`
        - **Method**: GET
        - **Parameters**: 
            - `city` (string, required): The city name for weather data.
            - `apiKey` (string, required): API key for OpenWeatherMap.
        - **Response**: Weather details for the specified city in metric units.

# Screenshot
![SS1](https://github.com/Mirza-Hassan/Angular_Project_List_Task/assets/17096257/5785ecbc-56c2-4437-a6e5-5cd4247d545d)

# Demo
[screencast-bpconcjcammlapcogcnnelfmaeghhagj-2023.09.21-23_18_53.webm](https://github.com/Mirza-Hassan/Angular_Project_List_Task/assets/17096257/56be3228-5508-44d0-b0ec-b6866b275587)

### Live URL 
https://projectlistings.surge.sh
