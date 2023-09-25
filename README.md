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

![TT](https://github.com/Mirza-Hassan/React_UserTable_Task/assets/17096257/81434332-12ee-49e0-bfa1-ddabe1002343)

# API Documentation

This documentation outlines APIs:

- **Users API**
    - **Fetch User Information:**
        - **URL**: `https://private-e7f67d-users324.apiary-mock.com/users`
        - **Method**: GET
        - **Parameters**: 
            - `id` (integer): The unique identifier for the user.
            - `name` (string): The full name of the user.
            - `email` (string): The email address associated with the user.
            - `birthdate` (string): The date of birth of the user in the format YYYY-MM-DD.
            - `age` (integer): The age of the user.
        - **Response**: User details.            
            ```json
            {
                "id": 1,
                "name": "John Doe",
                "email": "johndoe@example.com",
                "birthdate": "1990-05-15",
                "age": 31
            }

# Screenshot
![SS1](https://github.com/Mirza-Hassan/React_UserTable_Task/assets/17096257/1c50d8fb-8bf3-4a56-9f20-75bfe8c3dc71)

# Demo
[Demo.webm](https://github.com/Mirza-Hassan/React_UserTable_Task/assets/17096257/34b84540-025f-454d-a769-abda51319c68)

### Live URL 
https://projectlistings.surge.sh
