import { formatCurrency } from "../../utils/formatCurrency";
import { Order } from "../../types/Order";
import { Overlay, ModalBody, OrderDetails, Actions } from "./styles";

import closeIcon from '/images/close-icon.svg';

interface OrderModalProps {
    visible: boolean;
    order: Order | null;
    onClose: () => void;
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {
    if(!visible || !order){
        return null
    }

    const total = order.products.reduce((total, { product, quantity }) => {
        return total + (product.price * quantity)
    }, 0)

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
                        {order.products.map(({ id, product, quantity }) => (
                            <div className="item" key={id}>
                                <img 
                                    src="/images/products/marguerita.png" 
                                    alt={product.name}
                                    width="48"
                                    height="24.43"
                                />

                                <span className="quantity">{quantity}x</span>

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
                    <button type="button" className="primary">
                        <span>👩‍🍳</span>
                        <strong>Iniciar Produção</strong>
                    </button>

                    <button type="button" className="secondary">
                        Cancelar pedido
                    </button>
                </Actions>
            </ModalBody>
        </Overlay>
    )
}