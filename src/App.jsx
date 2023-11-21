import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-around", backgroundColor:"grey"}}>
        <h1 style={{fontWeight:"bold"}}>Portfolio</h1>
        <div style={{display:"flex", gap:10, }}>
          <a href="/">About</a>
          <a href="/">contact</a>
          <a href="/">place</a>
        </div>
      </div>
     <h1>Welcome to my Re</h1>
     <div>
      <img src="/brochure.jpg" alt="brochure" height={200} width={200}/>
     </div>
    </div>
  );
}

export default App;
