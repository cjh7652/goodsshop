import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: rgb(232, 234, 237);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;
  margin-top: 10px;

  .submenu {
  // 기본 Tabmenu 에 대한 CSS를 구현
    display: flex;
    /* justify-content: space-between;
    width: 380px;
    heigth: 30px; */
    width: calc(100% /3);
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
    border-radius: 10px 10px 0px 0px;
  }

  .focused {
   //선택된 Tabmenu 에만 적용되는 CSS를 구현
    background-color: rgb(255,255,255);
    color: rgb(21,20,20);
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;
const Kitchen = () => {
    const [currentTab, clickTab] = useState(0);

    const menuArr = [
      { name: 'Tab1', content: 'Tab menu ONE' },
      { name: 'Tab2', content: 'Tab menu TWO' },
      { name: 'Tab3', content: 'Tab menu THREE' },
    ];
  
    const selectMenuHandler = (index) => {
     
      clickTab(index);
    };
    return (
        <div>
            <h2>주방용품</h2>

            <TabMenu>
        
          {/* <li className="submenu">{menuArr[0].name}</li>
          <li className="submenu">{menuArr[1].name}</li>
          <li className="submenu">{menuArr[2].name}</li> */}
          {menuArr.map((el,index) => (
              <li className={index === currentTab ? "submenu focused" : "submenu" }
              onClick={() => selectMenuHandler(index)}>{el.name}</li>
            ))}
            </TabMenu>
            <Desc>
            <p>{menuArr[currentTab].content}</p>
            </Desc>
        </div>
    );
};

export default Kitchen;