import './App.css';

function App() {
const imgSrc = "https://www.cinepremiere.com.mx/wp-content/uploads/2021/05/shrek-twitter-900x491.jpg";
  return (
    <div className="App container">
      <div className="card">
        <img src={imgSrc} className="img-fluid" alt="shrek"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="www.google.com.mx" className="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    </div>
  );
}

export default App;
