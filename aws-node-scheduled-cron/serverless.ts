import { Serverless } from 'serverless/aws';
export const service: Serverless = {
  "service": "scheduled-cron-example",
  "provider": {
    "name": "aws",
    "runtime": "nodejs12.x"
  },
  "functions": {
    "cron": {
      "handler": "handler.run",
      "events": [
        {
          "schedule": "rate(1 minute)"
        }
      ]
    },
    "secondCron": {
      "handler": "handler.run",
      "events": [
        {
          "schedule": "cron(0/2 * ? * MON-FRI *)"
        }
      ]
    }
  }
}

module.exports = service