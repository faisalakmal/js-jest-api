require("dotenv").config();
const RequestHelper = require("../helpers/request");

describe("Pengujian API GoRest - Users", () => {
  let requestGoRest, requestReqres;

  beforeAll(() => {
    // Buat instance helper dengan baseUrl dari .env
    requestGoRest = new RequestHelper(process.env.BASE_URL_GOREST, {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    });

    requestReqres = new RequestHelper(process.env.BASE_URL_REQRES, {
      "x-api-key": process.env.X_API_KEY,
    });
  });

  test("GET /users - Mengambil daftar user", async () => {
    const res = await requestGoRest
      .get("/users", {
        query: { page: 1, per_page: 3 },
      })
      .expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test("POST /login - Login", async () => {
    const res = await requestReqres
      .post("/api/login", {
        username: "eve.holt@reqres.in",
        password: "pistol",
      })
      .expect(200);
  });
});
