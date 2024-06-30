import { BASE_URL } from "../config/constant";
import ApiSeatService from "./ApiSeatService/ApiSeatService";

const seatService = new ApiSeatService({ baseUrl: BASE_URL });
export { seatService };
