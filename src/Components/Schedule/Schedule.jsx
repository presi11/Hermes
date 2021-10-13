import React from "react";
import ScheduleSelector from "react-schedule-selector";

const Schedule = ({scheduleForm}) => {
  const [schedule, setSchedule] = React.useState([]);

  function convertHours(min, max){
    let hour = `${min}:00-${max}:00`
    return hour;
  } 

  scheduleForm = [];
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
  return (
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
  );
};

export default Schedule;
