import "./NotificationOkay.css"
import {useState } from 'react';

type NotificationProps = {
    state: string
}

 function NotificationOkay({state}:NotificationProps) {
    let notification

    if(state == "on"){
        notification = "0px"
    }
    else{
        notification = "300px"
    }
    return (
        <div className="notificationContainer" style={{transform: `translateX(${notification})`}}>
            <h2>Email enviado com sucesso 😀 </h2>
        </div>
    )
  
}
export default NotificationOkay