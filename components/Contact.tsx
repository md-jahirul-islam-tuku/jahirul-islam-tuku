import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { PERSONAL_DETAILS } from "../constants";
import ButtonSpinner from "./ButtonSpinner";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };
  const form = useRef<HTMLFormElement | null>(null);
  const handleMessage = (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (!validate()) return;
    emailjs
      .sendForm(
        "service_mbqd7qo",
        "template_eog9pgd",
        form.current!,
        "3BJ0Rz1QiydsvKtlC",
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message sent successfully",
          timer: 1500,
          showConfirmButton: false,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.text || "Failed to send message",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 dark:bg-darkPrimary/95 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white dark:bg-white/5 rounded-[3rem] shadow-xl overflow-hidden border border-slate-100 dark:border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 bg-indigo-600 dark:bg-darkLinkActive p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Let's connect</h2>
              <p className="text-indigo-100 dark:text-white/80 mb-10 leading-relaxed">
                Whether you have a project in mind or just want to say hi, my
                inbox is always open.
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-5">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <p className="text-xs text-indigo-200 dark:text-white/60 uppercase font-bold tracking-widest">
                      Email Me
                    </p>
                    <p className="font-bold">{PERSONAL_DETAILS.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-5">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <p className="text-xs text-indigo-200 dark:text-white/60 uppercase font-bold tracking-widest">
                      Location
                    </p>
                    <p className="font-bold">{PERSONAL_DETAILS.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-200 dark:text-white/60 mb-6">
                  Follow My Work
                </p>
                <div className="flex space-x-4">
                  <a
                    href={PERSONAL_DETAILS.github}
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href={PERSONAL_DETAILS.linkedin}
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 p-12">
              <form
                ref={form}
                className="space-y-6"
                onSubmit={handleMessage}
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-slate-700 dark:text-white mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 dark:bg-white/10 border ${errors.name ? "border-red-500" : "border-slate-200 dark:border-white/20"} rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-white transition-all`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600 dark:text-red-400 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-slate-700 dark:text-white mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 dark:bg-white/10 border ${errors.email ? "border-red-500" : "border-slate-200 dark:border-white/20"} rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-white transition-all`}
                      placeholder="Your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 dark:text-red-400 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-slate-700 dark:text-white mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-slate-50 dark:bg-white/10 border ${errors.subject ? "border-red-500" : "border-slate-200 dark:border-white/20"} rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-white transition-all`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400 font-medium">
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-slate-700 dark:text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-slate-50 dark:bg-white/10 border ${errors.message ? "border-red-500" : "border-slate-200 dark:border-white/20"} rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-white transition-all resize-none`}
                    placeholder="Tell me about your vision..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400 font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full ${loading ? "bg-indigo-400" : "bg-indigo-600 dark:bg-darkLinkActive hover:opacity-90"} text-white py-4 rounded-xl font-bold text-lg transition-all active:scale-95 flex items-center justify-center shadow-lg`}
                >
                  {loading ? <ButtonSpinner /> : <>Send Message</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
