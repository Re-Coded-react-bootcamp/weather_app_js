import "./SearchBar.css";
import Option from "../option/Option";

export default function SearchBar(props) {
  return (
    <div className="SearchBar">
      <div className="SearchChilds">
        <h5 className="text-white">Search weather on your city</h5>
        <input
          value={props.input}
          onChange={(event) => {
            props.inp(event.target.value);
            if (event.target.value !== "") {
              props.inchanged(event.target.value);
            }
          }}
          type="text"
          autoComplete="false"
          placeholder="Search"
        />
        <div className="options">
          {props.input !== "" ? (
            props.show_lds ? (
              <div className="smallld">Loading...</div>
            ) : (
              props.city_opt.map((city, i) => (
                <Option key={i} update={props.update} city={city} />
              ))
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}
