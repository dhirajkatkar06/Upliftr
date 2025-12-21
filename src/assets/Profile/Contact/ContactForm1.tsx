// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { useRef, useState } from "react";
// import styled from "styled-components";
// import * as Yup from "yup";
// import emailjs from "@emailjs/browser";

// // ------------------ TYPES ------------------
// interface FormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
//   message: string;
// }

// // ------------------ VALIDATION ------------------
// const schema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, "Please make sure your first name is at least 2 letters.")
//     .required("First name is required"),
//   lastName: Yup.string()
//     .min(2, "Please make sure your last name is at least 2 letters.")
//     .required("Last name is required"),
//   email: Yup.string()
//     .email("Please enter a valid email address.")
//     .required("Email is required"),
//   message: Yup.string()
//     .min(10, "Please give us a bit more information.")
//     .required("Message is required"),
// });

// // ------------------ PAGE ------------------
// export default function ContactForm() {
//   const [isSent, setSent] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const submitLockRef = useRef(false);

//   const onSubmit = async (
//     data: FormValues,
//     { resetForm, setSubmitting }: any
//   ) => {
//     if (submitLockRef.current) return;
//     submitLockRef.current = true;

//     // ✅ EmailJS template params
//     const templateParams: Record<string, string> = {
//       firstName: data.firstName,
//       lastName: data.lastName,
//       email: data.email,
//       message: data.message,
//     };

//     try {
//       // Admin email
//       await emailjs.send(
//         "service_3j56lfq",
//         "template_ka7zeiy",
//         templateParams,
//         "GMKElwlFnzP2YGuej"
//       );

//       // User confirmation email
//       await emailjs.send(
//         "service_3j56lfq",
//         "template_me80jv5",
//         templateParams,
//         "GMKElwlFnzP2YGuej"
//       );

//       setFirstName(data.firstName);
//       setSent(true);
//       resetForm();
//     } catch (err) {
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setSubmitting(false);
//       submitLockRef.current = false;
//     }
//   };

//   return (
//     <PageWrapper>
//       <FormCard>
//         {!isSent ? (
//           <>
//             <Title>Contact Us</Title>

//             <Formik
//               initialValues={{
//                 firstName: "",
//                 lastName: "",
//                 email: "",
//                 message: "",
//               }}
//               validationSchema={schema}
//               onSubmit={onSubmit}
//             >
//               <Form>
//                 <Row>
//                   <label>
//                     First Name *
//                     <StyledField name="firstName" />
//                     <ErrorText>
//                       <ErrorMessage name="firstName" />
//                     </ErrorText>
//                   </label>

//                   <label>
//                     Last Name *
//                     <StyledField name="lastName" />
//                     <ErrorText>
//                       <ErrorMessage name="lastName" />
//                     </ErrorText>
//                   </label>
//                 </Row>

//                 <label>
//                   Email *
//                   <StyledField type="email" name="email" />
//                   <ErrorText>
//                     <ErrorMessage name="email" />
//                   </ErrorText>
//                 </label>

//                 <label>
//                   Message *
//                   <Field
//                     as="textarea"
//                     name="message"
//                     rows={5}
//                     style={{ padding: "8px", fontFamily: "inherit" }}
//                   />
//                   <ErrorText>
//                     <ErrorMessage name="message" />
//                   </ErrorText>
//                 </label>

//                 <Button type="submit">Send Message</Button>
//               </Form>
//             </Formik>
//           </>
//         ) : (
//           <>
//             <Title>Thank you, {firstName}!</Title>
//             <Paragraph>
//               Your message has been sent successfully.  
//               We’ll get back to you shortly.
//             </Paragraph>
//           </>
//         )}
//       </FormCard>
//     </PageWrapper>
//   );
// }

// // ------------------ STYLES ------------------
// const PageWrapper = styled.div`
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 2rem;
// `;

// const FormCard = styled.div`
//   width: 100%;
//   max-width: 700px;
// `;

// const Title = styled.h2`
//   margin-bottom: 2rem;
// `;

// const Paragraph = styled.p`
//   font-size: 1rem;
// `;

// const Row = styled.div`
//   display: flex;
//   gap: 1rem;

//   @media (max-width: 600px) {
//     flex-direction: column;
//   }
// `;

// const StyledField = styled(Field)`
//   width: 100%;
//   padding: 8px;
//   box-sizing: border-box;
// `;

// const Button = styled.button`
//   margin-top: 1.5rem;
// `;

// const ErrorText = styled.div`
//   color: red;
//   font-size: 12px;
//   margin-top: 4px;
// `;

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

// ------------------ TYPES ------------------
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

// ------------------ VALIDATION ------------------
const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Please make sure your first name is at least 2 letters.")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Please make sure your last name is at least 2 letters.")
    .required("Last name is required"),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Please give us a bit more information.")
    .required("Message is required"),
});

// ------------------ PAGE ------------------
export default function ContactForm() {
  const [isSent, setSent] = useState(false);
  const [firstName, setFirstName] = useState("");
  const submitLockRef = useRef(false);

  const onSubmit = async (
    data: FormValues,
    { resetForm, setSubmitting }: any
  ) => {
    if (submitLockRef.current) return;
    submitLockRef.current = true;

    const templateParams: Record<string, string> = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      message: data.message,
    };

    try {
      // Admin email
      await emailjs.send(
        "service_3j56lfq",
        "template_ka7zeiy",
        templateParams,
        "GMKElwlFnzP2YGuej"
      );

      // User confirmation email
      await emailjs.send(
        "service_3j56lfq",
        "template_me80jv5",
        templateParams,
        "GMKElwlFnzP2YGuej"
      );

      setFirstName(data.firstName);
      setSent(true);
      resetForm();
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
      submitLockRef.current = false;
    }
  };

  return (
    <PageWrapper>
      <FormCard>
        {!isSent ? (
          <TwoColumn>
            {/* LEFT: FORM */}
            <FormWrapper>
              <Title>Contact Us</Title>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  message: "",
                }}
                validationSchema={schema}
                onSubmit={onSubmit}
              >
                <Form>
                  <Row>
                    <label>
                      First Name *
                      <StyledField name="firstName" />
                      <ErrorText>
                        <ErrorMessage name="firstName" />
                      </ErrorText>
                    </label>

                    <label>
                      Last Name *
                      <StyledField name="lastName" />
                      <ErrorText>
                        <ErrorMessage name="lastName" />
                      </ErrorText>
                    </label>
                  </Row>

                  <label>
                    Email *
                    <StyledField type="email" name="email" />
                    <ErrorText>
                      <ErrorMessage name="email" />
                    </ErrorText>
                  </label>

                  <label>
                    Message *
                    <Field
                      as="textarea"
                      name="message"
                      rows={5}
                      style={{ padding: "8px", fontFamily: "inherit" }}
                    />
                    <ErrorText>
                      <ErrorMessage name="message" />
                    </ErrorText>
                  </label>

                  <Button type="submit">Send Message</Button>
                </Form>
              </Formik>
            </FormWrapper>

            {/* RIGHT: IMAGE PLACEHOLDER */}
            <ImagePlaceholder>
              <p>Image will be displayed here</p>
            </ImagePlaceholder>
          </TwoColumn>
        ) : (
          <ThankYouMessage>
            <Title>Thank you, {firstName}!</Title>
            <Paragraph>
              Your message has been sent successfully. We’ll get back to you
              shortly.
            </Paragraph>
          </ThankYouMessage>
        )}
      </FormCard>
    </PageWrapper>
  );
}

// ------------------ STYLES ------------------
const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* align top */
  padding: 4rem 2rem;
`;

const FormCard = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const TwoColumn = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const FormWrapper = styled.div`
  flex: 1;
`;

const ImagePlaceholder = styled.div`
  flex: 1;
  border: 2px dashed #ccc;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  text-align: center;
  font-size: 1rem;
  color: #999;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const Button = styled.button`
  margin-top: 1.5rem;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

const ThankYouMessage = styled.div`
  text-align: center;
`;

