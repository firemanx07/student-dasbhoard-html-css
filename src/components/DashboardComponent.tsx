import React, {useEffect} from 'react';
import './dasboard.css'
import ChatComponent from "./chatComponent";

const DashboardComponent = () => {
    const mapper = function (array: NodeListOf<Element>, callback: { (index: any, value: any): void; call?: any; }, scope: string) {
        for (let i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i]);
        }
    };
    const onLoad = () => {
        const max = -219.99078369140625;

        mapper(
            document.querySelectorAll(".progress"),

            function (index, value) {
                const percent = value.getAttribute("data-progress");

                value

                    .querySelector(".fill")

                    .setAttribute(
                        "style",

                        "stroke-dashoffset: " + ((100 - percent) / 100) * max
                    );

                value.querySelector(".value").innerHTML = percent + "%";
            },

            ""
        );
    };
    useEffect(() => {
        onLoad();
    }, [])

    return (
        <div id={"dashboard_layout"} className={"dashboard-layout"}>

            <div className={"cards-section"}>
                <div className={"dashboard-header"}>
                    <h2 className="text-secondary sf-fb">Hello mia!</h2>
                    <span className={"icon-customize text-primary sf-f600"}> Customize</span>
                </div>
                <div id="main_card" className="card">
                    <div className={"flex justify-between"}>
                        <span className={"text-secondary sf-f500"}>Active Programs</span>
                        <span className={"icon-menu-2"}/>
                    </div>
                    <div className="flex items-center border-bottom">
                        <div className={"flex items-center"}>
                            <img src="src/assets/placeholder.png" alt=""/>
                            <div className="flex flex-col  ">
                                <div className="sf-f600 univ-title ">Master of computer science</div>
                                <span className=" text-secondary  sf-f600 univ-subtitle">University of Upstate at Brookstone</span
                                >
                            </div>
                        </div>
                        <div className="flex flex-1 items-center  rm-mobile">
                            <div className="flex flex-col justify-center">
                                <span className="number sf-fb text-center">1</span>
                                <span className="text text-gray text-center sf-fn"
                                >Overdue Assignments</span
                                >
                            </div>
                            <div className="flex flex-col">
                                <span className="number sf-fb text-center">5</span>
                                <span className="text text-gray text-center sf-fn"
                                >Remaining Absences</span
                                >
                            </div>
                            <div className="flex flex-col">
                                <span className="number sf-fb text-center">A-</span>
                                <span className="text text-gray text-center sf-fn"
                                >Academic Average</span
                                >
                            </div>
                        </div>
                        <div className={"flex-col"}>
                            <svg
                                className="progress"
                                data-progress="45"
                                x="0px"
                                y="0px"
                                viewBox="0 0 80 80"
                            >
                                <path
                                    className="track"
                                    d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
                                />

                                <path
                                    className="fill"
                                    d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
                                />

                                <text className="value" x="50%" y="55%">0%</text>
                            </svg>
                            <span className="text text-gray text-center sf-fn">Completion</span>

                        </div>
                    </div>
                    <div className="flex mt-4 items-center">
                        <div className={"flex items-center"}>
                            <img src="src/assets/placeholder2.png" alt=""/>
                            <div className="flex flex-col">
                                <div className="sf-f600 univ-title  ">Master of computer science</div>
                                <span className=" text-secondary   sf-f600 univ-subtitle">University of Upstate at Brookstone</span
                                >
                            </div>
                        </div>
                        <div className="flex flex-1 items-center rm-mobile">
                            <div className="flex flex-col justify-center">
                                <span className="number sf-fb text-center">0</span>
                                <span className="text text-gray text-center sf-fn"
                                >Overdue Assignments</span
                                >
                            </div>
                            <div className="flex flex-col">
                                <span className="number sf-fb text-center">6</span>
                                <span className="text text-gray text-center sf-fn"
                                >Remaining Absences</span
                                >
                            </div>
                            <div className="flex flex-col">
                                <span className="number sf-fb text-center">--</span>
                                <span className="text text-gray text-center sf-fn"
                                >Academic Average</span
                                >
                            </div>
                        </div>
                        <div className={"flex-col ml-auto"}>
                            <svg
                                className="progress "
                                data-progress="28"
                                x="0px"
                                y="0px"
                                viewBox="0 0 80 80"
                            >
                                <path
                                    className="track"
                                    d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
                                />

                                <path
                                    className="fill"
                                    d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
                                />

                                <text className="value" x="50%" y="55%">0%</text>
                            </svg>
                            <span className="text text-gray text-center sf-fn">Completion</span>
                        </div>
                    </div>
                </div>
                <div id="other_cards"className="flex ">
                    <div className="flex-col flex items-center">
                        <div className="card flex flex-col">
                            <div className="card-image">
                                <img src="src/assets/card.png" alt="card"/>
                                <div className="checkit">
                                    <span className="icon-tick"></span>
                                    <span className="sf-fb">Checked In</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer flex">
                            <div className="flex flex-col">
                                <span className="sf-fb"> UX Research - week3 </span>
                                <span className="text-small"> CERTIFICATE UX/UI design </span>
                                <span className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                          <path
                              d="M12 20.2C16.5287 20.2 20.2 16.5287 20.2 12C20.2 7.47125 16.5287 3.79999 12 3.79999C7.47125 3.79999 3.79999 7.47125 3.79999 12C3.79999 16.5287 7.47125 20.2 12 20.2Z"
                              stroke="#FF2C55"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                          />
                          <path
                              d="M12 8.86011V12.8601L14.14 13.8801"
                              stroke="#FF2C55"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                          />
                          <path
                              d="M12 20.2C16.5287 20.2 20.2 16.5287 20.2 12C20.2 7.47125 16.5287 3.79999 12 3.79999C7.47125 3.79999 3.79999 7.47125 3.79999 12C3.79999 16.5287 7.47125 20.2 12 20.2Z"
                              stroke="#FF2C55"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                          />
                        </svg>
                        <span>In Progress</span>
                      </span>
                            </div>
                            <div>
                                <div className="date">
                                    <span className="sf-fb text-center">01</span>
                                    <span className="text-center sf-fb">April</span>
                                </div>
                                <div className="mt-1 text-primary sf-fn no-wrap">
                                    Join now
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card calendar">
                        <span> Upcoming Assignments </span>
                        <div className="grid-calendar">
                            <span>Date</span>
                            <span>Course</span>
                            <span>Time</span>
                            <span className="w-max">
                      <span className="text-primary text-small"> Tomorrow </span>
                      <span className="date">
                        <span className="sf-fb fs-4 text-center">01</span>
                        <span className="sf-fb text-center">April</span>
                      </span>
                    </span>
                            <span>
                      <span className="sf-fb">
                        Database and informatoin Systems
                      </span>
                      <br/>
                      <span className="sf-fn">Master Of computer science</span>
                    </span>
                            <span className="grid-date">8.30am-1.00pm</span>
                            <span className="w-max">
                      <span className="text-primary text-small"> Tomorrow </span>
                      <span className="date">
                        <span className="sf-fb fs-4 text-center">01</span>
                        <span className="sf-fb text-center">April</span>
                      </span>
                    </span>
                            <span>
                      <span className="sf-fb">
                        Database and informatoin Systems
                      </span>
                      <br/>
                      <span className="sf-fn">Master Of computer science</span>
                    </span>
                            <span className="grid-date">8.30am-1.00pm</span>
                            <span className="w-max">
                      <span className="text-primary text-small"> Tomorrow </span>
                      <span className="date">
                        <span className="sf-fb fs-4 text-center">01</span>
                        <span className="sf-fb text-center">April</span>
                      </span>
                    </span>
                            <span>
                      <span className="sf-fb">
                        Database and informatoin Systems
                      </span>
                      <br/>
                      <span className="sf-fn">Master Of computer science</span>
                    </span>
                            <span className="grid-date">8.30am-1.00pm</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className={"chat-section"}>
                <ChatComponent/>

            </div>

        </div>
    );
};

export default DashboardComponent;
