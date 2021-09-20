import React, { useRef, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { MENUS } from "../../graphql/mutations";
import { RESTAURANT } from "../../graphql/queries";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useAuth0 } from "@auth0/auth0-react";
import CompleteForm from "../../Components/Information/CompleteForm";

const Menuform = () => {
  const [gridModal, setGridModal] = useState(false);
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
  const [CreateMenu, { data, error }] = useMutation(MENUS);
  console.log(data);
  const { user } = useAuth0();
  const userMetadata = user["https://graphql-api/user_metadata"];

  const {
    loading: loadingRestaurant,
    error: ErrorRestaurant,
    data: dataRestaurant,
  } = useQuery(RESTAURANT, {
    variables: { restaurantRestaurantName: userMetadata.restaurant },
  });
  if (error) return `Error! ${error.message}`;

  const handleSubmit = (e) => {
    const data = new FormData();
    const {
      current: {
        files: [picture],
      },
    } = fileInput;

    CreateMenu({
      variables: {
        menuInput: {
          name: formState.name,
          description: formState.description,
          unit_price: formState.unit_price,
          categories: [formState.categories],
          restaurant: dataRestaurant.restaurant,
          estimated_time: formState.estimated_time,
          picture,
        },
      },
    });
    data.append("file", fileInput.current.files[0]);

    setGridModal(!gridModal);

    e.preventDefault();
  };

  if (loadingRestaurant) return "Loading...";
  if (ErrorRestaurant) return `Error! ${ErrorRestaurant.message}`;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ width: "23rem" }}>
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
        <br />
        <MDBBtn type="submit" color="primary">
          Crear
        </MDBBtn>
      </form>

      {data && (
        <CompleteForm
          data={data.menu}
          gridModal={gridModal}
          setGridModal={setGridModal}
        ></CompleteForm>
      )}
    </>
  );
};

export default Menuform;
