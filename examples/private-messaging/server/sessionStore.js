/* abstract */ class SessionStore {
  // eslint-disable-next-line no-unused-vars
  findSession(id) { }
  // eslint-disable-next-line no-unused-vars
  saveSession(id, session) { }
  findAllSessions() { }
}

class InMemorySessionStore extends SessionStore {
  constructor() {
    super();
    this.sessions = new Map();
  }

  findSession(id) {
    return this.sessions.get(id);
  }

  saveSession(id, session) {
    this.sessions.set(id, session);
  }

  findAllSessions() {
    return [...this.sessions.values()];
  }
}

module.exports = { InMemorySessionStore }