import "./SearchBar.css";
import Option from "../option/Option";

export default function SearchBar(props) {
  return (
    <div
      className="SearchBar"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1559060017-445fb9722f2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)`,
      }}
    >
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
        <div className="options" id="style-1">
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
