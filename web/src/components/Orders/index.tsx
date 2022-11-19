import { useEffect, useState } from 'react';

import { Order } from '../../types/Order';
import { api } from '../../utils/api';
import { OrdersBoard } from '../OrdersBoard';

import { Container } from './styles';


const ordersPre: Order[] = [
    {
      'id': 1,
      'table': '123',
      'status': 'WAITING',
      'products': [
        {
          'product': {
            'name': 'Pizza quatro queijos',
            'imagePath': '1668472896991-quatro-queijos.png',
            'price': 40,
          },
          'quantity': 3,
          'id': 1
        },
        {
          'product': {
            'name': 'Coca cola',
            'imagePath': '1668473462705-coca-cola.png',
            'price': 7,
          },
          'quantity': 2,
          'id': 2
        }
      ],
    }
]

export function Orders(){
  const [orders, setOrders] = useState<Order[]>(ordersPre)

  useEffect(() => {
    api.get('/orders').then(({ data }) => {
      // setOrders(data)
    })
  }, [])

  const waiting = orders.filter((order) => order.status === 'WAITING')
  const inProduction = orders.filter((order) => order.status === 'IN_PRODUCTION')
  const done = orders.filter((order) => order.status === 'DONE')

  function handleCancelOrder(orderId: number){
    setOrders((prevState) => prevState.filter(order => order.id !== orderId))
  }

  function handleOrderStatusChange(orderId: number, status: Order['status']) {
    setOrders((prevState) => prevState.map((order) => (
      order.id === orderId ? { ...order, status } : order
    )))
  }

    return(
        <Container>
            <OrdersBoard
                icon="🕑"
                title="Fila de espera"
                orders={waiting}
                onCancelOrder={handleCancelOrder}
                onChangeOrderStatus={handleOrderStatusChange}
            />

            <OrdersBoard
                icon="👩‍🍳"
                title="Em preparação"
                orders={inProduction}
                onCancelOrder={handleCancelOrder}
                onChangeOrderStatus={handleOrderStatusChange}
            />

            <OrdersBoard
                icon="✅"
                title="Pronto"
                orders={done}
                onCancelOrder={handleCancelOrder}
                onChangeOrderStatus={handleOrderStatusChange}
            />
        </Container>
    )
}