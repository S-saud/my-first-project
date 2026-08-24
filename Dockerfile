# 1. Node.js Base Image
FROM node:18-alpine

# 2. Container me working directory set karein
WORKDIR /usr/src/app

# 3. Dependencies ki list copy karein
COPY package*.json ./

# 4. Packages install karein
RUN npm install

# 5. Baaki sabhi project files copy karein
COPY . .

# 6. Port expose karein (Jahan aapki app chalti hai)
EXPOSE 5000

# 7. Application start karne ki command
CMD ["npm", "start"]