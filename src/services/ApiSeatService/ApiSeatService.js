class ApiSeatService {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }
  async getAllSeatsByRow(totalRow) {
    const url = new URL("seats", this.baseUrl).href;
    const params = new URLSearchParams({ count: totalRow });
    const finalUrl = url + "?" + params.toString();
    const res = await fetch(finalUrl, { method: "GET" });
    const resData = await res.json();
    return resData.data;
  }
  async bookSeat(seatIdList) {
    const url = new URL("submit", this.baseUrl).href;
    const res = await fetch(url, { body: JSON.stringify(seatIdList), method: "POST" });
    const resData = await res.json();
    return resData;
  }
}
export default ApiSeatService;
