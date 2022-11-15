import Modal from '../PetModal/Modal';
import './petCard.css'
import { IoMdMore } from 'react-icons/io'

function PetCard({ report }) {
    return (
        <div className="card mt-4" style={{ width: "22rem" }}>
            <img src={report.photo} className="card-img-top pet-card-img" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{report.type}</h5>
                <h5 className="card-title">{report.problem}</h5>
                <h5 className="card-title">{report.place}</h5>
                <h5 className="card-title">{report.time}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className='card-body-btn-container'>
                    <Modal report={report} title='פרטים נוספים:' modalButtonName='פרטים נוספים' time={report.time} >
                        <div dir='rtl'>סטאטוס:</div>
                        <div className='modal-img'>
                            <div className='modal-img-container'>
                                <img className='modal-img-container-image' src={report.photo} alt="image" />
                            </div>
                        </div>

                        <div dir='rtl'>תיאור: {report.problem}</div>
                        <div dir='rtl'>שם מדווח: {report.name}</div>
                        <div dir='rtl'>טלפון: {report.phoneNumber}</div>
                        <div dir='rtl'>מיקום: {report.place}</div>
                        <div dir='rtl'>אלים: {report.vailent}</div>
                        <div dir='rtl'>הערות: {report.exstraDetails}</div>
                    </Modal>

                    <div className="btn-group dropup">
                        <button type="button" className="remove-borders" data-bs-toggle="dropdown" aria-expanded="false" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
                            <div className='more-options-icon-container'>
                                <IoMdMore />
                            </div>
                            <div className='popper'>
                                <p>More options</p>
                            </div>
                        </button>
                        <ul className="dropdown-menu" dir='rtl'>
                            <li><a className="dropdown-item" dir='rtl'>לא נמצא</a></li>
                            <li><a className="dropdown-item" dir='rtl'>טופל בשטח ושוחרר</a></li>
                            <li><a className="dropdown-item" dir='rtl'>טופל בשטח והועבר לוטרינריה</a></li>
                            <li><a className="dropdown-item" dir='rtl'>הועבר לוטרינריה</a></li>
                            <li><a className="dropdown-item" dir='rtl'>החיה נמצא מתה בשטח</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item deteleReport" dir='rtl'>מחיקת דיווח</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default PetCard;