import React from 'react';
import styled, { keyframes } from 'styled-components';

import { AiOutlineHtml5 } from 'react-icons/ai';
import { GrCss3, GrReactjs } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io';
import { SiRedux, SiJava, SiExpress, SiMongodb } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { BsBuilding } from 'react-icons/bs';

/* Component Style */
const Popup = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -7vw;
  margin-top: -10vh;
  width: 35vw;
  height: 40vh;
  z-index: 100;
  background-color: #fff;
  border: 3px solid #d8fa08;
  overflow: hidden;
  border-top: none;
`;

const PopupHeader = styled.div`
  height: 12%;
  max-height: 32px;
  grid-template-columns: auto 1fr;
  align-items: center;
  display: grid;
  border-top: 3px solid #d8fa08;
  background-color: #d8fa08;
  top: 0;
`;

const CloseButton = styled.button`
  width: 100px;
  text-align: left;
  letter-spacing: 3px;
  border: 0;
  border-bottom: 3px solid #d8fa08;
  border-right: 3px solid #d8fa08;
  background-color: transparent;
`;

const PopupSection = styled.div`
  width: 100%;
  height: 88%;
  padding: 10px;
  border: 1px solid #000;
  overflow-y: auto;
  box-sizing: border-box;

  & > p {
    margin: 0;
    letter-spacing: 2px;
  }
`;

const textRollingAnimation = keyframes`
  0% {
    transform: translateX(0);
}
100% {
    transform: translateX(-100%);
}
  `;

const TextRolling = styled.div`
  background-color: #000;
  color: #d8fa08;
  padding: 3px 0 4px;

  .text-rolling-inner {
    overflow: hidden;
  }

  .text-rolling-list {
    width: 100000px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .text-rolling-item {
    letter-spacing: 2px;
    animation-duration: 60s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-name: ${textRollingAnimation};
    float: left;
  }
`;

const SectionTitle = styled.h3`
  margin: 0;
  letter-spacing: 2px;
`;

const Career = styled.div`
  margin-top: 40px;
`;

const CareerList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  p {
    margin: 0;
    padding-left: 18px;
    letter-spacing: 2px;
    line-height: 1.8;

    &:nth-child(2) {
      padding-left: 30px;
    }
  }
`;

const CareerItem = styled.li`
  margin-top: 10px;
`;

const Skill = styled.div`
  margin-top: 40px;
`;

const SkillList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  margin-top: 15px;
  list-style: none;
`;

const SkillItem = styled.li`
  padding: 2px 10px;
  margin: 3px 5px;
  border: 1px solid #000;
  letter-spacing: 2px;
`;

const AboutPopup = () => {
  return (
    <Popup>
      <PopupHeader>
        <CloseButton>X CLOSE</CloseButton>
        <TextRolling>
          <div className="text-rolling-inner">
            <ul className="text-rolling-list">
              <li className="text-rolling-item">
                Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile
                &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt;
                Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile
                &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt;
                Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile
                &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt;
                Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile
                &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt;
                Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile
                &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt;
                Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile
                &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt;
              </li>
              <li className="text-rolling-item">
                Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile
                &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt;
                Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile
                &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt;
                Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile
                &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt;
                Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile
                &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt;
                Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile
                &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt;
                Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile
                &gt;&gt; Profile &gt;&gt; Profile &gt;&gt; Profile &gt;&gt;
              </li>
            </ul>
          </div>
        </TextRolling>
      </PopupHeader>

      <PopupSection>
        <p>웹이라는 우주에 그람을 그리는 개발자 남은경입니다.</p>
        <p>내 직업에 부끄러움 없이 당당하기 위해 성실히 공부하고 있습니다.</p>

        <Career>
          <SectionTitle>!-- Career</SectionTitle>

          <CareerList>
            <CareerItem>
              <p>- 2020.11.23 ~ 현재</p>
              <p>
                <BsBuilding />
                피타그래프
              </p>
            </CareerItem>
          </CareerList>
        </Career>

        <Skill>
          <SectionTitle>!-- Skill</SectionTitle>

          <SkillList>
            <SkillItem>
              <AiOutlineHtml5 />
              HTML5
            </SkillItem>

            <SkillItem>
              <GrCss3 />
              CSS3
            </SkillItem>

            <SkillItem>
              <IoLogoJavascript />
              Javascript, ES6
            </SkillItem>

            <SkillItem>
              <GrReactjs />
              REACT
            </SkillItem>

            <SkillItem>
              <SiRedux />
              REDUX
            </SkillItem>

            <SkillItem>
              <SiJava />
              JAVA EGOV, JSP
            </SkillItem>

            <SkillItem>
              <FaNode />
              NODE
            </SkillItem>

            <SkillItem>
              <SiExpress />
              EXPRESS
            </SkillItem>

            <SkillItem>
              <SiMongodb />
              MONGODB
            </SkillItem>
          </SkillList>
        </Skill>
      </PopupSection>
    </Popup>
  );
};

export default AboutPopup;