import {
  addContent,
  getAllContent,
  getContentByLanguage,
  getContentById,
  deleteContentById,
  home
} from "../controllers/content-controller";

const routes = (app) => {

  app.route("/content").get(getAllContent).post(addContent);

  app
    .route("/content/:contentId")
    .get(getContentById)
    .delete(deleteContentById);

  app.route("/content/language/:language").get(getContentByLanguage);
};

export default routes;
