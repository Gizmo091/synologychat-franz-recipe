module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let directMessages = 0;
    let indirectMessages = 0;
    document.querySelectorAll('.channel-list-container:not(.x-hide-display) .channel-list-item .unread').forEach(
      (item) => { 
          let match=item.attributes.class.value.match('number-([0-9]+)');
          if (match.length >= 2) {
            directMessages += parseInt(match[1]);
          }
        }
      );
    Franz.setBadge(directMessages, indirectMessages);
  };

  Franz.loop(getMessages);
};
