import "./SearchBar.css";
import Option from "../option/Option";
export default function SearchBar() {
  let x = <div className="smallld">Loading...</div>;
  return (
    <div className="SearchBar">
      <div className="SearchChilds">
        <h5 className="text-white">Search weather on your city</h5>
        <input type="text" autoComplete="false" placeholder="Search" />
        <div className="options"></div>
      </div>
    </div>
  );
}
