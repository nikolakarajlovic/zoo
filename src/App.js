import logo from './logo.svg';
import './App.css';

function App() {
  
  const zivotinje = [
    {vrsta: 'rakun', ime: 'Lopov', datum_rodjenja: new Date()},
    {vrsta: 'lav', ime: 'Simba', datum_rodjenja: new Date()},
    {vrsta: 'zec', ime: 'Dusko', datum_rodjenja: new Date()},
    {vrsta: 'medved', ime: 'Balu', datum_rodjenja: new Date()},
    {vrsta: 'koala', ime: 'Blinki Bil', datum_rodjenja: new Date()}]
  
    return (
    <div className="App">
      <h1>Zivotinje:</h1>
      <table>
      <tr>
        <th>Vrsta</th>
        <th>Ime</th>
        <th>Datum rodjenja</th>
      </tr>
      {zivotinje.map((zivotinja) => (
      <tr key={zivotinja.indexOf}>
          <td >{zivotinja.vrsta}</td>
          <td>{zivotinja.ime}</td>
          <td>{zivotinja.datum_rodjenja.toLocaleDateString()}</td>
      </tr>))}
      </table>
    </div>
  );
}




export default App;
