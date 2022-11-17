var slapform = new Slapform();
slapform.submit({
    form: 'OtEoaDt65',
    data: {
        name: document.getElementById('name').innerHTML,
        email: document.getElementById('email').innerHTML,
        message: document.getElementById('message').innerHTML,
    }
})
.then(function (response) {
    console.log('Success', response);
    alert('Success', response)
})
.catch(function (e) {
    console.error('Fail', e);
    alert('Fail', e)
})
.finally(function () { // This function runs regardless of success or error
    console.log('This always runs!');
  });