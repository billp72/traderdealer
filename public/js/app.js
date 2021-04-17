function App() {
    $(function() {
      /*this.$signInButton = $('#demo-sign-in-button');
      this.$signOutButton = $('#demo-sign-out-button');
      this.$messageTextarea = $('#demo-message');
      this.$createMessageButton = $('#demo-create-message');
      this.$createMessageResult = $('#demo-create-message-result');
      this.$messageListButtons = $('.message-list-button');
      this.$messageList = $('#demo-message-list');
      this.$messageDetails = $('#demo-message-details');
  
      this.$signInButton.on('click', this.signIn.bind(this));
      this.$signOutButton.on('click', this.signOut.bind(this));
      this.$createMessageButton.on('click', this.createMessage.bind(this));
      this.$messageListButtons.on('click', this.listMessages.bind(this));*/
      firebase.auth().onAuthStateChanged(this.onAuthStateChanged.bind(this));
    }.bind(this));
  }

  App.prototype.onAuthStateChanged = function(user) {
    if (user) {
      // If we have a user, simulate a click to get all their messages.
      // Material Design Lite will create a <span> child that we'll expect to be clicked
      //$('#message-list-button-all > span').click();
      //this.$messageTextarea.removeAttr('disabled');
      //this.$createMessageButton.removeAttr('disabled');
    } else {
        window.location.href = "http://localhost:5000/login.html";
    }
  };

  //window.app = new App();