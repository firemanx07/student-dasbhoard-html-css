import React, {useState} from 'react';
import './chat.css'
const ChatComponent = () => {
    const handleClick=()=>{
        const element=document.querySelector('.overflow-chat')
        element?.classList.toggle('active')
    }
    return (
        <div className="card">
            <div className="flex items-center" id={"chat-header"}>
                <div className={"flex"}>
                    <img className="avatar" src="src/assets/avatar.png" alt=""/>
                    <span className={"online_badge"}/>
                </div>
                <span className={"sf-f500 text-secondary"}>Messaging</span>
                <>
                    <span className={"icon-search text-gray"}/>
                    <span className={"icon-mail text-gray"} />
                    <span className={"icon-menu-2 text-gray"}/>
                    <span  className={"icon-left-arrow text-primary"} onClick={handleClick}/>
                </>
            </div>
            <div id={"chat-body"}>
            <div className="flex flex-container" id="avatar-containers">
                <img className="avatar" src="src/assets/add.svg" alt={""}/>
                <img className="avatar" src="src/assets/avatar.png" alt=""/>
                <img className="avatar" src="src/assets/avatar.png" alt=""/>
                <img className="avatar" src="src/assets/avatar.png" alt=""/>
                <img className="avatar" src="src/assets/avatar.png" alt=""/>
                <img className="avatar" src="src/assets/avatar.png" alt=""/>
                <img className="avatar" src="src/assets/avatar.png" alt=""/>
                <img className="avatar" src="src/assets/avatar.png" alt=""/>
            </div>
            <div className="message flex items-center mt-4 gap-1">
                <img className="avatar" src="src/assets/avatar.png" alt=""/>
                <div className="flex flex-col">
                    <span className="sf-fb">John Doe</span>
                    <span className="sf-fb lineclamp">Hello, how are you?</span>
                </div>
                <div className="flex-col flex ml-auto">
                    <span className="sf-fn">12:30</span>
                    <span className="sf-fb new-message">1</span>
                </div>
            </div>
            <div className="message flex items-center mt-4 gap-1">
                <img className="avatar" src="src/assets/avatar.png" alt=""/>
                <div className="flex flex-col">
                    <span className="sf-fb">John Doe</span>
                    <span className="sf-fb lineclamp">Hello, how are you?</span>
                </div>
                <div className="flex-col flex ml-auto">
                    <span className="sf-fn">12:30</span>
                    <span className="sf-fb new-message">1</span>
                </div>
            </div>
            <div className="message flex items-center mt-4 gap-1">
                <img className="avatar" src="src/assets/avatar.png" alt=""/>
                <div className="flex flex-col">
                    <span className="sf-fb">John Doe</span>
                    <span className="sf-fb lineclamp">Hello, how are you?</span>
                </div>
                <div className="flex-col flex ml-auto">
                    <span className="sf-fn">12:30</span>
                    <span className="sf-fb new-message">1</span>
                </div>
            </div>
            <div className="message flex items-center mt-4 gap-1">
                <img className="avatar" src="src/assets/avatar.png" alt=""/>
                <div className="flex flex-col">
                    <span className="sf-fb">John Doe</span>
                    <span className="sf-fb lineclamp">Hello, how are you?</span>
                </div>
                <div className="flex-col flex ml-auto">
                    <span className="sf-fn">12:30</span>
                    <span className="sf-fb new-message">1</span>
                </div>
            </div>
            <div className="message flex items-center mt-4 gap-1">
                <img className="avatar" src="src/assets/avatar.png" alt=""/>
                <div className="flex flex-col">
                    <span className="sf-fb">John Doe</span>
                    <span className="sf-fb lineclamp">Hello, how are you?</span>
                </div>
                <div className="flex-col flex ml-auto">
                    <span className="sf-fn">12:30</span>
                    <span className="sf-fb new-message">1</span>
                </div>
            </div>
            <div className="message flex items-center mt-4 gap-1">
                <img className="avatar" src="src/assets/avatar.png" alt=""/>
                <div className="flex flex-col">
                    <span className="sf-fb">John Doe</span>
                    <span className="sf-fb lineclamp">Hello, how are you?</span>
                </div>
                <div className="flex-col flex ml-auto">
                    <span className="sf-fn">12:30</span>
                    <span className="sf-fb new-message">1</span>
                </div>
            </div>
            <div className="message flex items-center mt-4 gap-1">
                <img className="avatar" src="src/assets/avatar.png" alt=""/>
                <div className="flex flex-col">
                    <span className="sf-fb">John Doe</span>
                    <span className="sf-fb lineclamp">Hello, how are you?</span>
                </div>
                <div className="flex-col flex ml-auto">
                    <span className="sf-fn">12:30</span>
                    <span className="sf-fb new-message">1</span>
                </div>
            </div>
            <div className="message flex items-center mt-4 gap-1">
                <img className="avatar" src="src/assets/avatar.png" alt=""/>
                <div className="flex flex-col">
                    <span className="sf-fb">John Doe</span>
                    <span className="sf-fb lineclamp">Hello, how are you?</span>
                </div>
                <div className="flex-col flex ml-auto">
                    <span className="sf-fn">12:30</span>
                    <span className="sf-fb new-message">1</span>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ChatComponent;
