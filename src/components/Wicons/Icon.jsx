import React from "react";
import "./Icon.css";
import c from "../../assets/logos/c.svg";
import h from "../../assets/logos/h.svg";
import hc from "../../assets/logos/hc.svg";
import hr from "../../assets/logos/hr.svg";
import lc from "../../assets/logos/lc.svg";
import lr from "../../assets/logos/lr.svg";
import s from "../../assets/logos/s.svg";
import sl from "../../assets/logos/sl.svg";
import sn from "../../assets/logos/sn.svg";
import t from "../../assets/logos/t.svg";

const Icon = (props) => {
  const types = {
    c: c,
    h: h,
    hc: hc,
    hr: hr,
    lc: lc,
    lr: lr,
    s: s,
    sl: sl,
    sn: sn,
    t: t,
  };
  return (
    <React.Fragment>
      <img className="icon" src={types[props.icon]} alt="the_icon" />
      <h5 className="desc">{props.description}</h5>
    </React.Fragment>
  );
};

export default Icon;
