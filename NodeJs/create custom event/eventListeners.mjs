import { UserEvents } from "./userEvent.mjs";

const userEvent = new UserEvents()

function saveToDatabase(){
    console.log("Saving post to database")
}

function sendNotifications(){
    console.log('Sending Notifications')
}

function updateTimeLine(){
    console.log('Updating timeline')
}

userEvent.addListener("postCreated", saveToDatabase)
userEvent.addListener("postCreated", sendNotifications)
userEvent.addListener("postCreated", updateTimeLine)

userEvent.createPost('This is my first post')