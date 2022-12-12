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
  // emailEl: document.querySelector('.feedback-form input'),
  // messageEl: document.querySelector('.feedback-form textarea'),
};
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

refs.formlEl.addEventListener('input', throttle(saveForm, 1000));
refs.formlEl.addEventListener('submit', onSubmit);

function saveForm(e) {
  const { name, value } = e.target;
  formData[name] = value;

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
    const { email, message } = refs.formlEl.elements;
    console.log({ email, message });
    email.value = storegeData.email || '';
    message.value = storegeData.message || '';
    formData = storegeData;
  }
}

loadForm();
