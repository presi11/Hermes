import { gql } from "@apollo/client";

export const ORDERS = gql`
  query Query {
    orders {
      orderId
      created_at
      menus {
        menu_detail {
          menu {
            name
            estimated_time
            unit_price
          }
          quantity
        }
      }
      user
    }
  }
`;

export const HELLO = gql`
  query hello_world {
    hello_world
  }
`;
