class ApiSeatService {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }
  async getAllSeatsByRow(totalRow) {
    const url = new URL("seats", this.baseUrl);
    const params = new URLSearchParams({ count: totalRow });
    const finalUrl = url + "?" + params.toString();
    const res = await fetch(finalUrl, { method: "GET" });
    const resData = await res.json();
    return resData.data;
  }
}
export default ApiSeatService;
