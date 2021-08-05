import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation($file: Upload! $description: String) {
    uploadSingleFile(file: $file, description: $description) {
      filename
    }
  }
`;