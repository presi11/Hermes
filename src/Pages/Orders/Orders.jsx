import React from 'react'
import { useQuery } from "@apollo/client";
import { ORDERS } from "../../graphql/queries";

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
