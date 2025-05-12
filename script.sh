#!/bin/bash

# Define the app name (can be customized)
APP_NAME="Quiz-app"

# Step 1: Check if Node.js and npm are installed
if ! command -v node &> /dev/null
then
    echo "Node.js could not be found. Please install Node.js first."
    exit 1
fi

if ! command -v npm &> /dev/null
then
    echo "npm could not be found. Please install npm first."
    exit 1
fi

# Step 2: Create a new React app using create-react-app (if it doesn't exist)
if [ ! -d "$APP_NAME" ]; then
    echo "Creating a new React app: $APP_NAME"
    npx create-react-app $APP_NAME
else
    echo "React app '$APP_NAME' already exists. Skipping creation."
fi

# Step 3: Navigate to the app directory
cd $APP_NAME

# Step 4: Install the required dependencies
echo "Installing dependencies..."
npm install

# Step 5: Start the React app
echo "Starting the React app..."
npm run dev
