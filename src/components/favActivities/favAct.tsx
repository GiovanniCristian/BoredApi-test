import { useContext } from "react"
import "./favAct.scss"
import { ActivityContext } from "../../context/activity"

function FavAct (){
  const context = useContext(ActivityContext);
  return (
    <table>
      <thead>
        <tr>
          <th>
            <h2>
            Favourite Activities
            </h2>
          </th>
        </tr>
      </thead>
      <tbody>
      {context.activity.map( ( activity, idx ) => (
          <tr key={idx}>
            <td>{activity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default FavAct