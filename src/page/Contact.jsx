import React, { useState, Suspense } from "react";
import "./contact.css";
import { Canvas } from "@react-three/fiber";
import Dragon from "../Model/Dragon";

const Contact = () => {
  const [currentAnimation, setCurrentAnimation] = useState("ZhanLi");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target }) => {
    if (target) {
      const { name, value } = target;
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentAnimation("JiNengGongJi1");
    setTimeout(() => {
      setCurrentAnimation("ZhanLi");
      setForm({ name: "", email: "", message: "" });
    }, 10000);
  };
  const handleFocus = () => {
    setCurrentAnimation("XingZou");
  };
  const handleBlur = () => {
    setCurrentAnimation("ZhanLi");
  };

  return (
    <div className="section">
      <div className="container">
        <div className="left">
          <h4>Get in touch</h4>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="input-group">
              <input
                type="text"
                id="name"
                name="name"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={form.name}
                onChange={handleChange}
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={form.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="textarea">
              <textarea
                id="textarea"
                name="message"
                rows={4}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={form.message}
                onChange={handleChange}
                required
              />
              <label htmlFor="textarea">How can I Help You</label>
            </div>
            <div className="btn">
              <button
                className="learn-more"
                type="submit"
              >
                <span
                  className="circle"
                  aria-hidden="true"
                >
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Send</span>
              </button>
            </div>
          </form>
        </div>
        <div className="right">
          <Canvas>
            <directionalLight
              intensity={3}
              position={[0, 0, 1]}
            />

            <Suspense fallback={null}>
              <Dragon
                position={[0, -2, 0]}
                scale={[3, 3, 3]}
                rotation={[1.5, -9.8, 0]}
                currentAnimation={currentAnimation}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Contact;
