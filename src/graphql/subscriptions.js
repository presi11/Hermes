import { gql } from "@apollo/client";

export const newOrder = gql`
  subscription Subscription($newOrderRestaurant: String) {
    newOrder(restaurant: $newOrderRestaurant) {
      orderId
      menus {
        menu_detail {
          menu {
            name
            estimated_time
          }
        }
      }
    }
  }
`;
