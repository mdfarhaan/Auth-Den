# AuthDen

A RESTFul api for user authentication using PassportJs with Google, Github, Twitter, Microsoft, Discord and Spotify using ExpressJs and Typescript.

#### Installation

`npm install`

Build Server
`npm run build`

Run Server
`npm start`

#### Run using Docker

Build Image
`docker build -t auth-den .`

Run Container
`docker run -p 8000:8000 --env-file ./.env --name authden-container auth-den`

#### Deploy to AKS

Using the workflow files build and push the image to Azure Container Registry and deploy the application to Azure Kubernetes Service
