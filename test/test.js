const request = require("supertest");
const axios = require("axios");

// Test suite for endpoints
describe("Endpoint tests", () => {
  it("GET / should respond with status code 200", async () => {
    const response = await axios.get("http://localhost:3000/");
    expect(response.status).toBe(200);
  });

  it("GET /hackathons should respond with status code 200", async () => {
    const response = await axios.get("http://localhost:3000/hackathons");
    expect(response.status).toBe(200);
  });

  it("GET /projects should respond with status code 200", async () => {
    const response = await axios.get("http://localhost:3000/projects");
    expect(response.status).toBe(200);
  });
});

