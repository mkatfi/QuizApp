FROM node:18

# Set the working directory
WORKDIR /usr/src/quiz-app 

# Copy only the package.json and package-lock.json first
COPY package*.json ./

# Install dependencies (including react-scripts)
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the React development server's port
EXPOSE 3000

# Copy the script.sh to the container and make it executable
COPY script.sh /usr/src/quiz-app/script.sh
RUN chmod +x /usr/src/quiz-app/script.sh

# Start the React app using the script
# CMD ["/usr/src/app/script.sh"]
# Step 8: Start the React app
CMD ["npm", "run", "dev"]
 
