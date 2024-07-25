# Production stage
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install

# Run the build command to compile the Node.js application
#RUN npm run build

ENV NODE_PORT 8080
CMD [ "npm", "run", "start" ]