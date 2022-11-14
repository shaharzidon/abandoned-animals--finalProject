import './petForm.css'
import { Formik } from "formik";
import * as Yup from "yup";

// import { useDispatch } from "react-redux";
// import { update } from '../../redux/slicer/FormsSlice';

const PetForm = ({ donation }) => {
    let windowWidth = window.innerWidth;
    const schema = Yup.object().shape({
        fullName: Yup.string()
            .required("Pleasse enter your name"),

        email: Yup.string().email()
            .required("Pleasse enter password"),

        phone: Yup.string()
            .required("Pleasse enter your password again")
            .min(10, "Phone number should containe 10 numbers exactly")
            .max(10, "Phone number should containe 10 numbers exactly")
            .matches(/[0-9]/, "phone number can contain numbers only."),

        size: Yup.string()
            .required("Pleasse enter the Animal"),

        color: Yup.string()
            .required("Pleasse enter the Animal"),

        picture: Yup.string()
            .required("Pleasse enter the Animal"),

        place: Yup.string()
            .required("Pleasse enter the Animal"),

        voilent: Yup.string()
            .required("Pleasse enter the Animal"),

        when: Yup.string()
            .required("Pleasse enter the Animal"),

        type: Yup.string()
            .required("Pleasse enter the Animal"),

        extraDetails: Yup.string()
            .required("Pleasse enter the Animal"),
    });

    const handleSubmition = (values) => {
        const value = {
            fullName: values.fullName,
            email: values.email,
            phone: values.phone,
            color: values.color,
            picture: values.picture,
            place: values.place,
            voilent: values.voilent,
            when: values.when,
            type: values.type,
            extraDetails: values.extraDetails,

        };
        // dispatch(update(value));
    };
    // const dispatch = useDispatch();

    return (
        <div className={donation ? 'footer-container-without-mt' : "footer-container"}>
            {windowWidth > 500 &&
                <div className='form-contact-container'>
                    <div className="form-container">
                        <Formik
                            initialValues={{
                                fullName: "",
                                email: "",
                                phone: "",
                                color: "",
                                picture: "",
                                place: "",
                                voilent: "",
                                when: "",
                                type: "",
                                extraDetails: "",
                            }}
                            onSubmit={(values) => handleSubmition(values)}
                            validationSchema={schema}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                errors,
                                touched,
                            }) => (

                                <form action="" onSubmit={handleSubmit} noValidate>
                                    <div className="form-floating-form-inputs">
                                        <input name="fullName" type="text" className="form-control" id="floatingInput" placeholder="שם הפונה *" onChange={handleChange} value={values.fullName} onBlur={handleBlur} />
                                        <label for="floatingInput" className="form-label"></label>
                                        <p className="error-message">{errors.fullName && touched.fullName && errors.fullName}</p>
                                    </div>
                                    <div className="form-floating-form-inputs">
                                        <input name="email" type="email" className="form-control" id="floatingInput" placeholder="כתובת אי-מייל *" onChange={handleChange} value={values.email} onBlur={handleBlur} />
                                        <label for="floatingInput" className="form-label" >  </label>
                                        <p className="error-message">{errors.email && touched.email && errors.email}</p>
                                    </div>
                                    <div className="form-floating-form-inputs">
                                        <input name="phone" type="text" className="form-control" id="floatingInput" placeholder="טלפון*" onChange={handleChange} value={values.phone} onBlur={handleBlur} />
                                        <label for="floatingInput" className="form-label">  </label>
                                        <p className="error-message">{errors.phone && touched.phone && errors.phone}</p>
                                    </div>
                                    <div className="form-floating-form-inputs">
                                        <textarea className="form-control" id="floatingInput" rows="3" placeholder="תוכן הפנייה *"></textarea>
                                        <label for="floatingInput" className="form-label"></label>
                                    </div>
                                    <div className="form-floating-form-inputs">
                                        <input name="size" type="text" className="form-control" id="floatingInput" placeholder="מידה*" onChange={handleChange} value={values.size} onBlur={handleBlur} />
                                        <label for="floatingInput" className="form-label">  </label>
                                        <p className="error-message">{errors.size && touched.size && errors.size}</p>
                                    </div>
                                    <div className="form-floating-form-inputs">
                                        <input name="color" type="text" className="form-control" id="floatingInput" placeholder="צבע*" onChange={handleChange} value={values.color} onBlur={handleBlur} />
                                        <label for="floatingInput" className="form-label">  </label>
                                        <p className="error-message">{errors.color && touched.color && errors.color}</p>
                                    </div>
                                    <div className="form-floating-form-inputs">
                                        <input name="picture" type="text" className="form-control" id="floatingInput" placeholder="תמונה*" onChange={handleChange} value={values.picture} onBlur={handleBlur} />
                                        <label for="floatingInput" className="form-label">  </label>
                                        <p className="error-message">{errors.picture && touched.picture && errors.picture}</p>
                                    </div>
                                    <div className="form-floating-form-inputs">
                                        <input name="place" type="text" className="form-control" id="floatingInput" placeholder="מיקום*" onChange={handleChange} value={values.place} onBlur={handleBlur} />
                                        <label for="floatingInput" className="form-label">  </label>
                                        <p className="error-message">{errors.place && touched.place && errors.place}</p>
                                    </div>
                                    <div className="form-floating-form-inputs">
                                        <input name="voilent" type="text" className="form-control" id="floatingInput" placeholder="בעל חיים אלים?*" onChange={handleChange} value={values.voilent} onBlur={handleBlur} />
                                        <label for="floatingInput" className="form-label">  </label>
                                        <p className="error-message">{errors.voilent && touched.voilent && errors.voilent}</p>
                                    </div>
                                    <div className="form-floating-form-inputs">
                                        <input name="when" type="text" className="form-control" id="floatingInput" placeholder="תאריך ושעה*" onChange={handleChange} value={values.when} onBlur={handleBlur} />
                                        <label for="floatingInput" className="form-label">  </label>
                                        <p className="error-message">{errors.when && touched.when && errors.when}</p>
                                    </div>
                                    <div className="form-floating-form-inputs">
                                        <input name="extraDetails" type="text" className="form-control" id="floatingInput" placeholder="פרטים נוספים*" onChange={handleChange} value={values.extraDetails} onBlur={handleBlur} />
                                        <label for="floatingInput" className="form-label">  </label>
                                        <p className="error-message">{errors.extraDetails && touched.extraDetails && errors.extraDetails}</p>
                                    </div>
                                    <div className="input-group mb-3">
                                        <label className="input-group-text" for="inputGroupFile01">Upload</label>
                                        <input type="file" className="form-control" id="inputGroupFile01" />
                                    </div>

                                    <button type="submit" className="btn btn-primary">שליחה</button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            }
        </div>
    )
}

export default PetForm