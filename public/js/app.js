
const cols = [
    {
      name:'coin 1'
    },
    {
      name:'coin 2'
    },
    {
      name:'coin 3'
    },
    {
      name:'coin 4'
    },
    {
      name:'coin 5'
    },
    {
      name:'coin 6'
    }
]

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
      this.$productList = $('#product-list');
      this.$productList.on('click','li.list', this.gotoItem.bind(this));
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
        //window.location.href = "http://localhost:5000/login.html";
    }
  };

  App.prototype.renderList = function() {
      this.$productList = $('#product-list');
      let i=0,
      len = cols.length,
      elem='';
      for(i;i<len;i++){
          elem += `<li class="list" data=${i}>
          <div class="inner" data=${i}>
            <p class="pic" data=${i}>picture</p>
            ${cols[i].name}
          </div></li>`;
      }

    this.$productList.append(elem)
      
  }

  App.prototype.gotoItem = function(event){
    if(event.target.hasAttribute('data')){
      alert(event.target.getAttribute('data'));
    }
  }

  window.app = new App();
  window.app.renderList();