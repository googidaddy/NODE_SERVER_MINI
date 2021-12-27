import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import path from 'path'
dotenv.config( { path: path.join( __dirname, '..', '.env' ) } )

const main = () => {
  const app = express()
  const PORT = process.env.PORT
  app.use( express.static( path.join( __dirname, '..', 'public' ) ) )
  app.use( express.json() )
  app.use( express.urlencoded( { extended: true } ) )

  app.get( '/', ( req: Request, res: Response ) => {
    res.send( 'Hello World!' )
  } )

  app.listen( PORT, () => {
    console.log( `Server on http://localhost:${PORT}` )
  } )
}


main()