import { useState } from "react";
import { data } from './data';
import './App.css';


function App() {

  const [photo, setPhoto] = useState(0);
  const {img} = data[photo];
  console.log(data[photo]);

  const previousPhoto = () => {
    setPhoto((photo => {
      photo --;
      if (photo <0) {
        photo = data.length -1;
      }
      return photo;
    }))
  }

  const nextPhoto = () => {
    setPhoto((photo => {
      photo ++;
      if (photo > data.length -1) {
        photo = 0;
      }
      return photo;
    }))
  }

  return (
    <div>

      <div className="header">
        <h1>Grandparents and us 💕</h1>
      </div>

      <div className="container">
        <button onClick={previousPhoto} className="btnBack">Back</button>
        <img src={img} className="pics" width="500px" alt="grandparents and grandchildren" />
        <button onClick={nextPhoto} className="btnNext">Next</button>
      </div>
      
      <div>
        <p className="bottom"></p>
      </div>
      
    </div>
  );
}

export default App;
