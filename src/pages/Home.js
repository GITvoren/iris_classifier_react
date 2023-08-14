import { useEffect, useState } from 'react';
import home from '../assets/partial-css/home.css';




function Home(){

     const [sepalLength, setSepalLength] = useState();
     const [sepalWidth, setSepalWidth] = useState();
     const [petalLength, setPetalLength] = useState();
     const [petalWidth, setPetalWidth] = useState();
     const [specie, setSpecie] = useState("");

        const handleSubmit = async (e) => {
               e.preventDefault();
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
                    alert(data);
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
               <form onSubmit={handleSubmit}>
                    <div>
                         <label>Sepal Length (cm)</label><br />
                         <input 
                         type="number"
                         required
                         value={sepalLength}
                         onChange={(e) => setSepalLength(e.target.value)}
                         />
                    </div>
                    <div>
                         <label>Sepal Width (cm)</label><br />
                         <input 
                         type="number"
                         required 
                         value={sepalWidth}
                         onChange={(e) => setSepalWidth(e.target.value)}
                         />
                    </div>
                    <div>
                         <label>Petal Length (cm)</label><br />
                         <input 
                         type="number"
                         required 
                         value={petalLength}
                         onChange={(e) => setPetalLength(e.target.value)}
                         />
                    </div>
                    <div>
                         <label>Petal Width (cm)</label><br />
                         <input 
                         type="number" 
                         required 
                         value={petalWidth}
                         onChange={(e) => setPetalWidth(e.target.value)}
                         />
                    </div>
                    <button type="submit">Predict</button>
               </form>
          </div>
     );
}


export default Home;