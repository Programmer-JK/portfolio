import React from 'react';
import TypeIt from "typeit-react";

function Greeting() {
    return (
        <div id="greeting">
            <div className="typeit">
                <TypeIt options={{
                    strings: ["안녕하세요 :)", "꾸준히 도전하며 길을 찾아가는 개발자","소통을 중시하며, 안정성 있는 서비스를 추구하는 개발자","맡은 바 업무의 책임감을 갖고 이익을 창출해내는 개발자", "박종권입니다."],
                    speed: 50,
                    loop: false,
                    loopDelay: [2500],
                    waitUntilVisible: true,
                }}/>
            </div>
            {/* <div class="extraDescription">
                <p>소통을 중시하며, 안정성 있는 서비스를 추구하는 개발자</p>
                <p>맡은 바 업무의 책임감을 갖고 꼼꼼하게 안정적으로 일을 하는 개발자</p>
            </div> */}
            <br/>
            <div class="Description">
                <p>
                &nbsp;&nbsp;Vue.js를 포함한 최신 웹 기술에 능숙하며, B2B 시스템 유지보수와 금융 플랫폼 관리 경험을 바탕으로 안정적이고 효율적인 웹 애플리케이션을 개발합니다. 
                빠르게 진화하는 프론트엔드 기술 트렌드를 주시하며 끊임없이 학습하고 있습니다.
                </p>
                <p>
                &nbsp;&nbsp;팀 내 원활한 소통으로 프로젝트의 목표를 정확히 이해하고, 협력을 통해 최상의 결과물을 창출하는 것을 핵심 가치로 삼고 있습니다.
                </p>
            </div>
      </div>
    )
}
export default Greeting;