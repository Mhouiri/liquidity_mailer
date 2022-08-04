# liquidity_assignment

A microservice implementation using Nest JS and RabbitMQ , this implementation task contains 3 services:
- API Gateway : Creating an app from where we will be exposing a route for sending mail requests via clients:
- RabbitMQ : creating a channel or intermediar for sending mail events to the consumer
- Mail microservic : Creating an actual service that receive the messges from the RabbitMQ and sends them to the end user

# Technology Stack
* NestJs.
* Microservices
* RabbiMQ

# Features
* Expose a route for sending mail requests via clients: http://localhost:3000/mail/send
* Accepting JSON with { from, to, subject, body }
* Calling send mail event in RabbitMQ microservice (with JSON send
details)
* Create channel for sending mail events
* email validation


# Getting Started
* Setup nestJs environment => (https://docs.nestjs.com/first-steps)
* Install RabbiqMQ server => https://www.rabbitmq.com/install-homebrew.html

# Installation
* Clone the repo.
   ```sh
   git clone https://github.com/Mhouiri/liquidity_mailer
   ```
* Access apps.
   ```sh
   cd apps/endpoint
   ```
* Install dependencies.
   ```bash
   $ npm install
   ```

* Running the app

   ```bash
   $ npm run start:dev endpoint
   ```
* Same installation steps will be done for ```mail-sender```

# Client request

* From the client side (Postman) a request will be send with the following data 

```bash
{
    "to" : email receiver,
    "from" : email receiver,
    "subject": subject,
    "text": email body
}
```

# Contact
* mouhcinehouiri@gmail.com


