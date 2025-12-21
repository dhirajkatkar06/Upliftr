// WhatsAppButton.tsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.a<{ isTransparent: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  text-decoration: none;
  z-index: 1000;
  background-color: ${({ isTransparent }) => (isTransparent ? "transparent" : "#000")};
  color: ${({ isTransparent }) => (isTransparent ? "transparent" : "#fff")};
  border: ${({ isTransparent }) => (isTransparent ? "none" : "2px solid #000")};
  transition: all 0.3s ease, transform 0.2s;
  box-shadow: ${({ isTransparent }) =>
    isTransparent ? "none" : "0 4px 6px rgba(0,0,0,0.3)"};

  &:hover {
    background-color: #25d366;
    color: white;
    border: none;
    transform: scale(1.1);
  }
`;

interface WhatsAppButtonProps {
  phone: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phone, message = "" }) => {
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get button position
      const button = document.getElementById("whatsapp-btn");
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const elementAt = document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);

      // Check if element behind is body (empty space)
      if (elementAt && elementAt.tagName.toLowerCase() === "body") {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-btn"
      isTransparent={isTransparent}
    >
      💬
    </Button>
  );
};

export default WhatsAppButton;
