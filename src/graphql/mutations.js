import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation ($file: Upload!, $description: String) {
    uploadSingleFile(file: $file, description: $description) {
      filename
    }
  }
`;

export const CHANGESTATUS = gql`
  mutation ChangeStatusMutation($changeStatusInput: ChangeStatusInput!) {
    changeStatus(input: $changeStatusInput)
  }
`;
export const RESTAURANT = gql`
  mutation RestaurantMutation($restaurantInput: RestaurantInput!) {
    restaurant(input: $restaurantInput)
  }
`;

export const MENUS = gql`
  mutation Mutation($menuInput: MenuInput!) {
    menu(input: $menuInput)
  }
`;
