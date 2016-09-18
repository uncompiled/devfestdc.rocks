FROM node:6.5

# Install dependencies
COPY package.json /www/package.json
WORKDIR /www
RUN npm install

# Copy the app
COPY . /www

CMD ["npm", "run", "start"]

EXPOSE 80