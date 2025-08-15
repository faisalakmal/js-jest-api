const supertest = require('supertest');

class RequestHelper {
  constructor(baseUrl, defaultHeaders = {}) {
    if (!baseUrl) {
      throw new Error('baseUrl wajib diisi!');
    }
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...defaultHeaders
    };
  }

  _setHeaders(req, headers) {
    req.set({ ...this.defaultHeaders, ...headers });
  }

  get(path, { headers, query } = {}) {
    const req = supertest(this.baseUrl).get(path);
    this._setHeaders(req, headers);
    if (query) req.query(query);
    return req;
  }

  post(path, body = {}, { headers, query } = {}) {
    const req = supertest(this.baseUrl).post(path).send(body);
    this._setHeaders(req, headers);
    if (query) req.query(query);
    return req;
  }

  put(path, body = {}, { headers, query } = {}) {
    const req = supertest(this.baseUrl).put(path).send(body);
    this._setHeaders(req, headers);
    if (query) req.query(query);
    return req;
  }

  patch(path, body = {}, { headers, query } = {}) {
    const req = supertest(this.baseUrl).patch(path).send(body);
    this._setHeaders(req, headers);
    if (query) req.query(query);
    return req;
  }

  delete(path, { headers, query } = {}) {
    const req = supertest(this.baseUrl).delete(path);
    this._setHeaders(req, headers);
    if (query) req.query(query);
    return req;
  }
}

module.exports = RequestHelper;
