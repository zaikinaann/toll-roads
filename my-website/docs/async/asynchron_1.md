---
title: Протокол
sidebar_position: 2
---
# EmailConfirmationService

Описание контракта взаимодействия

```plantuml
asyncapi: 2.0.0
info:
  title: EmailConfirmationService
  version: 1.0.0
  description: Сервис для отправки письма на почту пользователю для подтверждения его email

servers:
  rabbitmq-dev:
    url: localhost:8000
    description: Локальный RabbitMQ сервер
    protocol: amqp
    protocolVersion: "0.9.1"

channels:
  email_confirmation_request:
    publish:
      operationId: emailConfirmationRequestPub
      description: Запрос на отправку письма для подтверждения email
      message:
        $ref: "#/components/messages/email_confirmation_request"
      bindings:
        amqp:
          timestamp: true
          ack: true
    subscribe:
      operationId: emailConfirmationRequestSub
      description: Подписка на запросы для отправки письма для подтверждения email
      message:
        $ref: "#/components/messages/email_confirmation_request"
    bindings:
      amqp:
        is: routingKey
        exchange:
          name: emailExchange
          type: direct
          durable: true

components:
  messages:
    email_confirmation_request:
      payload:
        type: object
        properties:
          user_id:
            type: integer
            format: int64
            description: ID пользователя, который запрашивает подтверждение email
          email:
            type: string
            format: email
            description: Электронная почта пользователя для отправки письма подтверждения
          confirmation_link:
            type: string
            description: Ссылка для подтверждения email (уникальная для каждого запроса)
          requested_at:
            type: string
            format: date-time
            description: Время запроса на подтверждение email
```