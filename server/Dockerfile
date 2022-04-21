#  Dockerfile for the server

# Install alpine node
# See [https://derickbailey.com/2017/03/09/selecting-a-node-js-image-for-docker/] for more information
FROM node:17.3.0-alpine3.12

# Create working directory
RUN mkdir -p /app/server/
WORKDIR /app/server/

# Copy packages
COPY package.json .
COPY yarn.lock .

# Install Dependencies
RUN yarn

# Copy local files
COPY . .

# Expose port
EXPOSE 3001

# Start the server in development mode
CMD ["yarn","start:dev"]
