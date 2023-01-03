import Typed from "react-typed";

import "./Error404.scss";

const Error404 = () => {
  return (
  <div className="container">
      <div className="typed">
        <Typed
          strings={['Error 404', 'Sorry, page not found.', 'Please, go to the <a href="/">Homepage</a>.']}
          typeSpeed={70}
          backSpeed={60}
          loop={false}
        />
      </div>
  </div>
  )
}

export default Error404