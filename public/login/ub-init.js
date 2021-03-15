config = {};
config.appId = 'ac1c771e-cae2-4fae-b559-312cd95b5d76';
userbase
  .init({
    appId: config.appId,
  })
  .then(function(session) {

    document.querySelector('#loading').style.display = 'none';

    if (typeof session.user !== 'undefined') {
      document.querySelector('#login').style.display = 'none';
      document.querySelector('#logout').style.display = 'block';
      sessionStorage.setItem('username', session.user.username);
    } else {
      document.querySelector('#logout').style.display = 'none';
      document.querySelector('#login').style.display = 'block';
      sessionStorage.removeItem('username');
    }



  });