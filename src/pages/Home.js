import { useEffect, useState } from 'react';
import home from '../assets/partial-css/home.css';
import Spinner from '../components/Spinner.js';




function Home(){

     const [sepalLength, setSepalLength] = useState();
     const [sepalWidth, setSepalWidth] = useState();
     const [petalLength, setPetalLength] = useState();
     const [petalWidth, setPetalWidth] = useState();
     const [specie, setSpecie] = useState("");
     const [isLoading, setIsLoading] = useState(false);
     const [show, setShow] = useState(false);
     const [showNotice, setShowNotice] = useState(true);
     const [apiStatus, setApiStatus] = useState("Not Ready");

     useEffect(() => {
          fetch(`${process.env.REACT_APP_API_URL}`)
          .then(res=> res.json())
          .then(data => {
               setApiStatus("Ready");
          })
          .catch(() => setApiStatus("Failed. Fetch Error."))
     }, [])

        const handleSubmit = async (e) => {
               e.preventDefault();
               setIsLoading(true);
               try{
                  const result = await fetch(`${process.env.REACT_APP_API_URL}/predict`, {
                         headers: {
                           'Content-Type': 'application/json'
                         },
                         method: 'POST',
                         body: JSON.stringify({
                            sepallength: sepalLength,
                            sepalwidth: sepalWidth,
                            petallength: petalLength,
                            petalwidth: petalWidth
                         })
                       });

                    const data = await result.json();
                    setSpecie(data);
                    setIsLoading(false);
                    setShow(true);
                    setSepalLength("");
                    setSepalWidth("");
                    setPetalLength("");
                    setPetalWidth("");

               }catch{
                    alert("Failed to Fetch")
               }
        }

     return(
          <div className="home">
               <h1>Iris Flower Classifier</h1><br />
               <div className="info">Input the necessary details to predict what species is your Iris Flower.                     
                    { showNotice && <div className="notice">
                         <p>Hello, please wait for the API status to become "Ready" before trying to use classify to avoid fetch errors. (approx. 20s - 35s after opening site)
                         </p>
                         <div>
                               <p className="close-btn" onClick={() => setShowNotice(false)}>x</p>
                         </div>
                    </div>}
               </div>
               <h5>API Status: <span className={apiStatus == "Ready" ? 'ready' : ""}> &ensp;{apiStatus}</span></h5>
               {
                    isLoading?
                    <Spinner />
                    :
                    <>
                    <div></div>
                    {
                    show &&
                    <h6 className="result">Your Iris Flower is a <span>{specie}</span> !!!</h6> 
                    }
                    </>
               }
               
               <form onSubmit={handleSubmit}>
                    <div>
                         <label>Sepal Length (cm)</label><br />
                         <input 
                         type="number"
                         required
                         value={sepalLength}
                         onChange={e => setSepalLength(e.target.value)}
                         />
                    </div>
                    <div>
                         <label>Sepal Width (cm)</label><br />
                         <input 
                         type="number"
                         required 
                         value={sepalWidth}
                         onChange={e => setSepalWidth(e.target.value)}
                         />
                    </div>
                    <div>
                         <label>Petal Length (cm)</label><br />
                         <input 
                         type="number"
                         required 
                         value={petalLength}
                         onChange={e => setPetalLength(e.target.value)}
                         />
                    </div>
                    <div>
                         <label>Petal Width (cm)</label><br />
                         <input 
                         type="number" 
                         required 
                         value={petalWidth}
                         onChange={e => setPetalWidth(e.target.value)}
                         />
                    </div>
                    <button type="submit">Classify</button>
               </form>
          </div>
     );
}


export default Home;