import React, { useState } from "react";
import { MDBInput, MDBBtn} from "mdb-react-ui-kit";
import { RESTAURANT } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";
import CompleteForm from "../../Components/Information/CompleteForm";
import ScheduleSelector from "react-schedule-selector";
import Multiselect from 'multiselect-react-dropdown';

const RestaurantForm = () => {
  const [gridModal, setGridModal] = useState(false);
  const [schedule, setSchedule] = React.useState([]);
 
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
  const scheduleForm = [];
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
        schedule: scheduleForm, 
        attributes: [formState.attributes],
      },
    },
  });
  if (error) return `Error! ${error.message}`;

 

  function convertHours(min, max){
    let hour = `${min}:00-${max}:00`
    return hour;
  } 


  const week = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    0: [],
  };


  schedule.map((x) => {
    let day = x.getDay();
    let hours = x.getHours();
    week[day].push(hours);
  });


  Object.entries(week).map((x) => {
    if (x[1].length > 0) {
      let max = Math.max.apply(null, x[1]);
      let min = Math.min.apply(null, x[1]);
      let dayWeek;
      let hoursRestaurant;
      if(x[0] === "0"){
        dayWeek = "DOMINGO";
        hoursRestaurant = convertHours(min, max);
      }
      if(x[0] === "1"){
        dayWeek = "LUNES";
        hoursRestaurant = convertHours(min, max);
      }
      if(x[0] === "2"){
        dayWeek = "MARTES";
        hoursRestaurant = convertHours(min, max);
      }
      if(x[0] === "3"){
        dayWeek = "MIERCOLES";
        hoursRestaurant = convertHours(min, max);
      }
      if(x[0] === "4"){
        dayWeek = "JUEVES";
        hoursRestaurant = convertHours(min, max);
      }
      if(x[0] === "5"){
        dayWeek = "VIERNES";
        hoursRestaurant = convertHours(min, max);
      }
      if(x[0] === "6"){
        dayWeek = "SABADO";
        hoursRestaurant = convertHours(min, max);
      }

/*       switch (x[0]) {
        case 0:
           dayWeek = "DOMINGO";
           hoursRestaurant = convertHours(min, max);
          break;
        case 1:

           dayWeek = "LUNES";
           hoursRestaurant = convertHours(min, max);
          break;
        case 2:
           dayWeek = "MARTES";
           hoursRestaurant = convertHours(min, max);
          break;
        case 3:
           dayWeek = "MIERCOLES";
           hoursRestaurant = convertHours(min, max);
          break;
        case 4:
           dayWeek = "JUEVES";
           hoursRestaurant = convertHours(min, max);
          break;
        case 5:
           dayWeek = "VIERNES";
           hoursRestaurant = convertHours(min, max);
          break;
        case 6:
           dayWeek = "SABADO";
           hoursRestaurant = convertHours(min, max);
          break;

        default:
        // code block 
      }  */

      const day = {
        dayOfTheWeek: dayWeek,
        hours: hoursRestaurant,
      };
      scheduleForm.push(day);

    }
  });


  const startDate = new Date("2021-08-23T14:27:01.444Z");

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setGridModal(!gridModal);
          CreateRestaurant();
         
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
          <ScheduleSelector
      selection={schedule}
      numDays={7}
      minTime={8}
      dateFormat="dddd"
      startDate={startDate}
      maxTime={23}
      hourlyChunks={1}
      onChange={setSchedule}
    />

          <br />
          <Multiselect
          options={state.options}
          displayValue="disValue"
          value={formState.attributes}
          onSelect={(object) =>
            setFormState({
              ...formState,
              categories: object.map(attributesObject=>
              attributesObject.value),
              })
          }
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
