import React from 'react';
import { Formik, Form, Field } from 'formik';

const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    location: '',
    //UTM
    utm_source: '',
    utm_medium: '',
    utm_compaign: '',
    utm_term:'',
    utm_content:''
}

const LeadGenerationForm = () => {

    const handleSubmitFormik = (values, actions) => {
       const urlSearchPharamsIntance = new URLSearchParams(window.location.search);
       values.utm_source = urlSearchPharamsIntance.get('utm_source');
       values.utm_medium = urlSearchPharamsIntance.get('utm_medium');
       values.utm_compaign = urlSearchPharamsIntance.get('utm_compaign');
       values.utm_term = urlSearchPharamsIntance.get('utm_term');
       values.utm_content= urlSearchPharamsIntance.get('utm_content')

       console.log(values);
       actions.resetForm();
    }


    return (
        <Formik initialValues={initialState} onSubmit={handleSubmitFormik}>
            {() => (
              <Form>
                  <Field name='email' placeholder='Type your emai'/>
                  <Field name='firstName' placeholder='Type your first name'/>
                  <Field name='lastName' placeholder='Type your last name'/>
                  <Field name='location' placeholder='Type your location'/>
                  <button type='submit'>Send</button>
              </Form>
            )}
        </Formik>
    );
}

export default LeadGenerationForm;
