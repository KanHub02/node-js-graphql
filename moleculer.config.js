module.exports = {
  namespace: "graphql-project",
  nodeID: "node-1",
  logger: true,
  logLevel: "info",
  transporter: "Redis", // Можно заменить на NATS, Redis и т.д.
  requestTimeout: 5000,
  retryPolicy: {
    enabled: true,
    retries: 5,
    delay: 100,
    maxDelay: 1000,
    factor: 2,
    check: err => err && !err.critical
  },
  circuitBreaker: {
    enabled: true,
    threshold: 0.5,
    windowTime: 60,
    minRequest: 10
  }
};