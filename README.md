 <h1 align="center">
    AuthDen
</h1>

A RESTFul api for user authentication using PassportJs with Google, Github, Twitter, Microsoft, Discord and Spotify using ExpressJs and Typescript.

# Installation

`npm install`

Build Server

`npm run build`

Run Server

`npm start`

# Run using Docker

Build Image

`docker build -t auth-den .`

Run Container

`docker run -p 8000:8000 --env-file ./.env --name authden-container auth-den`

# CICD Pipeline
Build the image and push to Azure Container Registry and Deploy the application to Azure Kubernetes Service using Github Actions 

![api-arch](https://github.com/mdfarhaan/Auth-Den/assets/60516398/020b3db5-ddfb-4a0a-9155-20a1db455de2)


