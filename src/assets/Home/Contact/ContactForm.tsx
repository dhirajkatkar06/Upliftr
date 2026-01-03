
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

//     const templateParams: Record<string, string> = {
//       firstName: data.firstName,
//       lastName: data.lastName,
//       email: data.email,
//       message: data.message,
//     };

//     try {
//       await emailjs.send(
//         "service_3j56lfq",
//         "template_ka7zeiy",
//         templateParams,
//         "GMKElwlFnzP2YGuej"
//       );
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
//       <ContentWrapper>
//         <FormCard>
//           {!isSent ? (
//             <>
//               <Title>Contact Us</Title>

//               <Formik
//                 initialValues={{
//                   firstName: "",
//                   lastName: "",
//                   email: "",
//                   message: "",
//                 }}
//                 validationSchema={schema}
//                 onSubmit={onSubmit}
//               >
//                 <Form>
//                   <Row>
//                     <label>
//                       First Name *
//                       <StyledField name="firstName" />
//                       <ErrorText>
//                         <ErrorMessage name="firstName" />
//                       </ErrorText>
//                     </label>

//                     <label>
//                       Last Name *
//                       <StyledField name="lastName" />
//                       <ErrorText>
//                         <ErrorMessage name="lastName" />
//                       </ErrorText>
//                     </label>
//                   </Row>

//                   <label>
//                     Email *
//                     <StyledField type="email" name="email" />
//                     <ErrorText>
//                       <ErrorMessage name="email" />
//                     </ErrorText>
//                   </label>

//                   <label>
//                     Message *
//                     <Field
//                       as="textarea"
//                       name="message"
//                       rows={5}
//                       style={{ padding: "8px", fontFamily: "inherit" }}
//                     />
//                     <ErrorText>
//                       <ErrorMessage name="message" />
//                     </ErrorText>
//                   </label>

//                   <Button type="submit">Send Message</Button>
//                 </Form>
//               </Formik>
//             </>
//           ) : (
//             <>
//               <Title>Thank you, {firstName}!</Title>
//               <Paragraph>
//                 Your message has been received successfully.  
//                 We’ll get back to you shortly.
//               </Paragraph>
//             </>
//           )}
//         </FormCard>

//         {/* Right Side Image Placeholder */}
//         <ImageCard>
//           <PlaceholderImage src="/images/gage.png" alt="Demo" />
//         </ImageCard>
//       </ContentWrapper>
//     </PageWrapper>
//   );
// }

// // ------------------ STYLES ------------------
// const PageWrapper = styled.div`
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   padding: 2rem;
// `;

// const ContentWrapper = styled.div`
//   display: flex;
//   gap: 2rem;
//   width: 100%;
//   max-width: 1200px;

//   @media (max-width: 900px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const FormCard = styled.div`
//   flex: 1;
// `;

// const ImageCard = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const PlaceholderImage = styled.img`
//   max-width: 60%;
//   border-radius: 8px;
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
  service: string; // ✅ added
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
  service: Yup.string().required("Please select a service"),
  message: Yup.string()
    .min(10, "Please give us a bit more information.")
    .required("Message is required"),
});


// ------------------ PAGE ------------------
export default function ContactForm() {
  const [isSent, setSent] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setSubmittingState] = useState(false);
  const submitLockRef = useRef(false);

  const onSubmit = async (data: FormValues, { resetForm }: any) => {
    if (submitLockRef.current) return;
    submitLockRef.current = true;
    setSubmittingState(true);

    const templateParams: Record<string, string> = {
      name: `${data.firstName} ${data.lastName}`, // ✅ merged EXACTLY
      email: data.email,
      service: data.service,
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

      // Auto-hide Thank You message after 5 seconds
      setTimeout(() => {
        setSent(false);
        resetForm();
      }, 5000);

    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      submitLockRef.current = false;
      setSubmittingState(false);
    }
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <FormCard>
          {!isSent ? (
            <>
              <Title>Contact Us</Title>

              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  service: "",
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
                    Service *
                    <Field as="select" name="service">
                      <option value="">Select a service</option>
                      <option value="Performance Marketing">Performance Marketing</option>
                      <option value="Social Media Management">Social Media Management</option>
                      <option value="Content Creation">Content Creation</option>
                      <option value="Production Shoot">Production Shoot</option>
                      <option value="Creative Ideation">Creative Ideation</option>
                    </Field>
                    <ErrorText>
                      <ErrorMessage name="service" />
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

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <Spinner /> : "Send Message"}
                  </Button>
                </Form>
              </Formik>
            </>
          ) : (
            <>
              <Title>Thank you, {firstName}!</Title>
              <Paragraph>
                Your message has been received successfully.  
                We’ll get back to you shortly.
              </Paragraph>
            </>
          )}
        </FormCard>

        {/* Right Side Image Placeholder */}
        <ImageCard>
          <PlaceholderImage src="/images/gage.png" alt="Demo" />
        </ImageCard>
      </ContentWrapper>
    </PageWrapper>
  );
}

// ------------------ STYLES ------------------
const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FormCard = styled.div`
  flex: 1;
`;

const ImageCard = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaceholderImage = styled.img`
  max-width: 60%;
  border-radius: 8px;
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
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid #fff;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

