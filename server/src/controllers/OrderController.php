<?php

namespace src\controllers;

use core\Controller;
use src\models\Order;
use src\models\Product;

class OrderController extends Controller
{
    public function getOrders()
    {
        $orders = Order::select()->get();

        $data["status"] = "success";

        foreach ($orders as $key => $order) {
            $products = json_decode($order["product_id"]);

            $data["data"][] = [
                "id" => $order["id"],
                "status" => $order["status"],
                "table" => $order["table"]
            ];

            foreach($products as $value) {
                $product = Product::select()->where("id", $value->id)->one();

                $data["data"][$key]["products"][] = [
                    "id" => $value->id,
                    "quantity" => $value->quantity,
                    "name" => $product["name"],
                    "image" => $this->getBaseUrl() . '/products' . '/' . $product["image"],
                    "price" => (float)$product["price"]  
                ];
            }
        }

        echo json_encode($data);
    }

    public function changeStatus($args)
    {
        $data = json_decode(file_get_contents('php://input'), true);
        if(isset($data)){
            $status = $data["status"];

            $order = Order::select()
            ->where("id", $args["orderId"])
            ->where("status", "!=", "DONE")
            ->one();

            if ($order) {
                Order::update()->set("status", $status)
                ->where("id", $order["id"])
                ->execute();

                http_response_code(200);
                $result['status'] = "success";
                $result['data'] = [
                    "order" => [
                        "status" => $status
                    ]
                ];

                echo json_encode($result);
                exit;
            } else {
                http_response_code(200);
                $result['status'] = "failed";
                $result['message'] = "Nenhum pedido que está na ESPERA ou em PRODUÇÃO encontrado!";

                echo json_encode($result);
                exit;
            }
        } else{
            $result['status'] = "failed";
            $result['message'] = "Ocorreu algum erro!";

            echo json_encode($result);
            exit;
        }
    }

    public function delete($args){
        $order = Order::select()
        ->where("id", $args["orderId"])
        ->where("status", "!=", "DONE")
        ->one();

        if ($order) {
            Order::delete()->where("id", $order["id"])->execute();

            http_response_code(200);
            $result['status'] = "success";
            $result['message'] = "Pedido deletado com sucesso!";

            echo json_encode($result);
            exit;
        } else {
            http_response_code(200);
            $result['status'] = "failed";
            $result['message'] = "Nenhum pedido encontrado!";

            echo json_encode($result);
            exit;
        }
    }
}
