// import { React, useState } from 'react';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   try {
//     e.preventDefault();
//   } catch (error) {
//     console.error(error);
//   }
//   return (
//     <div>
//       Contact
//       <form
//         action={FORM_ENDPOINT}
//         onSubmit={handleSubmit}
//         method='POST'
//         target='blank'
//       >
//         <div>
//           <input
//             id='form-name'
//             name='name'
//             type='text'
//             placeholder='Name'
//           ></input>
//           <input
//             id='form-email'
//             name='email'
//             type='text'
//             placeholder='Email'
//           ></input>
//           <input
//             id='form-message'
//             name='message'
//             type='text'
//             placeholder='Message'
//           ></input>
//           <button id='form-submit' type='submit'>
//             Send Message
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
