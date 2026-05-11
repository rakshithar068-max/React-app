# Use an official Node.js build image to build the app
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies based on the lockfile for reproducible builds
COPY package*.json ./
RUN npm ci

# Copy the rest of the source code and build the app
COPY . .
RUN npm run build

# Use a minimal nginx image to serve the production build
FROM nginx:stable-alpine

# Remove default nginx static assets and replace with app build
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the port nginx listens on
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
