"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoPaw } from "react-icons/io5";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { HiCheckCircle } from "react-icons/hi2";
import SignUpWithGoogle from "@/components/AuthSocialButtons/SignUpWithGoogle";

const floatingPaws = [
  { top: "8%", left: "5%", size: 18, delay: 0.2, rotate: -20, opacity: 0.08 },
  { top: "70%", left: "3%", size: 12, delay: 0.5, rotate: 30, opacity: 0.06 },
  { top: "25%", left: "90%", size: 20, delay: 0.7, rotate: 15, opacity: 0.07 },
  { top: "80%", left: "93%", size: 11, delay: 0.3, rotate: -10, opacity: 0.05 },
];

type Field = {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  password?: boolean;
};

function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName.trim()) {
      setError("First name is required.");
      return;
    }
    if (!lastName.trim()) {
      setError("Last name is required.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (!agreed) {
      setError("Please agree to the terms & conditions.");
      return;
    }

    setLoading(true);
    // signup logic here
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const fields: Field[] = [
    {
      id: "firstName",
      label: "First name",
      placeholder: "Jane",
      type: "text",
      icon: <FiUser />,
      value: firstName,
      onChange: setFirstName,
    },
    {
      id: "lastName",
      label: "Last name",
      placeholder: "Doe",
      type: "text",
      icon: <FiUser />,
      value: lastName,
      onChange: setLastName,
    },
    {
      id: "email",
      label: "Email",
      placeholder: "sjane@pet-adoption.com",
      type: "email",
      icon: <FiMail />,
      value: email,
      onChange: setEmail,
    },
    {
      id: "password",
      label: "Password",
      placeholder: "••••••••",
      type: "password",
      icon: <FiLock />,
      value: password,
      onChange: setPassword,
      password: true,
    },
  ];

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16"
      style={{ background: "#0f0d0a" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 50%, #1e1508 0%, transparent 65%)",
        }}
      />
      {/* Top accent line */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(200,151,58,0.4), transparent)",
        }}
      />

      {/* Floating paws */}
      {floatingPaws.map((p, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute"
          style={{ top: p.top, left: p.left }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        >
          <IoPaw
            style={{
              width: p.size,
              height: p.size,
              color: "#c8973a",
              opacity: p.opacity,
              transform: `rotate(${p.rotate}deg)`,
            }}
          />
        </motion.div>
      ))}

      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* ── Form card (left on signup) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:max-w-[440px] rounded-2xl p-8 sm:p-10 flex flex-col order-2 md:order-1"
          style={{
            background: "#17130d",
            border: "1px solid rgba(200,151,58,0.15)",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 mb-7"
            style={{ textDecoration: "none" }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(200,151,58,0.15)",
                border: "1px solid rgba(200,151,58,0.3)",
              }}
            >
              <IoPaw style={{ color: "#c8973a", width: 14, height: 14 }} />
            </div>
            <span
              className="text-white font-bold text-lg"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Paw
              <span style={{ color: "#c8973a", fontStyle: "italic" }}>
                Adopt
              </span>
            </span>
          </Link>

          <div className="mb-6">
            <h2
              className="text-white font-bold mb-1"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.5rem",
              }}
            >
              Create account
            </h2>
            <p
              className="text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#6b5e50" }}
            >
              Already have one?{" "}
              <Link
                href="/auth/login"
                style={{ color: "#c8973a", textDecoration: "none" }}
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Google */}
          <div className="mb-5">
            <SignUpWithGoogle />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(200,151,58,0.1)" }}
            />
            <span
              className="text-xs"
              style={{ fontFamily: "'DM Mono', monospace", color: "#3d3329" }}
            >
              or fill in details
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(200,151,58,0.1)" }}
            />
          </div>

          {/* Error */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 px-4 py-2.5 rounded-xl text-sm"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: "rgba(181,110,110,0.1)",
                border: "1px solid rgba(181,110,110,0.3)",
                color: "#b56e6e",
              }}
            >
              {error}
            </motion.div>
          )}

          {/* Success */}
          {success && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-4 px-4 py-3 rounded-xl text-sm flex items-center gap-2"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: "rgba(122,158,110,0.1)",
                border: "1px solid rgba(122,158,110,0.3)",
                color: "#7a9e6e",
              }}
            >
              <HiCheckCircle style={{ width: 16, height: 16 }} />
              Account created! Welcome to the pack.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {/* Name row */}
            <div className="grid grid-cols-2 gap-3">
              {fields.slice(0, 2).map((f) => (
                <div key={f.id}>
                  <label
                    className="block text-xs font-semibold mb-1.5 tracking-wide uppercase"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      color: focused === f.id ? "#c8973a" : "#4a3f35",
                    }}
                  >
                    {f.label}
                  </label>
                  <div
                    className="flex items-center rounded-xl overflow-hidden transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border:
                        focused === f.id
                          ? "1px solid rgba(200,151,58,0.5)"
                          : "1px solid rgba(200,151,58,0.15)",
                    }}
                  >
                    <span
                      className="ml-3 flex-shrink-0"
                      style={{
                        color: focused === f.id ? "#c8973a" : "#3d3329",
                        fontSize: 14,
                      }}
                    >
                      {f.icon}
                    </span>
                    <input
                      type={f.type}
                      value={f.value}
                      onChange={(e) => f.onChange(e.target.value)}
                      onFocus={() => setFocused(f.id)}
                      onBlur={() => setFocused(null)}
                      placeholder={f.placeholder}
                      className="flex-1 h-11 px-2 bg-transparent outline-none text-sm"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: "#d4b896",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Email + Password */}
            {fields.slice(2).map((f) => (
              <div key={f.id}>
                <label
                  className="block text-xs font-semibold mb-1.5 tracking-wide uppercase"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: focused === f.id ? "#c8973a" : "#4a3f35",
                  }}
                >
                  {f.label}
                </label>
                <div
                  className="flex items-center rounded-xl overflow-hidden transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border:
                      focused === f.id
                        ? "1px solid rgba(200,151,58,0.5)"
                        : "1px solid rgba(200,151,58,0.15)",
                  }}
                >
                  <span
                    className="ml-4 flex-shrink-0"
                    style={{
                      color: focused === f.id ? "#c8973a" : "#3d3329",
                      fontSize: 15,
                    }}
                  >
                    {f.icon}
                  </span>
                  <input
                    type={
                      f.password && !showPassword
                        ? "password"
                        : f.password
                          ? "text"
                          : f.type
                    }
                    value={f.value}
                    onChange={(e) => f.onChange(e.target.value)}
                    onFocus={() => setFocused(f.id)}
                    onBlur={() => setFocused(null)}
                    placeholder={f.placeholder}
                    className="flex-1 h-12 px-3 bg-transparent outline-none text-sm"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#d4b896",
                    }}
                  />
                  {f.password && (
                    <button
                      type="button"
                      onClick={() => setShowPassword((p) => !p)}
                      className="px-4 flex-shrink-0"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#4a3f35",
                      }}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <IoEyeOutline style={{ width: 16, height: 16 }} />
                      ) : (
                        <IoEyeOffOutline style={{ width: 16, height: 16 }} />
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* Password strength hint */}
            {password.length > 0 && (
              <div className="flex gap-1.5 mt-0.5">
                {[1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className="flex-1 h-1 rounded-full transition-all duration-300"
                    style={{
                      background:
                        password.length >= level * 3
                          ? level <= 1
                            ? "#b56e6e"
                            : level <= 2
                              ? "#c8973a"
                              : level <= 3
                                ? "#7a9e6e"
                                : "#6e8db5"
                          : "rgba(255,255,255,0.06)",
                    }}
                  />
                ))}
              </div>
            )}

            {/* Terms */}
            <label
              className="flex items-start gap-2.5 mt-1 cursor-pointer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#6b5e50",
                fontSize: 13,
              }}
            >
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 accent-[#c8973a] w-3.5 h-3.5 flex-shrink-0"
              />
              <span>
                I agree to the{" "}
                <Link
                  href="#"
                  style={{ color: "#c8973a", textDecoration: "none" }}
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  style={{ color: "#c8973a", textDecoration: "none" }}
                >
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || success}
              className="mt-2 w-full h-12 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: success
                  ? "rgba(122,158,110,0.8)"
                  : loading
                    ? "rgba(200,151,58,0.5)"
                    : "#c8973a",
                color: "#0f0d0a",
                border: "none",
                cursor: loading || success ? "not-allowed" : "pointer",
              }}
              onMouseEnter={(e) => {
                if (!loading && !success)
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "#e0aa50";
              }}
              onMouseLeave={(e) => {
                if (!loading && !success)
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "#c8973a";
              }}
            >
              {success ? (
                <>
                  <HiCheckCircle style={{ width: 16, height: 16 }} /> Welcome to
                  the pack!
                </>
              ) : loading ? (
                <>
                  <IoPaw
                    className="animate-spin"
                    style={{ width: 16, height: 16 }}
                  />{" "}
                  Creating account…
                </>
              ) : (
                <>
                  <IoPaw style={{ width: 15, height: 15 }} /> Create account
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* ── Right panel ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hidden md:flex flex-col flex-1 items-start order-1 md:order-2"
        >
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-[#c8973a]" />
              <span
                className="text-[#c8973a] text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Join the pack
              </span>
            </div>
            <h1
              className="text-white font-bold leading-tight mb-3"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              }}
            >
              Find your{" "}
              <span className="italic" style={{ color: "#c8973a" }}>
                forever
              </span>
              <br />
              companion
            </h1>
            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#6b5e50" }}
            >
              Create an account to browse hundreds of pets waiting for a loving
              home, save your favourites, and start your adoption journey today.
            </p>
          </div>

          {/* Perks */}
          <div className="flex flex-col gap-3 mb-8">
            {[
              { icon: "🐾", text: "Browse 500+ shelters nationwide" },
              { icon: "❤️", text: "Save and compare your favourite pets" },
              { icon: "📋", text: "Track your application in real time" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm"
                  style={{
                    background: "rgba(200,151,58,0.1)",
                    border: "1px solid rgba(200,151,58,0.2)",
                  }}
                >
                  {icon}
                </div>
                <span
                  className="text-sm"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#7a6a5a",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Pet image */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 20px 40px rgba(200,151,58,0.1))" }}
          >
            <Image
              src="/assets/adopt-pet.png"
              alt="Adopt a pet"
              width={400}
              height={400}
              priority
              style={{ maxWidth: "clamp(220px, 28vw, 400px)", height: "auto" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default SignUpPage;