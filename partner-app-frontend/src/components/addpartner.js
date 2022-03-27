import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
const AddPartner = () => {
    const location = useLocation()
    let navigate = useNavigate();
    const { lat, lon } = location.state
    console.log(lat);
    console.log(lon);
    return (
        <div className='centered container'>
            <Formik
                initialValues={{ urlName: '', organization: '', customerLocations: '', workRemotely: false, website: '', officeLocation: '', officeAddress: '', officeLat: '', officeLon: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    navigate('/rangefilterpartner', { state: { lat: lat, lon: lon } });

                }}
                validationSchema={Yup.object({
                    urlName: Yup.string()
                        .max(100, 'Must be 100 characters or less')
                        .required('Url Name is required'),
                    organization: Yup.string()
                        .required('Organization is required'),
                    customerLocations: Yup.string()
                        .required('Customer Locations is required'),
                    website: Yup.string()
                        .required('Customer website is required'),
                    officeLocation: Yup.string()
                        .required('office location is required'),
                    officeAddress: Yup.string()
                        .required('office address is required'),
                    officeLat: Yup.number()
                        .required('office address  latitude is required'),
                    officeLon: Yup.number()
                        .required('office address longitude is required'),
                })}
            >
                {(formik, isSubmitting) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="urlName">Url Name</label>
                            <Field name="urlName" className={(formik.touched.urlName && formik.errors.urlName) ? 'form-control is-invalid' : 'form-control'} type="text" />
                            {formik.touched.urlName && formik.errors.urlName ? (
                                <div className="invalid-feedback">{formik.errors.urlName}</div>
                            ) : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="organization">Organization</label>
                            <Field name="organization" className={(formik.touched.organization && formik.errors.organization) ? 'form-control is-invalid' : 'form-control'} type="text" />
                            {formik.touched.organization && formik.errors.organization ? (
                                <div className="invalid-feedback">{formik.errors.organization}</div>
                            ) : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="customerLocations">Customer Locations</label>
                            <Field name="customerLocations" className={(formik.touched.subject && formik.errors.customerLocations) ? 'form-control is-invalid' : 'form-control'} type="text" />
                            {formik.touched.customerLocations && formik.errors.customerLocations ? (
                                <div className="invalid-feedback">{formik.errors.customerLocations}</div>
                            ) : null}
                        </div>

                        <div className="form-check">
                            <Field name="workRemotely" className="form-check-input" type="checkbox" id="workRemotely" />
                            <label className="form-check-label" htmlFor="workRemotely">Work Remotely</label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="website">website</label>
                            <Field name="website" className={(formik.touched.website && formik.errors.website) ? 'form-control is-invalid' : 'form-control'} type="text" />
                            {formik.touched.website && formik.errors.website ? (
                                <div className="invalid-feedback">{formik.errors.website}</div>
                            ) : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="website">office location</label>
                            <Field name="officeLocation" className={(formik.touched.officeLocation && formik.errors.officeLocation) ? 'form-control is-invalid' : 'form-control'} type="text" />
                            {formik.touched.officeLocation && formik.errors.officeLocation ? (
                                <div className="invalid-feedback">{formik.errors.officeLocation}</div>
                            ) : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="officeAddress">Office Address </label>
                            <Field name="officeAddress" className={(formik.touched.officeAddress && formik.errors.officeAddress) ? 'form-control is-invalid' : 'form-control'} type="text" />
                            {formik.touched.officeAddress && formik.errors.officeAddress ? (
                                <div className="invalid-feedback">{formik.errors.officeAddress}</div>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="officeLat">Office Address Latitude</label>
                            <Field name="officeLat" className={(formik.touched.officeLat && formik.errors.officeLat) ? 'form-control is-invalid' : 'form-control'} type="number" />
                            {formik.touched.officeLat && formik.errors.officeLat ? (
                                <div className="invalid-feedback">{formik.errors.officeLat}</div>
                            ) : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="officeLon">Office Address Longitude</label>
                            <Field name="officeLon" className={(formik.touched.officeLon && formik.errors.officeLon) ? 'form-control is-invalid' : 'form-control'} type="number" />
                            {formik.touched.officeLon && formik.errors.officeLon ? (
                                <div className="invalid-feedback">{formik.errors.officeLon}</div>
                            ) : null}
                        </div>
                        <br></br>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Submit"}</button>
                        </div>

                    </Form>
                )
                }
            </Formik >
        </div>
    );
};
export default AddPartner;