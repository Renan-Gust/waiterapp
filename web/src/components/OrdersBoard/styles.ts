import styled from 'styled-components';

export const Board = styled.div`
    padding: 16px;
    border: 1px solid #CCCCCC66;
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    > header{
        padding: 8px;
        font-size: 14px;
        display: flex;
        gap: 8px;
        height: 100%;
    }
`;

export const OrdersContainer = styled.div`
    width: 100%;
    margin-top: 24px;
    display: flex;
    flex-direction: column;

    button{
        background-color: #ffff;
        border: 1px solid #CCCCCC66;
        border-radius: 8px;
        height: 128px;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4px;

        strong{
            font-weight: 500;
        }

        span{
            color: #666;
            font-size: 14px;
        }

        & + button{
            margin-top: 24px;
        }
    }
`;