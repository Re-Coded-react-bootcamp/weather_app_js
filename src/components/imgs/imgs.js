import sn from "../imgs/sn.svg";
import c from "../imgs/c.svg";
import h from "../imgs/h.svg";
import hc from "../imgs/hc.svg";
import hr from "../imgs/hr.svg";
import lc from "../imgs/lc.svg";
import lr from "../imgs/lr.svg";
import s from "../imgs/s.svg";
import sl from "../imgs/sl.svg";
import t from "../imgs/t.svg";

 const stateImgs={sn:sn, c,h,hc,hr,lc,lr,s,sl,t}

export default function GetImg(abbr) {
    return stateImgs[abbr]
}
