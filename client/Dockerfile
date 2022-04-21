# Dockerfile for client

# Install alpine node
# See [https://derickbailey.com/2017/03/09/selecting-a-node-js-image-for-docker/] for more information
FROM node:17.3.0-alpine3.12

# Create working directory
RUN mkdir -p /app/client/
WORKDIR /app/client/

# Copy packages
COPY package.json .
COPY yarn.lock .

# Install python into temporary directory
# TODO: Figure out what needs this - build time is incredibly slow for some reason
RUN apk add --update --no-cache --virtual .gyp \
    python3 \
    make \
    g++

# Install dependencies
RUN yarn

# Delete temporary directory with python installation
RUN apk del .gyp

# Copy local files
COPY . .

# Expose port
EXPOSE 3000

# Starts the client in development mode
CMD ["yarn","start"]
