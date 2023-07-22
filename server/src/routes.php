<?php

use core\Router;

$router = new Router();

$router->get('/orders', 'OrderController@getOrders');
$router->patch('/order/{orderId}', 'OrderController@changeStatus');
$router->delete('/order/{orderId}', 'OrderController@delete');
