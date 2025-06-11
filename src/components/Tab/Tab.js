import React from "react";
import style from "./Tab.module.css";

const Tab = (props) => {
  const { item, page, togglePage } = props;

  return (
    <div className={style["tab"]}>
      {item.map((elem) => {
        let activeCss;
        if (elem.name === page) {
          activeCss = `${style["tab-button"]} ${style["active"]}`;
        } else if (elem.disabled) {
          activeCss = `${style["tab-button"]} ${style["disabled"]}`;
        } else {
          activeCss = `${style["tab-button"]}`;
        }
        return (
          <button
            className={activeCss}
            key={elem.id}
            onClick={togglePage.bind(this, elem.name)}
            disabled={elem.disabled}
          >
            {elem.name}
          </button>
        );
      })}
    </div>
  );
};

export default Tab;
