import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin'



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

    console.log(current_booking_dates.length)

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
  console.log(array)
  return array
}
