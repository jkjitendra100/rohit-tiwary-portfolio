import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { subjectsList } from "../../jsonFiles/subjectsList";
import { motion } from "framer-motion";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmitContactData = async () => {};

  let inputClass =
    "w-full focus:outline-secondary rounded-lg p-2 border-t border-borderColor shadow-lg shadow-shadowColor bg-white duration-500";
  let errorClass =
    "w-full shadow-lg shadow-rose-200 bg-rose-50 focus:outline-rose-500 border-rose-500 rounded-lg p-2 border duration-500 placeholder:text-[#fb7185]";

  return (
    <motion.div className="mt-20 mb-10" id="contact-us">
      <div className="">
        <motion.p
          className="bg-gradient-to-b from-primary via-rose-600 to-secondary bg-clip-text text-transparent text-center font-semibold"
          initial={{ opacity: 0.5, scale: 1, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          CONTACT
        </motion.p>
        <motion.h1
          className="bg-gradient-to-b from-primary via-rose-600 to-secondary bg-clip-text text-transparent xl:text-7xl text-5xl font-bold text-center"
          initial={{ opacity: 0.5, scale: 1, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact With Me
        </motion.h1>
        <div className="xl:mt-16 mt-10 lg:grid grid-cols-6 gap-6">
          {/* About Self */}
          <motion.div
            className="col-span-2 md:flex gap-4 lg:block bg-white shadow-lg border border-borderColor shadow-shadowColor rounded-xl p-6"
            initial={{ opacity: 0.5, scale: 1, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png"
              className="mx-auto w-fit md:h-40 sm:h-fit lg:h-fit rounded-xl"
              alt="hand-shake"
            />

            <div className="mt-4 sm:mt-0">
              <h3 className="lg:mt-4 font-bold lg:text-3xl md:text-2xl text-xl">
                Rohit Tiwary
              </h3>
              <p className="lg:mt-4">Founder of Asha Industries</p>

              <h6 className="lg:text-lg text-sm leading-6 lg:mt-4">
                Asha Industries is celebrated for delivering top-quality
                products and excellence at competitive prices, consistently
                meeting industry standards and exceeding customer expectations.
              </h6>

              <p className="lg:mt-4 text-sm flex items-center gap-2">
                Phone
                <a href="tel:+918789857503">+91 8789857503</a>
              </p>

              <p className="lg:mt-2 text-sm flex items-center gap-2">
                Email
                <a href="mailto:contact@ashaind.in">contact@ashaind.in</a>
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="mt-10 lg:mt-0 col-span-4 bg-white shadow-lg border border-borderColor shadow-shadowColor rounded-xl p-6"
            onSubmit={handleSubmit(handleSubmitContactData)}
            initial={{ opacity: 0.5, scale: 1, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="sm:grid grid-cols-2 gap-4">
              {/* Your name */}
              <div>
                <p className="text-sm font-bold bg-gradient-to-t from-primary via-rose-600 to-secondary bg-clip-text text-transparent">
                  YOUR NAME
                </p>
                <input
                  className={`${inputClass} ${errors?.name && errorClass}`}
                  placeholder="Enter your name"
                  {...register("name", { required: "Name required" })}
                />
              </div>

              {/* Phone Number */}
              <div className="mt-6 sm:mt-0">
                <p className="text-sm font-bold bg-gradient-to-t from-primary via-rose-600 to-secondary bg-clip-text text-transparent">
                  PHONE NUMBER
                </p>
                <div
                  className={`${inputClass} ${errors?.mobile && errorClass} flex items-center gap-2`}
                >
                  <input disabled value="+91" className="w-8 bg-white" />
                  <input
                    className="w-full focus:outline-none"
                    placeholder="Ex - XXXXXXXXXX"
                    {...register("mobile", {
                      required: "Phone no. required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit mobile number",
                      },
                    })}
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mt-6">
              <p className="text-sm font-bold bg-gradient-to-t from-primary via-rose-600 to-secondary bg-clip-text text-transparent">
                EMAIL
              </p>
              <input
                className={`${inputClass} ${errors?.email && errorClass}`}
                placeholder="Ex - your-name@example.com"
                type="email"
                {...register("email", {
                  required: false,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>

            {/* Subject */}
            <div className="mt-6">
              <p className="text-sm font-bold bg-gradient-to-t from-primary via-rose-600 to-secondary bg-clip-text text-transparent">
                SUBJECT
              </p>
              <select
                className={`${inputClass} ${errors?.subject && errorClass} p-2.5`}
                {...register("subject", { required: "Subject required" })}
              >
                <option value="" className=" disabled:text-primary">
                  Select an option
                </option>
                {subjectsList?.map((item, index) => (
                  <option
                    key={index}
                    value={item?.slug}
                    className="text-secondary"
                  >
                    {item?.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Your Message */}
            <div className="mt-6">
              <p className="text-sm font-bold bg-gradient-to-t from-primary via-rose-600 to-secondary bg-clip-text text-transparent">
                YOUR MESSAGE
              </p>
              <textarea
                className={`resize-none ${watch("message" || "")?.length > 1000 && errorClass} ${inputClass} ${errors?.message && errorClass}`}
                rows={6}
                placeholder="Enter your message"
                {...register("message", {
                  required: "This field is required",
                  minLength: {
                    value: 10,
                    message: "Message is too sort",
                  },
                  maxLength: { value: 1000, message: "Message is too long" },
                })}
              />
              <div className="flex items-start justify-end">
                <p
                  className={`text-sm ${watch("message" || "")?.length > 1000 ? "text-rose-600" : "text-primary"}`}
                >
                  {watch("message" || "")?.length}
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="h-16 mt-6 flex items-end">
              <button className="text-center p-3 hover:mb-2 text-white duration-500 font-semibold bg-gradient-to-br from-secondary via-rose-600 to-primary shadow-sm shadow-shadowColor w-full rounded-xl">
                SEND MESSAGE
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}
