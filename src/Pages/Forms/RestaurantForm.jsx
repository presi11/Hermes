import React, { useState } from "react";
import { MDBInput, MDBBtn} from "mdb-react-ui-kit";
import { RESTAURANT } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";
import CompleteForm from "../../Components/Information/CompleteForm";

const RestaurantForm = () => {
  const [gridModal, setGridModal] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    address: "",
    location_type: "Point",
    location_coordinates_x: "",
    location_coordinates_y: "",
    phone: "",
    schedule_dayOfTheWeek: "",
    schedule_hours_open: "",
    schedule_hours_close: "",
    attributes: "",
  });
  const [CreateRestaurant ,{ data, error }] = useMutation(RESTAURANT, {
    
    variables: {
      restaurantInput: {
        name: formState.name,
        address: formState.address,
        location: {
          type: formState.location_type,
          coordinates: [
            parseFloat(formState.location_coordinates_x),
            parseFloat(formState.location_coordinates_y),
          ],
        },
        phone: formState.phone,
        schedule: [
          {
            dayOfTheWeek: formState.schedule_dayOfTheWeek,
            hours: `${formState.schedule_hours_open}-${formState.schedule_hours_close} `,
          },
        ],
        attributes: [formState.attributes],
      },
    },
  });
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          CreateRestaurant();
          setGridModal(!gridModal);
        }}
      >
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
            value={formState.address}
            onChange={(e) =>
              setFormState({
                ...formState,
                address: e.target.value,
              })
            }
            label="Dirección"
            id="formControlDefault"
            type="text"
          />

          <br />

          <MDBInput
            value={formState.location_coordinates_x}
            onChange={(e) =>
              setFormState({
                ...formState,
                location_coordinates_x: e.target.value,
              })
            }
            label="Coordenadas X"
            id="formControlDefault"
            type="number"
          />

          <br />
          <MDBInput
            value={formState.location_coordinates_y}
            onChange={(e) =>
              setFormState({
                ...formState,
                location_coordinates_y: e.target.value,
              })
            }
            label="Coordenadas Y"
            id="typeNumber"
            type="number"
          />

          <br />
          <MDBInput
            value={formState.phone}
            onChange={(e) =>
              setFormState({
                ...formState,
                phone: e.target.value,
              })
            }
            label="Telefono"
            id="formControlDefault"
            type="text"
          />

          <br />
          <MDBInput
            value={formState.schedule_dayOfTheWeek}
            onChange={(e) =>
              setFormState({
                ...formState,
                schedule_dayOfTheWeek: e.target.value,
              })
            }
            label="Calendario"
            id="formControlDefault"
            type="text"
          />

          <br />
          <label> Hora de apertura</label>
          <MDBInput
            value={formState.schedule_hours_open}
            onChange={(e) =>
              setFormState({
                ...formState,
                schedule_hours_open: e.target.value,
              })
            }
            type="time"
            id="formControlDefault"
          />

          <br />
          <label> Hora de cierre</label>
          <MDBInput
            value={formState.schedule_hours_close}
            onChange={(e) =>
              setFormState({
                ...formState,
                schedule_hours_close: e.target.value,
              })
            }
            id="formControlDefault"
            type="time"
          />

          <br />
          <MDBInput
            value={formState.attributes}
            onChange={(e) =>
              setFormState({
                ...formState,
                attributes: e.target.value,
              })
            }
            label="Atributos"
            id="formControlDefault"
            type="text"
          />
        </div>
        <br/>
        <MDBBtn type="submit" color='primary'>Crear</MDBBtn>
      </form>
      {data && (
        <CompleteForm
          data={data.restaurant}
          gridModal={gridModal}
          setGridModal={setGridModal}
        ></CompleteForm>
      )}
    </div>
  );
};
export default RestaurantForm;
