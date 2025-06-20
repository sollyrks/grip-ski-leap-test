
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const PrivacyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAcceptedPrivacy = localStorage.getItem('grippy-tech-privacy-accepted');
    if (!hasAcceptedPrivacy) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('grippy-tech-privacy-accepted', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-2xl max-h-[70vh] overflow-hidden rounded-2xl flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="text-2xl font-bold">Privacy Policy</DialogTitle>
          <DialogDescription className="text-base">
            Please read our privacy policy before continuing
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto space-y-4 text-sm pr-2">
          <div>
            <h3 className="font-semibold mb-2">Information We Collect</h3>
            <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">How We Use Your Information</h3>
            <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Information Sharing</h3>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Data Security</h3>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Cookies</h3>
            <p>We use cookies and similar technologies to enhance your experience, analyze usage, and personalize content.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Your Rights</h3>
            <p>You have the right to access, update, or delete your personal information. Contact us if you wish to exercise these rights.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@grippytech.com</p>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            Last updated: December 2024
          </p>
        </div>

        <DialogFooter className="flex-shrink-0 mt-4">
          <Button onClick={handleAccept} className="w-full rounded-xl">
            I Accept the Privacy Policy
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyModal;
