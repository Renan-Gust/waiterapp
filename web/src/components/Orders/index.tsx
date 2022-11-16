import { OrdersBoard } from '../OrdersBoard'
import { Container } from './styles'

import { Order } from '../../types/Order';

const orders: Order[] = [
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
  ];

export function Orders(){
    return(
        <Container>
            <OrdersBoard
                icon="🕑"
                title="Fila de espera"
                orders={orders}
            />

            <OrdersBoard
                icon="👩‍🍳"
                title="Em preparação"
                orders={[]}
            />

            <OrdersBoard
                icon="✅"
                title="Pronto"
                orders={[]}
            />
        </Container>
    )
}