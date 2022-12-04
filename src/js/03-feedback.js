// {
/* <form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>; */
// }

import throttle from 'lodash.throttle';

const refs = {
  formlEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('.feedback-form input'),
  messageEl: document.querySelector('.feedback-form textarea'),
  //   btnEl: document.querySelector('.feedback-form button'),
};
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

refs.formlEl.addEventListener('input', throttle(saveForm, 1000));
refs.formlEl.addEventListener('submit', onSubmit);

function saveForm(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

  console.log('formData:', formData);
  console.log('localStorage:', JSON.parse(localStorage.getItem(STORAGE_KEY)));
}

function onSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function loadForm() {
  const storegeData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (storegeData) {
    refs.emailEl.value = storegeData.email;
    refs.messageEl.value = storegeData.message;
  }
}

loadForm();
