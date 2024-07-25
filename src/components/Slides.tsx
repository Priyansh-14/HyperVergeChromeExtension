// src/GoogleSlides.tsx
import React, { useEffect, useState } from "react";

const Slides: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [slides, setSlides] = useState<any>(null);

  useEffect(() => {
    const initializeGSI = () => {
      (window as any).google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });
      (window as any).google.accounts.id.renderButton(
        document.getElementById("signInButton"),
        { theme: "outline", size: "large" }
      );
    };

    const handleCredentialResponse = (response: any) => {
      setToken(response.credential);
    };

    initializeGSI();
  }, []);

  useEffect(() => {
    const fetchSlidesData = async () => {
      if (token) {
        const slidesApiUrl =
          "https://slides.googleapis.com/v1/presentations/YOUR_PRESENTATION_ID"; // Replace 'YOUR_PRESENTATION_ID' with your actual presentation ID
        const response = await fetch(slidesApiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setSlides(data);
      }
    };

    fetchSlidesData();
  }, [token]);

  return (
    <div>
      <div id="signInButton"></div>
      {slides && <pre>{JSON.stringify(slides, null, 2)}</pre>}
    </div>
  );
};

export default Slides;
