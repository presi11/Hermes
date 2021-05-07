import React from 'react'
import { gql, useQuery } from "@apollo/client";

const ORDERS = gql`
    query USERS {
        orders {
            orderId
            menus {
                menu_detail {
                    menu {
                        name
                    }
                    quantity
                }
            }
        }
    }
`;

const Orders = () => {
    const { loading, error, data } = useQuery(ORDERS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${ error.message }`;

    return (
        data.orders.map((order, index) => {
            return <p key={ index }>{ JSON.stringify(order) }</p>
        })
    )
}

export default Orders;
