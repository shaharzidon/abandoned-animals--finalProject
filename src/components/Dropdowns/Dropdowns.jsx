
function Dropdowns() {
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" dir="rtl" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        סינון לפי שכונות
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">ממשית</a></li>
        <li><a className="dropdown-item" href="#">השחר</a></li>
        <li dir="rtl"><a className="dropdown-item" href="#">אחר...</a></li>
      </ul>
    </div>
  );
}

export default Dropdowns;