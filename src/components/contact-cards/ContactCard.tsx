import React from "react";
import { Mail, Globe, Phone, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

export interface ContactInfo {
  course: string;
  acronym: string;
  email?: string;
  website?: string;
  phone?: string;
  social?: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    linkedin?: string;
    twitter?: string;
  };
}

interface ContactCardProps {
  contactData: ContactInfo[];
}

const socialMediaUrls = {
  linkedin: "https://linkedin.com/in/",
  twitter: "https://twitter.com/",
  facebook: "https://fb.com/",
  instagram: "https://instagram.com/",
  youtube: "https://youtube.com/channel/",
} as const;

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
};

export default function ContactCard({ contactData }: ContactCardProps): React.JSX.Element {
  return (
    <>
      <style>{`
        .contact-card {
          max-width: 300px;
        }
        
        @media (max-width: 1247px) {
          .contact-card {
            max-width: 600px !important;
          }
        }
      `}</style>
      <div className="flex flex-wrap gap-2">
        {contactData.map((contact, index) => (
          <div
            key={`${contact.acronym}-${index}`}
            className="contact-card card w-96 bg-base-100 shadow-xl align-stretch"
          >
            <div className="card-body">
              <h3 className="card-title">{contact.course}</h3>
              <p>{contact.acronym}</p>
              <div className="card-actions flex gap-2">
                {contact.email && (
                  <a href={`mailto:${contact.email}`} className="text-blue-500 hover:text-blue-700">
                    <Mail className="w-6 h-6" />
                  </a>
                )}
                {contact.website && (
                  <a
                    href={contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Globe className="w-6 h-6" />
                  </a>
                )}
                {contact.phone && (
                  <a href={`tel:${contact.phone}`} className="text-blue-500 hover:text-blue-700">
                    <Phone className="w-6 h-6" />
                  </a>
                )}
                {contact.social &&
                  Object.entries(contact.social).map(([platform, handle]) => {
                    const IconComponent = socialIcons[platform as keyof typeof socialIcons];
                    const url = socialMediaUrls[platform as keyof typeof socialMediaUrls];

                    return (
                      <a
                        key={platform}
                        href={`${url}${handle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <IconComponent className="w-6 h-6" />
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
