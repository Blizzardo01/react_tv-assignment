import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({selectedShow}) {

  if (selectedShow === undefined) {
    return <div className="show-details">
    <h1>no show selected</h1>
  </div>;
  } else {
  return <div className="show-details">
    <h1>{selectedShow.name}</h1>
  </div>;
  }
}
