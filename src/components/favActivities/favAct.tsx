import { useContext } from "react"
import "./favAct.scss"
import { ActivityContext } from "../../context/activity"

function FavAct (){
  const context = useContext(ActivityContext);
  return (
    <>
      <h2>
        Favourite Activities
      </h2>
      <table>
        <thead>
          <tr>
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          {context.activities.map( ( activity, idx ) => (
            <tr key={idx}>
              <td>{activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default FavAct