'use client'

import Script from "next/script";
import { useEffect } from "react";

const WhatsappLogin = () => {
    
    interface OTPlessUser {
        waName: string;
        waNumber: string;
      }

    useEffect(() => {
        // Define the 'otpless' function
        (window as any).otpless = (otplessUser : OTPlessUser) => {
          // Retrieve the user's details after successful login
          alert(JSON.stringify(otplessUser));
    
    
          const waName = otplessUser.waName;
          const waNumber = otplessUser.waNumber;
    
          console.log(otplessUser, waName, waNumber);
          // Handle the signup/signin process
        
        };
      }, []);

  return (
    <div>WhatsappLogin
      <Script async src="https://otpless.com/auth.js" />


    </div>
  )
}

export default WhatsappLogin

