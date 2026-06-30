import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({shows, setSelectedShow}) {
  return (<nav className="shows">
        <ul>
            {shows.map((show) => {
                return <li key={show.number} onClick={() => setSelectedShow(show)} className="show">{show.name}</li>
            })}
        </ul>
  </nav>
  )
}
