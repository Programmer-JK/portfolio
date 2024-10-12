import React from 'react';
import { FaBirthdayCake, FaGithub } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";
import {GoPerson,  GoHome, GoMail } from "react-icons/go";
function NameCard() {
    return (
        <section id="nameCard">
            <div class="innerNameCard">
                <h2>ABOUT</h2>
                <div className="profile-inner">
                    <div className="profile-img"></div>
                    <div className="profile-list">
                        <ul>
                            <li><GoPerson/><span>박종권</span></li>
                            <li><FaBirthdayCake/><span>1998. 11. 22</span></li>
                            <li><GoHome/><span>서울특별시 도봉구</span></li>
                            <li><GoMail/><span>qkrwhd14@naver.com</span></li>
                        </ul>
                        <ul>
                            <li><a href=""><FaGithub/><span>Git</span></a></li>
                            <li><a href=""><SiBloglovin/><span>BLOG</span></a></li>
                            {/* <li><a href="#"><IoNewspaperOutline/><span>RESUME</span></a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NameCard;