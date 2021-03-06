import express from "express";
import { deleteVideo, getEditVideo, getUpload, postEditVideo, postUpload, videoDetail} from "../controllers/videoController";
import { onlyPrivate, uploadVideo } from "../middlewares";
import routes from "../routes";


const videoRouter= express.Router();

//upload
videoRouter.get(routes.upload,onlyPrivate,getUpload);
videoRouter.post(routes.upload,onlyPrivate,uploadVideo,postUpload);
//video Detail
videoRouter.get(routes.videoDetail(),videoDetail);
// Edit Video
videoRouter.get(routes.editVideo(),onlyPrivate,getEditVideo);
videoRouter.post(routes.editVideo(),onlyPrivate,postEditVideo);
//delete Video
videoRouter.get(routes.deleteVideo(),onlyPrivate,deleteVideo);


export default videoRouter;