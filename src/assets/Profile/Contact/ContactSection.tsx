// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";
// import * as Yup from "yup";
// import teamMembers from "../../../../data/team";
// import { createSlug } from "../../../slug/utils";
// import { SectionProps } from "../../Home/App";

// export interface FormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
//   message: string;
// }

// const schema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, "Please make sure your first name is at least 2 letters.")
//     .max(200, "That's a bit too long. Try shortening it.")
//     .required("No need to be shy. What's your name?"),
//   lastName: Yup.string()
//     .min(2, "Please make sure your last name is at least 2 letters.")
//     .max(200, "That's a bit too long. Try shortening it.")
//     .required(
//       "To make this process a bit smoother, we also need your last name."
//     ),
//   email: Yup.string()
//     .email(
//       "Hmm, that doesn't look quite right. Your email address should look like something like this: example@company.se"
//     )
//     .matches(
//       /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//       "Hmm, that doesn't look quite right. Your email address should look like something like this: example@company.se"
//     )
//     .required("We need your email address to get back to you."),
//   message: Yup.string()
//     .min(10, "Please give us a bit more information about your request.")
//     .max(10000, "That's a bit too long. Try shortening it.")
//     .required("Please write us a message, we'd love to hear from you!"),
// });

// export default function ContactSection({ id }: SectionProps) {
//   const [isSent, setSent] = useState(false);
//   const [transitionStatus, setTransitionStatus] = useState(false);
//   const [firstName, setFirstName] = useState("");

//   const handleTransition = () => {
//     setTransitionStatus(true);
//     setTimeout(() => {
//       setSent(true);
//       setTransitionStatus(false);
//     }, 200);
//   };

//   // const onSubmit = (
//   //   data: FormValues,
//   //   {
//   //     setSubmitting,
//   //     resetForm,
//   //   }: {
//   //     setSubmitting: (isSubmitting: boolean) => void;
//   //     resetForm: (nextState?: any) => void;
//   //   }
//   // ) => {
//   //   handleTransition();
//   //   setFirstName(data.firstName);
//   //   setTimeout(() => {
//   //     resetForm();
//   //     setSubmitting(false);
//   //   }, 200);
//   // };
//   const onSubmit = async (data: FormValues, { resetForm, setSubmitting }: any) => {
//   try {
//     setSubmitting(true);
//     const res = await fetch("http://localhost:5000/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     const result = await res.json();

//     if (result.success) {
//       setSent(true); // existing success state
//       resetForm();
//     } else {
//       alert("Something went wrong! Please try again.");
//     }
//   } catch (error) {
//     console.error(error);
//     alert("Something went wrong! Please try again.");
//   } finally {
//     setSubmitting(false);
//   }
// };


//   const { name } = useParams();

//   const teamMember = teamMembers.find(
//     (member) => createSlug(member.name) === name
//   );

//   if (!teamMember) {
//     return <div>Contact information not found!</div>;
//   }

//   return (
//     <>
//       <TransitionWrapper $transitionStatus={transitionStatus} id={id}>
//         {!isSent ? (
//           <>
//             <div className="grid-container">
//               <FormTitle>Send me a message</FormTitle>
//             </div>
//             <div className="grid-container">
//               <div className="grid">
//                 <Formik
//                   initialValues={{
//                     firstName: "",
//                     lastName: "",
//                     email: "",
//                     message: "",
//                   }}
//                   validationSchema={schema}
//                   onSubmit={onSubmit}
//                 >
//                   <Form style={{ maxWidth: "700px" }}>
//                     <ContactFormRow>
//                       <label>
//                         <span style={{ fontWeight: "bold" }}>
//                           First Name <span className="required">*</span>
//                         </span>
//                         <StyledField type="text" name="firstName" />
//                         <ErrorText>
//                           <ErrorMessage name="firstName" />
//                         </ErrorText>
//                       </label>
//                       <label>
//                         <span style={{ fontWeight: "bold" }}>
//                           Last Name <span className="required">*</span>
//                         </span>
//                         <StyledField type="text" name="lastName" />
//                         <ErrorText>
//                           <ErrorMessage
//                             className="validation-error-message"
//                             name="lastName"
//                           />
//                         </ErrorText>
//                       </label>
//                     </ContactFormRow>
//                     <ContactFormRow>
//                       <label>
//                         <span style={{ fontWeight: "bold" }}>
//                           Email Address <span className="required">*</span>
//                         </span>
//                         <StyledField type="email" name="email" />
//                         <ErrorText>
//                           <ErrorMessage name="email" />
//                         </ErrorText>
//                       </label>
//                     </ContactFormRow>
//                     <ContactFormRow>
//                       <label>
//                         <span style={{ fontWeight: "bold" }}>
//                           Message <span className="required">*</span>
//                         </span>
//                         <Field
//                           as="textarea"
//                           name="message"
//                           maxLength="10000"
//                           style={{
//                             fontFamily: '"Space Grotesk", sans-serif',
//                             padding: "8px",
//                             height: "120px",
//                             boxSizing: "border-box",
//                           }}
//                         />
//                         <ErrorText>
//                           <ErrorMessage name="message" />
//                         </ErrorText>
//                       </label>
//                     </ContactFormRow>
//                     <Button type="submit">Send Message</Button>
//                   </Form>
//                 </Formik>
//               </div>
//             </div>
//             <div className="grid-container">
//               <Title>Or reach me in another way</Title>
//               <div className="grid">
//                 <ContactLinksContainer>
//                   <ContactInfo>
//                     <a className="email" href={`mailto:${teamMember.mail}`}>
//                       {teamMember.mail}
//                     </a>
//                   </ContactInfo>
//                   <ContactInfo>
//                     <a href={`tel:+${teamMember.phone}`}>{teamMember.phone}</a>
//                   </ContactInfo>
//                 </ContactLinksContainer>
//               </div>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="grid-container">
//               <FormTitle>
//                 Thank you for reaching out to us, {firstName}!
//               </FormTitle>
//             </div>
//             <div className="grid-container">
//               <div className="grid">
//                 <Paragraph>
//                   I'm thrilled to hear from you, and I will get back to you as
//                   soon as humanly possible. In the meanwhile, why not delve into
//                   the <a href="/cases">cases section</a> and have a look at some
//                   of the many projects we've brought to life together with our
//                   partners? Or perhaps get to know my colleagues a little better
//                   in the <a href="/team">team section</a>?
//                 </Paragraph>
//                 <Paragraph style={{ marginBottom: "0rem" }}>
//                   See you soon,
//                 </Paragraph>
//                 <Paragraph style={{ fontWeight: "bold" }}>
//                   Your new business partner
//                 </Paragraph>
//               </div>
//             </div>
//           </>
//         )}
//       </TransitionWrapper>
//     </>
//   );
// }

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import teamMembers from "../../../../data/team";
import { createSlug } from "../../../slug/utils";
import { SectionProps } from "../../Home/App";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Please make sure your first name is at least 2 letters.")
    .max(200, "That's a bit too long. Try shortening it.")
    .required("No need to be shy. What's your name?"),
  lastName: Yup.string()
    .min(2, "Please make sure your last name is at least 2 letters.")
    .max(200, "That's a bit too long. Try shortening it.")
    .required(
      "To make this process a bit smoother, we also need your last name."
    ),
  email: Yup.string()
    .email(
      "Hmm, that doesn't look quite right. Your email address should look like something like this: example@company.se"
    )
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Hmm, that doesn't look quite right. Your email address should look like something like this: example@company.se"
    )
    .required("We need your email address to get back to you."),
  message: Yup.string()
    .min(10, "Please give us a bit more information about your request.")
    .max(10000, "That's a bit too long. Try shortening it.")
    .required("Please write us a message, we'd love to hear from you!"),
});

export default function ContactSection({ id }: SectionProps) {
  const [isSent, setSent] = useState(false);
  const [transitionStatus, setTransitionStatus] = useState(false);
  const [firstName, setFirstName] = useState("");

  const handleTransition = () => {
    setTransitionStatus(true);
    setTimeout(() => {
      setSent(true);
      setTransitionStatus(false);
    }, 200);
  };

  const onSubmit = async (data: FormValues, { resetForm, setSubmitting }: any) => {
    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {  // Relative path works with Vercel serverless
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.success) {
        setFirstName(data.firstName);
        handleTransition();
        resetForm();
      } else {
        alert("Something went wrong! Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong! Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const { name } = useParams();
  const teamMember = teamMembers.find(
    (member) => createSlug(member.name) === name
  );

  if (!teamMember) return <div>Contact information not found!</div>;

  return (
    <TransitionWrapper $transitionStatus={transitionStatus} id={id}>
      {!isSent ? (
        <>
          <div className="grid-container">
            <FormTitle>Send me a message</FormTitle>
          </div>
          <div className="grid-container">
            <div className="grid">
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
                <Form style={{ maxWidth: "700px" }}>
                  <ContactFormRow>
                    <label>
                      <span style={{ fontWeight: "bold" }}>
                        First Name <span className="required">*</span>
                      </span>
                      <StyledField type="text" name="firstName" />
                      <ErrorText>
                        <ErrorMessage name="firstName" />
                      </ErrorText>
                    </label>
                    <label>
                      <span style={{ fontWeight: "bold" }}>
                        Last Name <span className="required">*</span>
                      </span>
                      <StyledField type="text" name="lastName" />
                      <ErrorText>
                        <ErrorMessage name="lastName" />
                      </ErrorText>
                    </label>
                  </ContactFormRow>

                  <ContactFormRow>
                    <label>
                      <span style={{ fontWeight: "bold" }}>
                        Email Address <span className="required">*</span>
                      </span>
                      <StyledField type="email" name="email" />
                      <ErrorText>
                        <ErrorMessage name="email" />
                      </ErrorText>
                    </label>
                  </ContactFormRow>

                  <ContactFormRow>
                    <label>
                      <span style={{ fontWeight: "bold" }}>
                        Message <span className="required">*</span>
                      </span>
                      <Field
                        as="textarea"
                        name="message"
                        maxLength={10000}
                        style={{
                          fontFamily: '"Space Grotesk", sans-serif',
                          padding: "8px",
                          height: "120px",
                          boxSizing: "border-box",
                        }}
                      />
                      <ErrorText>
                        <ErrorMessage name="message" />
                      </ErrorText>
                    </label>
                  </ContactFormRow>

                  <Button type="submit">Send Message</Button>
                </Form>
              </Formik>
            </div>
          </div>

          <div className="grid-container">
            <Title>Or reach me in another way</Title>
            <div className="grid">
              <ContactLinksContainer>
                <ContactInfo>
                  <a className="email" href={`mailto:${teamMember.mail}`}>
                    {teamMember.mail}
                  </a>
                </ContactInfo>
                <ContactInfo>
                  <a href={`tel:+${teamMember.phone}`}>{teamMember.phone}</a>
                </ContactInfo>
              </ContactLinksContainer>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="grid-container">
            <FormTitle>
              Thank you for reaching out to us, {firstName}!
            </FormTitle>
          </div>
          <div className="grid-container">
            <div className="grid">
              <Paragraph>
                I'm thrilled to hear from you, and I will get back to you as
                soon as possible. Meanwhile, check our <a href="/cases">cases</a> or <a href="/team">team section</a>.
              </Paragraph>
              <Paragraph style={{ marginBottom: "0rem" }}>
                See you soon,
              </Paragraph>
              <Paragraph style={{ fontWeight: "bold" }}>
                Your new business partner
              </Paragraph>
            </div>
          </div>
        </>
      )}
    </TransitionWrapper>
  );
}

// ========================== Styled Components ==========================
const FormTitle = styled.h3`
  grid-column: main;
  font-size: var(--font-size-m);
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

const Button = styled.button`
  margin-top: 1rem;
`;

const Title = styled.h3`
  grid-column: main;
  font-size: var(--font-size-m);
  padding-bottom: 1rem;
  padding-top: 3rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1.4rem;
  max-width: 750px;
`;

const ContactFormRow = styled.div`
  display: flex;

  &:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > *:first-child {
      margin-right: 14px;
      max-width: 48%;
    }
    & > *:last-child {
      margin-left: 14px;
      max-width: 48%;
    }
  }

  @media (max-width: 650px) {
    &:first-child {
      flex-direction: column;

      & > *:first-child {
        margin-right: 0;
        max-width: 100%;
      }

      & > *:last-child {
        margin-left: 0;
        max-width: 100%;
      }
    }
  }

  .required {
    color: #a92801;
  }
`;

const StyledField = styled(Field)`
  font-family: "Space Grotesk", sans-serif;
  padding: 8px;
  box-sizing: border-box;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const TransitionWrapper = styled.div<{ $transitionStatus: boolean }>`
  transition: opacity 0.2s ease-in-out;
  opacity: ${(props) => (props.$transitionStatus ? 0 : 1)};
  margin-bottom: 10rem;
  @media (max-width: 1000px) {
    margin-bottom: 6rem;
  }
  @media (max-width: 660px) {
    margin-bottom: 4rem;
  }
`;

const ContactLinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;

  a {
    text-decoration: none;
    margin-bottom: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactInfo = styled.li`
  position: relative;
  margin-left: 1.2rem;
  padding: 0.5rem;
  &::before {
    content: "• ";
    position: absolute;
    top: 45%;
    left: -1.2rem;
    transform: translateY(-50%);
    color: var(--color-accent);
    font-size: var(--font-size-m);
  }
  @media (max-width: 660px) {
    font-size: var(--font-size-s);
    margin-left: 0rem;
    &::before {
      left: -0.2rem;
    }
  }
`;

