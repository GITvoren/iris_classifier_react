import species from '../assets/partial-css/species.css';
import about from '../assets/partial-css/about.css';



function Species(){
     return(
          <div className="species">
               <div className="about-title">
                    <img src="/images/iris2.png" /> <span>species</span>
               </div><br />
               <div className="species-list">
                    <div className="species-item">
                         <div className="species-img-container">
                              <img src="/images/setosa.jpg" className="species-img" />
                         </div>
                         <div>
                              <h2>Setosa</h2><br />
                              <p>Iris setosa is the smallest of the three species. It has narrow, sword-shaped leaves and flowers with white petals and purple sepals. It is native to the western United States and Canada.</p>
                         </div>  
                    </div>
                    <div className="species-item">
                         <div className="species-img-container">
                              <img src="/images/versicolor.jpg" className="species-img" />
                         </div>
                         <div>
                              <h2>Versicolor</h2><br />
                              <p>Iris versicolor is the most common of the three species. It has medium-sized leaves and flowers with blue, purple, or white petals and yellow or orange sepals. It is native to eastern and central North America.</p>
                         </div>  
                    </div>
                    <div className="species-item">
                         <div className="species-img-container">
                              <img src="/images/virginica.jpg" className="species-img" />
                         </div>
                         <div>
                              <h2>Virginica</h2><br />
                              <p>Iris virginica is the largest of the three species. It has broad, lance-shaped leaves and flowers with blue or purple petals and yellow or orange sepals. It is native to the eastern United States.</p>
                         </div>  
                    </div>
               </div>

          </div>
     );
}

export default Species;