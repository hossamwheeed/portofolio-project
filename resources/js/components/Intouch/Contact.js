import React from 'react';
import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup';
import { Styles, Container, Submit } from './Contact.styles';
import Intouch from './Intouch';

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} >{label}</label>
      <input className='text-input' {...field} {...props} />
      {
        meta.touched && meta.error ? (
          <div className='error' >{meta.error}</div>
        ) : null}
    </>
  )
}

const ContactForm = () => {
  return (
    <>
      <Container>
        <Intouch></Intouch>
        <Styles>
          <Formik
            initialValues={{
              name: '',
              email: '',
              mobile: '',
              message: ''
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .min(3, 'Must be at least 3 characters')
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
              email: Yup.string()
                .email('Invalid email')
                .required('Required'),
              mobile: Yup.string()
                .matches(/^((\\+91-?)|0)?[0-9]{11}$/, { message: 'Please enter valid number', excludeEmptyString: false })
                .required('Required'),
              message: Yup.string()
                .min(20, 'Must be at least 20 characters')
                .max(100, 'Must be 100 characters or less')
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                resetForm();
                setSubmitting(false)
              }, 3000)
            }}
          >
            {
              props => (
                <Form>
                  <h3>Contact Us</h3>
                  <CustomTextInput label="Name" name="name" type="text" placeholder="Ahmed" />
                  <CustomTextInput label="Email" name="email" type="text" placeholder="email@mail.com" />
                  <CustomTextInput label="Mobile Number" name="mobile" type="text" placeholder="00201012345678" />
                  <CustomTextInput label="Message" name="message" type="text" placeholder="Message" />
                  <Submit type='submit'>
                    {props.isSubmitting ? '...loading' : 'Send'}
                  </Submit>
                </Form>
              )
            }
          </Formik>
        </Styles>
      </Container>
      <iframe
        title='location'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.5160822872676!2d31.13805870743716!3d30.000678500478983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145845576e7d76ad%3A0x4320b63c86910d1d!2z2YrZhtin2KjZiti5INmE2YTZh9mG2K_Ys9ipINmI2KfZhNiq2KzYp9ix2Kk!5e0!3m2!1sen!2seg!4v1621419038913!5m2!1sen!2seg"

        style={{ width: "100%", height: "50vh", "border": "0" }}
        loading="lazy"></iframe>
    </>
  )
}

export default ContactForm;
