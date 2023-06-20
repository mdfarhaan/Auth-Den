FROM node:14
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 8000
CMD ["npm" , "start"]
