import React from "react";

//import logo from "https://qdev.s3.amazonaws.com/303/A/471068303/A/c0d4abd6-4f7b-11e4-8a0b-123140053ab5-471068303/DemoBank-Logo.png";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src="https://qdev.s3.amazonaws.com/303/A/471068303/A/c0d4abd6-4f7b-11e4-8a0b-123140053ab5-471068303/DemoBank-Logo.png" alt="React logo" width="120" />
    <h1 className="mb-4">New Banc KYC Demo</h1>

    <p className="lead">
      This sample app demonstrates the AuthID ID Proofing capabilities through 
      CIC martketplace integration. For more details pls goto <a href="https://manage.auth0.com/dashboard/uk/glab-pkey/marketplace/integrations/verified-biometric-mfa">AuthID @ CIC Marketplace</a>
    </p>
  </div>
);

export default Hero;
