import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation ($file: Upload!, $description: String) {
    uploadSingleFile(file: $file, description: $description) {
      filename
    }
  }
`;

export const restaurant = gql`
  mutation RestaurantMutation($restaurantInput: RestaurantInput!) {
    restaurant(input: $restaurantInput)
  }
`;

export const menus = gql`
  mutation MenuMutation($menuInput: MenuInput!) {
    menu(input: $menuInput)
  }
`;
