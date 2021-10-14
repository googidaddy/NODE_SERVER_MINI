import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
dotenv.config( { path: path.join( __dirname, '..', '.env' ) } )

const main = () => {
  const app = express()
  const PORT = process.env.PORT
  app.listen( PORT, () => {
    console.log( `Server on http://localhost:${PORT}` )
  } )
}


main()