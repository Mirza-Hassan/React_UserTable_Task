#  User Management Table

Description: 

A React and TypeScript single-page app that fetches and displays user data from a mocked API. It uses React Hooks and a Context API for state management, featuring a sortable table with pagination. Includes unit tests and offers an optional aesthetically pleasing UI design.

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
cd Top-users-assignment
```
2. Run the following command to install the required dependencies:
```
npm install
```
2. Compile TypeScript (if applicable):
```
tsc getTopUsers.ts
```
3. Run the project:
```
node getTopUsers.js
```

# Testing

1. Run your tests using the command:
```
npx jest
```
or If you want to run specific test files, you can specify the file path:
```
npx jest getTopUsers.test.js
```
2. If Jest is not already installed globally, You can install it using:
```
npm install --save-dev jest
```

![ts](https://github.com/Mirza-Hassan/Top-users-assignment/assets/17096257/ba50b830-52ce-48f4-92e8-a89316c16a35)

# API Documentation

This documentation outlines two APIs:

1. **OpenWeatherMap API**
    - **Fetch Weather by City:**
        - **URL**: `http://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric`
        - **Method**: GET
        - **Parameters**: 
            - `city` (string, required): The city name for weather data.
            - `apiKey` (string, required): API key for OpenWeatherMap.
        - **Response**: Weather details for the specified city in metric units.

    - **Fetch Random Weather:**
        - **URL**: `http://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={apiKey}&units=metric`
        - **Method**: GET
        - **Parameters**:
            - `latitude` (number, required): Latitude coordinate.
            - `longitude` (number, required): Longitude coordinate.
            - `apiKey` (string, required): API key for OpenWeatherMap.
        - **Response**: Weather data for the specified location in metric units.

2. **Chuck Norris Jokes API**
    - **Fetch Random Chuck Norris Joke:**
        - **URL**: `https://api.chucknorris.io/jokes/random`
        - **Method**: GET
        - **Response**: A random Chuck Norris joke in plain text.

**Note**: Replace `YOUR_OPENWEATHERMAP_API_KEY` with your actual OpenWeatherMap API key when making requests to the OpenWeatherMap API.


# Screenshot
![SS1](https://github.com/Mirza-Hassan/Angular_Project_List_Task/assets/17096257/5785ecbc-56c2-4437-a6e5-5cd4247d545d)
![ss2](https://github.com/Mirza-Hassan/Angular_Project_List_Task/assets/17096257/85a26cd1-0a64-4407-b208-2a432b442d56)

# Application Flow
[screencast-bpconcjcammlapcogcnnelfmaeghhagj-2023.09.21-23_18_53.webm](https://github.com/Mirza-Hassan/Angular_Project_List_Task/assets/17096257/56be3228-5508-44d0-b0ec-b6866b275587)

### Live URL 
https://projectlistings.surge.sh
