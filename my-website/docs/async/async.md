---
title: Описание
sidebar_position: 1
---
# Асинхронное взаимодействие

Рассмотрена обработка запросов на подтверждение электронной почты, которая требуется при регистрации в приложении.

- Взаимодействие реализовано асинхронно ввиду того, что пользователь без подтверждения электронной почты может пользоваться частью функционала приложения; то есть он вводит данные почты, система оповещает его об отправке письма в его электронный ящик, после чего он может закрыть окно с оповещением и приступить к работе. 
Асинхронная система может включать механизмы повторной попытки отправки писем в случае сбоев, например, неполадок с сетевым подключением. Если отправка письма не удалась, сообщение можно оставить в очереди и попробовать повторно отправить его позже, не вмешивая в процесс создания пользователя или другие операции.
Также асинхронный подход позволяет отделить логику подтверждения электронной почты от основной бизнес-логики приложения

- Используется система обмена сообщениями на базе RabbitMQ ввиду относительно простого администрирования, а также отсутствия такого потока событий, который бы не выдержал этот брокер. Также RabbitMQ может быть один раз настроен и не нуждаться в дальнейшем администрировании, так как маловероятны изменения порядка отправки сообщений





