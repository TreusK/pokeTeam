import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pokeTeam",
        "template_pokeTemplate",
        form.current,
        "M-rnkI-6UX3Kau08u"
      )
      .then(
        (result) => {
          alert('Mesage sent!');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="bg-[#2d3436] flex-1">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our favorite mon? Let us know.</p>
        <form action="#" className="space-y-8" ref={form} onSubmit={sendEmail}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
            <input type="email" id="email" name="contactEmail" className="shadow-sm  border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
            <input type="text" id="subject" name="contactSubject" className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" required />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-400">Your message</label>
            <textarea id="message" rows="6" name="contactMessage" className="block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="border-solid border-2 border-red-600 hover:bg-red-600 cursor-pointer text-white hover:text-black p-2 flex justify-center rounded w-40">Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact