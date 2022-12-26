import React, {useContext, useEffect, useState} from 'react';
import {AppContext, AppContextParams, DispatchContext} from "../App";
import $ from "jquery";

const HeaderComponent = () => {
    const placeHolder =()=> screen.width < 600 ? 'Search' : 'Search course, student or instructor';
    const {menuStatus}=useContext<AppContextParams>(AppContext)
    const dispatch=useContext(DispatchContext)
    const [searchPlaceHolder, setSearchPlaceHolder] = useState(placeHolder());

    $(function() {
        const placeHolder = screen.width < 600 ? 'Search' : 'Search course, student or instructor';
        $('#input-search').attr('placeholder', placeHolder);
    })
    useEffect(() => {
            window.addEventListener('resize', () => setSearchPlaceHolder(placeHolder()));
        },
        [])

    const handleClick=()=> dispatch({type:'switchMenu'})
    return (
        <header className="layout-header">
            <div className={"toggle-navbar animate-enter"+(menuStatus ?" is-toggled":"")} id="navtoggler" onClick={handleClick}>
                <span className="icon-logo"></span>
            </div>
            <div className="search-input flex-1">
                <span className="icon-search"></span>
                <input
                    type="text"
                    placeholder={searchPlaceHolder}
                    id="input-search"
                />
            </div>
            <div className="right-side">
                <span className="seperator"></span>

                <div className="chat right-side-icon">
                    <span className="icon-chat"></span>
                </div>
                <div className="notification right-side-icon">
                    <span className="icon-notification"></span>
                </div>
                <div className="avatar-container">

                    <img className="avatar" src="src/assets/avatar.png" alt=""/>
                    <span className={"online_badge"}/>

                    <div className="avatar-text">
                        <span className="sf-fb">Mia V</span>
                        <span className="sf-fn">Student</span>
                    </div>

                </div>
            </div>
            <span className="icon-menu"/>
        </header>

);
};

export default HeaderComponent;
