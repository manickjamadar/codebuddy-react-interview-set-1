import { BASE_URL } from "../config/constants";
import ApiPostService from "./postService/ApiPostService";
const postService = new ApiPostService({ baseUrl: BASE_URL });
export { postService };
