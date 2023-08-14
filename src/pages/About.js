import about from '../assets/partial-css/about.css';



function About(){
     return(
          <div className="about">
               <div className="about-main">
                     <div className="about-title">
                         <img src="/images/iris2.png" alt="" /> <span>Flower Classification</span>
                    </div>  
                    <br /><br />
                    <p>The iris flower classification is a machine learning project that uses supervised learning to classify iris flowers into three species: Setosa, Versicolor, and Virginica.</p><br />
                    <p>This project is a great way to learn about machine learning. It is relatively simple to implement, but it still requires a basic understanding of machine learning concepts. It can also be used to explore different machine learning algorithms and to compare their performance.</p><br />
                    
                    <p>The Iris flower data set or Fisher's Iris data set is a multivariate data set used and made famous by the British statistician and biologist Ronald Fisher in his 1936 paper <em>'The Use of Multiple Measurements in Taxonomic Problems'</em>. It can also be found on the <em>UCI Machine Learning Repository</em>.</p><br />

                    <p>The data set consists of 50 samples from each of three species of Iris (Iris Setosa, Iris virginica, and Iris versicolor). Four features were measured from each sample: the length and the width of the sepals and petals, in centimeters. </p><br />
                    
                    <p>This dataset became a typical test case for many statistical classification techniques in machine learning such as support vector machines or decision tree models.</p>
               </div>
          </div>
     );
}


export default About;