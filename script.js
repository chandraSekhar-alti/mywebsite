let params = {
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  subject: document.getElementById('subject'),
  message: document.getElementById('message')
}

async function userData () {
  params = {
    name: params.name.value,
    email: params.email.value,
    subject: params.subject.value,
    message: params.message.value
  }
}

async function sendEmail () {
  userData()

  if (validateForm()) {
    emailjs
      .send('service_0d46s1k', 'template_pxbks3l', params)
      .then(() => {
        alert('Your email has been sent!');
        document.querySelector('#contact_form').reset();
      })
      .catch(err => {
        console.error('Failed to send email:', err)
        alert('Failed to send email. Please try again later.')
      })
  }
}

function validateForm () {
  const name = document.getElementById('name').value.trim()
  const email = document.getElementById('email').value.trim()
  const subject = document.getElementById('subject').value.trim()
  const message = document.getElementById('message').value.trim()

  // Check for empty fields
  if (!name) {
    alert('Name is required.')
    return false
  }

  if (!email) {
    alert('Email is required.')
    return false
  }

  if (!subject) {
    alert('Subject is required.')
    return false
  }

  if (!message) {
    alert('Message is required.')
    return false
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.')
    return false
  }

  // All validations passed
  return true
}

let submitButton = document.getElementById('submitButton')
submitButton.onclick = function () {
  sendEmail()
}

async function clearInputData () {
  params.name.value = "",
    params.email.value= "",
    params.subject.value= "",
    params.message.value= ""
}
