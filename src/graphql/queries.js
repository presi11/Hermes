import { gql } from "@apollo/client";

export const STATUSORDERS = gql`
query Query($orderRestaurantName: String!, $orderStatus: OrderStatus) {
  order(restaurantName: $orderRestaurantName, status: $orderStatus) {
      orderId
      created_at
      menus {
        menu {
          name
          estimated_time
          unit_price
        }
        quantity
      }
      user
      status
    }
  }
`;

export const HELLO = gql`
  query hello_world {
    hello_world
  }
`;
