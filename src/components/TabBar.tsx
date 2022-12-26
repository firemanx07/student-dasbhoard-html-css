import React from 'react';

const TabBar = () => {
    const handleClick=(event: React.MouseEvent<HTMLDivElement>)=>{
      const element=document.getElementsByClassName("tab-item selected").item(0);
        element?.classList.remove("selected");
        event?.currentTarget.classList.add("selected")
    }
    return (
        <div className={'tabContainer'}>
            <div className={"tab-item selected"} onClick={handleClick}>
                <span className={"icon-dashboard"}/>
                <span className={"tab-item-text"}>Dashboard</span>
            </div>
            <div className={"tab-item"} onClick={handleClick}>
                <span className={"icon-courses"}/>
                <span className={"tab-item-text"}>Courses</span>
            </div>
            <div className={"tab-item"} onClick={handleClick}>
                <span className={"icon-notification"} />
                <span className={"tab-item-text"}>Notification</span>
            </div>
            <div className={"tab-item"} onClick={handleClick}>
                <span className={"icon-settings"}/>
                <span className={"tab-item-text"}>Settings</span>
            </div>
        </div>
    );
};

export default TabBar;
