import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin'

  const totalDays = document.getElementById("total-days")
  const dayPrice = document.getElementById("day-price").innerText;

  const totalPriceElement = document.getElementById("total-price");
  const dynamicPrice = () => {
    let dateDiffInMilliseconds = new Date(start_date.value.split(' ')[2]) - new Date(start_date.value.split(' ')[0]);
    let nbDays = dateDiffInMilliseconds / 86_400_000;


    if(start_date.value && end_date.value) {
      totalDays.innerText = nbDays
    }
    if(start_date.value && end_date.value) {
      totalPriceElement.innerText = nbDays * dayPrice
    }
  };
  [start_date, end_date].forEach(date => {
    date.addEventListener("change", (event) => {
      dynamicPrice();
    });
  })


document.addEventListener("turbolinks:load", () => {



   flatpickr('#start_date', {
    altInput: true,
     'plugins': [new rangePlugin({ input: '#end_date'})],

     'locale': {
       'firstDayOfWeek': 1 // start week on Monday
     },
     'dateFormat': "Y-m-d",
     // Si le booking est en pending ou accepté : disable les dates du booking.pokemon

     'disable': object_disable_date()


  });

});



 function object_disable_date() {

  const array = [
     {
       from: '2020-05-12',
       to: '2020-06-12',
     }
   ]
   const current_booking_dates = JSON.parse(document.querySelector('#current-pokemon-reservation-dates').dataset.dates);
   console.log(current_booking_dates)
   if (current_booking_dates.length > 0) {


    current_booking_dates.forEach((booking) => {

       const start_date = booking.split(',')[0].match(/2.{9}/)
       const end_date = booking.split(',')[1].match(/2.{9}/)
      array.push(
         {
          from: start_date.toString(),
           to: end_date.toString(),
         }
      )
    });



  }

  return array;
}

