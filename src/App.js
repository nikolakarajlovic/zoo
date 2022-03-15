import logo from './logo.svg';
import './App.css';

function App() {
  
  const niz_zivotinje = [
    {vrsta: 'rakun', ime: 'Lopov', datum_rodjenja: new Date()},
    {vrsta: 'lav', ime: 'Simba', datum_rodjenja: new Date()},
    {vrsta: 'zec', ime: 'Dusko', datum_rodjenja: new Date()},
    {vrsta: 'medved', ime: 'Balu', datum_rodjenja: new Date()},
    {vrsta: 'koala', ime: 'Blinki Bil', datum_rodjenja: new Date()}]
  
    return (
    <div className="App">
      <h1>Zivotinje:</h1>
      <ul>
        {niz_zivotinje.map((zivotinja) => (
          <li key={zivotinja.indexOf}>{zivotinja.vrsta}, {zivotinja.ime}, {zivotinja.datum_rodjenja.toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
}


export default App;
