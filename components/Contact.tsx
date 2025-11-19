"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name, email, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSuccess(true);

      target.reset();
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 flex flex-col items-center justify-center text-white"
    >
      <div className="w-full max-w-3xl px-6 sm:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-purple-300">
            Contact
          </h2>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 w-full"
        >
          <Input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 text-base border border-white/20 rounded-md shadow-sm  text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-300 focus:border-purple-300"
            placeholder="Your Name"
            required
          />

          <Input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 text-base border border-white/20 rounded-md shadow-sm bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-300 focus:border-purple-300"
            placeholder="Your Email"
            required
          />

          <Textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 text-base border border-white/20 rounded-md shadow-sm bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-300 focus:border-purple-300 resize-none"
            placeholder="Your Message"
            required
          />

          {error && <p className="text-red-500">{error}</p>}
          {success && (
            <p className="text-green-500">Message sent successfully!</p>
          )}

          <Button
            type="submit"
            className="w-full bg-purple-400 text-white font-semibold rounded-md py-3 cursor-pointer hover:bg-purple-400"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Submit"
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
