import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import config from "../config";
import routes from "../api";
import express, {Application} from "express";
import cookieParser from "cookie-parser";

export default (app: Application) => {
  const __dirname = path.resolve();
  app.use(cors());
  app.use(express.static(path.join(__dirname, 'dist')));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, config.CLIENT_PATH));
  });
  app.use(config.API.PREFIX, routes());
}
