"use client";

import PillNav from "@/components/ui/PillNav";
import logo from "@/public/pv.png"
const navItems = [
  { label: "Vision",   href: "#vision"   },
  { label: "Platform", href: "#core"     },
  { label: "Roadmap",  href: "#roadmap"  },
  { label: "Products", href: "#products" },
];

export default function Header() {
  return (
<PillNav
  logo={logo}
  logoAlt="Project VANI Logo"
  items={navItems}
  activeHref="/"
  className="custom-nav"
  ease="power2.easeOut"
  baseColor="#007595ff"
  pillColor="#000000ff"
  hoveredPillTextColor="#ffffffff"
  pillTextColor="#ffffffff"
  theme="color"
  initialLoadAnimation={false}
/>
  );
}
