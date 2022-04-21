# Production Build

# ---------------------------
# Stage 1: Build react client
# ---------------------------

# Install alpine node
# See [https://derickbailey.com/2017/03/09/selecting-a-node-js-image-for-docker/] for more information
FROM node:17.3.0-alpine3.12 as client

# Client working directory
RUN mkdir -p /app/client/
WORKDIR /app/client/

# Copy packages
COPY client/package.json .
COPY client/yarn.lock .

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
COPY client/ .

# Build client production files
RUN yarn build


# ----------------------
# Stage 2 : Build Server
# ----------------------

# Install alpine node
FROM node:17.3.0-alpine3.12

# Server working directory 
RUN mkdir -p /app/
WORKDIR /app/

# Copy client build files
COPY --from=client /usr/app/client/build/ ./client/build/

# Change working directory (to keep same relative paths between client/server)
RUN mkdir -p /app/server/
WORKDIR /app/server/

# Copy packages
COPY server/package.json .
COPY server/yarn.lock .

# Install dependencies
RUN yarn

# Copy local files
COPY server/ .

# Build server production files
RUN yarn build

# Clean up dev-dependencies and yarn cache
RUN yarn --production
RUN yarn cache clean

# Expose ports
ENV PORT 3000
EXPOSE 3000

# Start server in production
CMD ["yarn", "start"]
