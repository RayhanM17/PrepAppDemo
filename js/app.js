var mainNav = document.querySelector('.navbar');
var branding = document.querySelector('.navbar .navbar-brand .img');

window.onscroll = function() {
  windowScroll();
};

function windowScroll() {
  mainNav.classList.toggle("test-1", mainNav.scrollTop > 50 || document.documentElement.scrollTop > 50);
  
  branding.classList.toggle("test-2", branding.scrollTop > 50 || document.documentElement.scrollTop > 50);
}

// Form Validation

const alertPlaceholder = document.getElementById('alert-container');

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
  setTimeout(() => {
    alertPlaceholder.remove(wrapper);
  }, 3000);
}

// Get form
const form = document.getElementById('contact-form');

// Form Blur Event Listeners
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('message').addEventListener('blur', validateMsg);

function validateMsg() {
  const msg = document.getElementById('message');
  const re = /^[\s\S]{2,400}$/;

  if(!re.test(msg.value)) {
    msg.classList.add('is-invalid'); 
  } else {
    msg.classList.remove('is-invalid'); 
  }
}

function validateName() {
  const name = document.getElementById('name');
  const re = /^[\s\S]{2,20}$/;

  if(!re.test(name.value)) {
    name.classList.add('is-invalid'); 
  } else {
    name.classList.remove('is-invalid'); 
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)) {
    email.classList.add('is-invalid');  
  } else {
    email.classList.remove('is-invalid'); 
  }
}

// Submit Event

form.addEventListener('submit', function (e) {

  // Validate
  validateMsg();
  validateEmail();
  validateName();

  const inputs = document.querySelectorAll('input');

  // Loop through all inputs
  let count = 0;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].classList.contains('is-invalid')) 
      count++;
  }

  if (count > 0) {
    e.stopPropagation();
    alert('Please Fill In All fields correctly', 'danger')
  } else {
    alert('Form Submitted', 'success')
    form.submit();
  }
  
  e.preventDefault();
});