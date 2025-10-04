"use client";
import { APP } from "@/lib/constants";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Twitter, Linkedin, Instagram, Facebook } from "./icons";
import Image from "next/image";

const Footer = () => {
  const socials = [
    {
      name: "Twitter",
      icon: Twitter,
      href: APP.TWITTER,
      //   color: "hover:text-[#1DA1F2]",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: APP.LINKEDIN,
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: APP.INSTAGRAM,
      //   color: "hover:text-[#E4405F]",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: APP.FACEBOOK,
      //   color: "hover:text-[#1877F2]",
    },
  ];

  //   const services = [
  //     { name: "Web Design", href: "/services/web-design" },
  //     { name: "UI/UX Design", href: "/services/ui-ux" },
  //     { name: "Frontend Development", href: "/services/frontend" },
  //     { name: "Backend Development", href: "/services/backend" },
  //     { name: "Mobile Apps", href: "/services/mobile" },
  //     { name: "DevOps & Cloud", href: "/services/devops" },
  //   ];

  //   const company = [
  //     { name: "About Us", href: "/about" },
  //     { name: "Projects", href: "/projects" },
  //     { name: "Blog", href: "/blog" },
  //     { name: "Careers", href: "/careers" },
  //     { name: "Contact", href: "/contact" },
  //   ];

  const PHONE_FORMATTED = APP.PHONE.replace(
    /(\d{1,4})(\d{3})(\d{3})(\d{4})/,
    "$1 $2 $3 $4"
  );

  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-1">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold tracking-tight">
                Unbuilt
                <br />
                <span className="text-gradient">Studio</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Crafting digital experiences that push boundaries and redefine
                what&apos;s possible.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h5 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Follow Us
              </h5>
              <div className="flex gap-3">
                {socials.map((social) => {
                  //   const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-3 rounded-lg bg-primary/50 backdrop-blur-sm border border-border transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                      aria-label={social.name}
                    >
                      {/* <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" /> */}
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={20}
                        height={20}
                        className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6"
                      />
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-6" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Services */}
          {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200 mr-0 group-hover:mr-2 rounded-full" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Company */}
          {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200 mr-0 group-hover:mr-2 rounded-full" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact */}

          {/* NOTE: Remove w-max */}
          <div className="space-y-4 w-max">
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href={`mailto:${APP.EMAIL}`}
                  className="group flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <div className="p-2 rounded-lg bg-secondary/50 border border-border group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-200">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-1">
                      Email
                    </p>
                    <p className="break-all">{APP.EMAIL}</p>
                  </div>
                </Link>
              </li>
              <li>
                <a
                  href={`tel:${APP.PHONE}`}
                  className="group flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <div className="p-2 rounded-lg bg-secondary/50 border border-border group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-200">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-1">
                      Phone
                    </p>
                    <p>{PHONE_FORMATTED}</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <div className="p-2 rounded-lg bg-secondary/50 border border-border">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-1">
                      Location
                    </p>
                    <p>Abuja, Nigeria</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Unbuilt Studio. All rights
              reserved.
            </p>
            {/* <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Cookie Policy
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
