# al-Bli
This is al-Bli, a new place to sell/buy second handed items.

## Run locally
Fisrt 

    npm install

To run locally you need to open a mongo local server and change two little things in the next.config.js and in /utils/dbConnection.js.

Since you need secret variables you need to specify a .env file to store the cloudinary config vars and also specify the NEXT_AUTH_URL to `http://localhost:port`

In /utils/dbConnection.js change the process.env.MONDODB_URL to the top variable MONGODB_URI

In next.config.js we need to tell webpack to use .env variables so replace with: 

    const webpack =  require('webpack')
    const { parsed: myEnv } =  require('dotenv').config()
    module.exports  = {
         eslint: {
            ignoreDuringBuilds: true
         },
         webpack(config){
            config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
            return config
         }
    }

Then build the app: 

    npm run build
    npm run start
Or run in development: 

    npm run dev

The app is hosted in vercel at al-bli.vercel.app
