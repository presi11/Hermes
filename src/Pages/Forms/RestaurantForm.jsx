import React, { useState } from "react";
import { MDBInput, MDBBtn} from "mdb-react-ui-kit";
import { RESTAURANT } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";
import CompleteForm from "../../Components/Information/CompleteForm";
import Multiselect from 'multiselect-react-dropdown';
import { Container,Button, Form, FormGroup, Label, Input, FormText, Card } from 'reactstrap';

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
        attributes: formState.attributes,
      },
    },
  });
  if (error) return `Error! ${error.message}`;
  const state = {
    options: [{disValue: 'Parqueadero', value: 'PARKING'},
              {disValue: 'Servicio en restaurante', value:'DINE_IN'},
              {disValue: 'Para llevar', value: 'TAKEAWAY'},
              {disValue: 'Entrega sin contacto', value: 'NO_CONTACT_DELIVERY'},
              {disValue: 'Entrega a domicilio', value: 'DELIVERY'},
              {disValue: 'WiFi', value: 'WIFI'},
              {disValue: 'Musica', value: 'MUSIC'}]
  };
  return (
    <div>
      <Container>
        <Card>
          <Form
            onSubmit={(e) => {
              e.preventDefault();

              CreateRestaurant();
              setGridModal(!gridModal);
            }}
          >
              <FormGroup>
                  <Label>Nombre</Label>
                  <Input
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      name: e.target.value,
                    })
                  }
                  
                  id="formControlDefault"
                  type="text"
                />
              </FormGroup>

              <FormGroup>
                <Label>Direccion</Label>
                <Input
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
              </FormGroup>

              <FormGroup>
                <Label>Cordenadas en X</Label>
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
              </FormGroup>
              <FormGroup>
                <Label>Coordenas en Y </Label>
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
              </FormGroup>
              
              <FormGroup>
                <Label>Telefono</Label>
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
              </FormGroup>

              <FormGroup>
                <Label>Calendario</Label>
                <MDBInput
                value={formState.schedule_dayOfTheWeek}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    schedule_dayOfTheWeek: e.target.value,
                  })
                }
                id="formControlDefault"
                type="text"
              />
              </FormGroup>
              
              <FormGroup>
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
              </FormGroup>
              
              <FormGroup>
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
              </FormGroup>
              
              <FormGroup>
                <Label>Atributos</Label>
                <Multiselect
                options={state.options}
                displayValue="disValue"
                value={formState.attributes}
                onSelect={(object) =>
                  setFormState({
                    ...formState,
                    attributes: object.map(attributesObject=>
                    attributesObject.value),
                    })
                }
                />
              </FormGroup>
                <MDBBtn type="submit" color='primary'>Crear</MDBBtn>
              <FormGroup>
              </FormGroup>   
          </Form>
        </Card>
      </Container>
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
