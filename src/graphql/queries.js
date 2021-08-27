import { gql } from "@apollo/client";

export const ORDERS = gql`
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

export const HELLO = gql`
    query hello_world {
        hello_world
    }
`;