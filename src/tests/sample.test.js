// require("dotenv").config();
const RequestHelper = require("../helpers/RequestHelper");

describe("Pengujian API GoRest - Users", () => {
  let requestGoRest, requestReqres;

  beforeAll(() => {
    requestGoRest = new RequestHelper(process.env.BASE_URL_GOREST, {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    });

    requestReqres = new RequestHelper(process.env.BASE_URL_REQRES, {
      "x-api-key": process.env.X_API_KEY,
    });
  });

  it("GET /users - Mengambil daftar user", async () => {
    const res = await requestGoRest
      .get("/users", {
        query: { page: 1, per_page: 3 },
      })
      .expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("POST /login - Login", async () => {
    const res = await requestReqres
      .post("/api/login", {
        username: "eve.holt@reqres.in",
        password: "pistol",
      })
      .expect(200);
    expect(res.body).toHaveProperty("token");
  });
});
