# First stage: Build the application
FROM node:14-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Second stage: Serve the built application
FROM node:14-alpine

WORKDIR /app

# Copy the built application from the build stage
COPY --from=build /app/dist ./dist

# Install serve globally to serve the static files
RUN npm install -g serve

# Command to run the server
CMD ["serve", "-s", "dist", "-l", "3000"]