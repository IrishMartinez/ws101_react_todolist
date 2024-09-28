import './Date.css';

function Title() {
  return (

    <div>
      <div className="purpose">
        <label for="purpose-input"></label>
        <input type="purpose" id="purpose-input" name="purpose" placeholder='Mood after the vibe check?'></input>
      </div>
     
    
      <div className="date">
        <input type="date" id="date-input" name="date"></input>
      </div>
    </div>
  );
}

export default Title;