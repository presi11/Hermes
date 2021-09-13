import { gql } from "@apollo/client";

export const newOrder = gql`
  subscription Subscription($newOrderRestaurant: String) {
    newOrder(restaurant: $newOrderRestaurant) {
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
