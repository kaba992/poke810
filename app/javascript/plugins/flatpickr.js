import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin'

document.addEventListener("turbolinks:load", () => {
  flatpickr('#start_date', {
    altInput: true,
    'plugins': [new rangePlugin({ input: '#end_date'})]
  });
});
