const myNotification = new Notification('Title', {
  body : 'Notification from the Renderer process'
})

myNotification.onclick = () =>{
  console.log("notification clicked");
}