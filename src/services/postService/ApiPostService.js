class ApiPostService {
  constructor(options) {
    const { baseUrl } = options;
    this.baseUrl = baseUrl;
  }
  async submitPost(payload) {
    const body = JSON.stringify(payload);
    const url = new URL("submit", this.baseUrl).href;
    const res = await fetch(url, { body, method: "POST" });
    const resData = await res.json();
    return resData;
  }
  async getAllPosts() {
    const url = new URL("posts", this.baseUrl).href;
    const res = await fetch(url, { method: "GET" });
    const resData = await res.json();
    return resData.data;
  }
}
export default ApiPostService;
