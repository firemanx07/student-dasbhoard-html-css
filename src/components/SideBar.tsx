import React, {useContext, useState} from 'react';
import {AppContext, AppContextParams, DispatchContext} from "../App";

const SideBar = () => {
    const {menuStatus}=useContext<AppContextParams>(AppContext)
    const dispatch=useContext(DispatchContext)
    const handleClick=()=> dispatch({type:'switchMenu'})

    return (
        <>

            <div className={"overlay" +(menuStatus ?" is-toggled":"")}/>
            <div  className={"layout-sidebar animate-enter"+(menuStatus ?" is-toggled":"")} id="layout-sidebar">
                <ul className="sidebar-list sf-fn">
                    <li className="sf-fb">
                        <div className="item">
                            <span className="icon-logo" onClick={menuStatus && handleClick || undefined}></span>
                            <span>Univié</span>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <span className="icon-dashboard"></span>
                            <span>Dashboard</span>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <span className="icon-courses"></span>

                            <span>Courses</span>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <span className="icon-materials"></span>
                            <span>Materials</span>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <span className="icon-calendar"></span>
                            <span>Calendar</span>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <span className="icon-transcripts"></span>
                            <span>Transcripts</span>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <span className="icon-star"></span>
                            <span>Grades</span>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <span className="icon-attendance"></span>
                            <span>Attendance</span>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <span className="icon-settings"></span>
                            <span>Settings</span>
                        </div>
                    </li>
                </ul>
                <div className="sidebar-footer">
                    <span className="icon-logo footer-logo"></span>

                    <div className="item">
            <span
            >Levl up your skills
              <strong>Software enginering Master certficate</strong>
            </span>
                    </div>
                </div>
                <span id="sidetoggler" className="icon-left-arrow side-icon" onClick={handleClick}></span>

            </div>
        </>
    );
};

export default SideBar;
