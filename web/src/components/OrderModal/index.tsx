import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";
import { Actions, ModalBody, OrderDetails, Overlay } from "./styles";

import closeIcon from '/images/close-icon.svg';

interface OrderModalProps {
    visible: boolean;
    order: Order | null;
    onClose: () => void;
    onCancelOrder: () => Promise<void>;
    isLoading: boolean;
    onChangeOrderStatus: () => void;
}

export function OrderModal({ visible, order, onClose, onCancelOrder, isLoading, onChangeOrderStatus }: OrderModalProps) {
    if(!visible || !order){
        return null
    }

    const total = order.products.reduce((total, { price, quantity }) => {
        return total + (price * quantity)
    }, 0)

    console.log(order)
    
    return(
        <Overlay>
            <ModalBody>
                <header onClick={onClose}>
                    <strong>Mesa {order.table}</strong>

                    <button type="button">
                        <img src={closeIcon} alt="ícone de fechar" />
                    </button>
                </header>

                <div className="status-container">
                    <small>Status do Pedido</small>
                    <div>
                        <span>
                            {order.status === "WAITING" && "🕑"}
                            {order.status === "IN_PRODUCTION" && "👩‍🍳"}
                            {order.status === "DONE" && "✅"}
                        </span>
                        <strong>
                            {order.status === "WAITING" && "Fila de espera"}
                            {order.status === "IN_PRODUCTION" && "Em preparação"}
                            {order.status === "DONE" && "Pronto"}
                        </strong>
                    </div>
                </div>
                
                <OrderDetails>
                    <strong>Itens</strong>

                    <div className="order-items">
                        {order.products.map((product) => (
                            <div className="item" key={product.id}>
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    width="48"
                                    height="24.43"
                                />

                                <span className="quantity">{product.quantity}x</span>

                                <div className="product-details">
                                    <strong>{product.name}</strong>
                                    <span>{formatCurrency(product.price)}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="total">
                        <span>Total</span>
                        <strong>{formatCurrency(total)}</strong>
                    </div>
                </OrderDetails>

                <Actions>
                    {order.status !== "DONE" && (
                        <button 
                            type="button" 
                            className="primary" 
                            disabled={isLoading}
                            onClick={onChangeOrderStatus}
                        >
                            <span>
                                {order.status === 'WAITING' && '👩‍🍳'}
                                {order.status === 'IN_PRODUCTION' && '✅'}
                            </span>
                            <strong>
                                {order.status === 'WAITING' && 'Iniciar Produção'}
                                {order.status === 'IN_PRODUCTION' && 'Concluir Pedido'}
                            </strong>
                        </button>
                    )}

                    <button 
                        type="button" 
                        className="secondary" 
                        onClick={onCancelOrder}
                        disabled={isLoading}
                    >
                        Cancelar pedido
                    </button>
                </Actions>
            </ModalBody>
        </Overlay>
    )
}