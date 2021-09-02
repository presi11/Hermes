import React, { useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE, menus } from "../../graphql/mutations";
import { MDBInput } from "mdb-react-ui-kit";
import { useAuth0 } from "@auth0/auth0-react";

const Lab = () => {
  const { user } = useAuth0();
  const name_restaurant = user["https://graphql-api/user_metadata"];
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    unit_price: "",
    categories: "",
    restaurant: "",
    estimated_time: "",
    picture: "",
  });
  const fileInput = useRef();
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const handleSubmit = (e) => {
    const data = new FormData();
    const {
      current: {
        validity,
        files: [file],
      },
    } = fileInput;
    if (validity.valid) {
      uploadFile({
        variables: { file },
        onCompleted(data) {
        },
      });
    }
    data.append("file", fileInput.current.files[0]);
    e.preventDefault();
  };

  const [CreateMenu] = useMutation(menus, {
    variables: {
      menutInput: {
        name: formState.name,
        description: formState.description,
        unit_price: formState.unit_price,
        categories: [formState.categories],
        restaurant: name_restaurant,
        estimated_time: formState.estimated_time,
        picture: null,
      },
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        CreateMenu();
      }}
    ><div style={{ width: '23rem' }}>
      <MDBInput
        value={formState.name}
        onChange={(e) =>
          setFormState({
            ...formState,
            name: e.target.value,
          })
        }
        label="Nombre"
        id="formControlDefault"
        type="text"
        size="lg"
      />

      <br />
      <MDBInput
        value={formState.description}
        onChange={(e) =>
          setFormState({
            ...formState,
            description: e.target.value,
          })
        }
        label="Descripción"
        id="formControlDefault"
        type="text"
        size="lg"
      />

      <br />

      <MDBInput
        value={formState.unit_price}
        onChange={(e) =>
          setFormState({
            ...formState,
            unit_price: e.target.value,
          })
        }
        label="Precio por unidad"
        id="formControlDefault"
        type="text"
        size="lg"
      />

      <br />

      <MDBInput
        value={formState.categories}
        onChange={(e) =>
          setFormState({
            ...formState,
            categories: e.target.value,
          })
        }
        label="Categorias"
        id="formControlDefault"
        type="text"
        size="lg"
      />

      <br />

      <MDBInput
        value={formState.estimated_time}
        onChange={(e) =>
          setFormState({
            ...formState,
            estimated_time: e.target.value,
          })
        }
        label="Tiempo estimado"
        id="formControlDefault"
        type="text"
        size="lg"
      />

      <br />
        </div>
      <label className="form-label" htmlFor="customFile">
        File input - Drive Integration
      </label>
      <input
        type="file"
        className="form-control"
        id="customFile"
        ref={fileInput}
      />
      <input type="submit" />
    </form>
  );
};

export default Lab;
