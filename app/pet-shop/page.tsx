"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoPaw } from "react-icons/io5";
import { FiHeart, FiSearch, FiFilter, FiShoppingCart, FiStar, FiCheck } from "react-icons/fi";
import { BsGeoAlt } from "react-icons/bs";
import { HiCheckCircle } from "react-icons/hi2";
import { MdOutlinePets } from "react-icons/md";

// ─── Types ────────────────────────────────────────────────────────────────────
type PetStatus  = "Available" | "Adopted" | "Pending";
type PetType    = "Adoption" | "Purchase";
type PetSize    = "Small" | "Medium" | "Large";
type PetGender  = "Male" | "Female";

interface Pet {
  id: number;
  name: string;
  breed: string;
  age: string;
  ageMonths: number;
  size: PetSize;
  price: number;
  oldPrice?: number;
  type: PetType;
  status: PetStatus;
  shelter: string;
  location: string;
  image: string;
  tags: string[];
  gender: PetGender;
}

interface Accessory {
  id: number;
  name: string;
  sub: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
}

interface Review {
  name: string;
  role: string;
  pet: string;
  text: string;
  rating: number;
  color: string;
  initials: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const pets: Pet[] = [
  { id:1, name:"Bruno",  breed:"Pit Bull", age:"11 months", ageMonths:11, size:"Large",  price:120000,            type:"Adoption", status:"Available", shelter:"City Shelter", location:"Lagos",  image:"/assets/Pitbull.svg",  tags:["Protective","Loyal"],       gender:"Male"   },
  { id:2, name:"Max",    breed:"Mastiff",  age:"4 months",  ageMonths:4,  size:"Large",  price:200000,            type:"Purchase", status:"Available", shelter:"Happy Paws",  location:"Abuja",  image:"/assets/Mastiff.svg",  tags:["Calm","Gentle"],            gender:"Male"   },
  { id:3, name:"Bella",  breed:"Bernese",  age:"5 months",  ageMonths:5,  size:"Large",  price:180000,oldPrice:210000, type:"Adoption", status:"Pending",   shelter:"Hope Shelter",location:"Ibadan", image:"/assets/Bernese.svg",  tags:["Gentle","Sweet"],           gender:"Female" },
  { id:4, name:"Luna",   breed:"Husky",    age:"4 months",  ageMonths:4,  size:"Medium", price:150000,            type:"Adoption", status:"Available", shelter:"City Shelter", location:"Lagos",  image:"/assets/Husky.svg",    tags:["Energetic","Friendly"],     gender:"Female" },
  { id:5, name:"Duke",   breed:"Pinscher", age:"9 months",  ageMonths:9,  size:"Medium", price:130000,            type:"Purchase", status:"Adopted",   shelter:"Happy Paws",  location:"Kano",   image:"/assets/Pinscher.svg", tags:["Alert","Loyal"],            gender:"Male"   },
  { id:6, name:"Coco",   breed:"Pit Bull", age:"6 months",  ageMonths:6,  size:"Large",  price:110000,            type:"Adoption", status:"Available", shelter:"Rescue Hub",  location:"Ibadan", image:"/assets/Pitbull.svg",  tags:["Playful","Fun"],            gender:"Female" },
  { id:7, name:"Rocky",  breed:"Mastiff",  age:"3 months",  ageMonths:3,  size:"Large",  price:220000,            type:"Purchase", status:"Available", shelter:"Hope Shelter",location:"Abuja",  image:"/assets/Mastiff.svg",  tags:["Calm","Affectionate"],      gender:"Male"   },
  { id:8, name:"Stella", breed:"Bernese",  age:"7 months",  ageMonths:7,  size:"Large",  price:170000,oldPrice:195000, type:"Adoption", status:"Available", shelter:"Rescue Hub",  location:"Lagos",  image:"/assets/Bernese.svg",  tags:["Loyal","Gentle"],           gender:"Female" },
];

const accessories: Accessory[] = [
  { id:1,  name:"Premium Dog Bed",      sub:"Memory foam, washable cover",       price:18500,  category:"Comfort",   image:"/assets/bed.png",       badge:"Best seller" },
  { id:2,  name:"Stainless Bowl Set",   sub:"Anti-slip, set of 2",               price:4200,   category:"Feeding",   image:"/assets/bowls.png"                         },
  { id:3,  name:"Retractable Leash",    sub:"5 m, auto-lock safety",             price:6800,   category:"Walking",   image:"/assets/leash.png"                         },
  { id:4,  name:"Padded Dog Harness",   sub:"Adjustable, no-pull design",        price:9500,   category:"Walking",   image:"/assets/harness.png",   badge:"New"        },
  { id:5,  name:"Chew Toy Bundle",      sub:"6-piece durable set",               price:3200,   category:"Play",      image:"/assets/toys.png"                          },
  { id:6,  name:"Grooming Kit",         sub:"Brush, nail trim & comb",           price:7900,   category:"Grooming",  image:"/assets/grooming.png",  badge:"Best seller" },
  { id:7,  name:"8-Month Flea Collar",  sub:"Waterproof, all breeds",            price:5400,   category:"Health",    image:"/assets/collar.png"                        },
  { id:8,  name:"IATA Travel Carrier",  sub:"Airline-approved, size M",          price:22000,  category:"Travel",    image:"/assets/carrier.png"                       },
];

const reviews: Review[] = [
  { name:"Adaeze O.", role:"Dog owner",      pet:"Adopted Bruno",    text:"Adopted Bruno two months ago — he's the most loyal companion I've ever had. The process was smooth and the team genuinely cared.",              rating:5, color:"#c8973a", initials:"AO" },
  { name:"Chidi N.",  role:"Pet parent",     pet:"Purchased Max",    text:"Max arrived healthy, vaccinated, and happy. Couldn't be more pleased with the whole experience from start to finish.",                          rating:5, color:"#6e8db5", initials:"CN" },
  { name:"Funmi B.",  role:"Multi-pet owner",pet:"Shop customer",    text:"The accessories shop is a lifesaver. Got the grooming kit and bed delivered the same week. Quality is excellent for the price.",               rating:4, color:"#7a9e6e", initials:"FB" },
  { name:"Tunde A.",  role:"Family adopter", pet:"Adopted Stella",   text:"Stella bonded with our kids instantly. She's the most gentle dog. The adoption team went above and beyond to make us comfortable.",            rating:5, color:"#b56e6e", initials:"TA" },
  { name:"Ngozi K.",  role:"First-time owner",pet:"Purchased Rocky", text:"Rocky is absolutely gorgeous. He came with all health records, microchipped and everything. Would 100% recommend PawAdopt to anyone.",        rating:5, color:"#9e7ab5", initials:"NK" },
  { name:"Emeka S.",  role:"Dog trainer",    pet:"Adopted Coco",     text:"Coco is a dream to train. Smart, eager to please, and full of energy. The shelter staff knew her temperament perfectly and matched us well.",  rating:5, color:"#c8973a", initials:"ES" },
];

// ─── Constants ────────────────────────────────────────────────────────────────
const statusStyle: Record<PetStatus, { bg: string; text: string; border: string }> = {
  Available: { bg:"rgba(122,158,110,0.12)", text:"#5a8c52",  border:"rgba(122,158,110,0.3)"  },
  Pending:   { bg:"rgba(200,151,58,0.12)",  text:"#c8973a",  border:"rgba(200,151,58,0.3)"   },
  Adopted:   { bg:"rgba(255,255,255,0.05)", text:"#5a5248",  border:"rgba(255,255,255,0.08)" },
};

const fmt = (n: number) => "₦" + n.toLocaleString();

// ─── Sub-components ───────────────────────────────────────────────────────────

// Pill filter button
const Pill = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 whitespace-nowrap"
    style={{
      fontFamily: "'DM Mono', monospace",
      background: active ? "#c8973a" : "rgba(200,151,58,0.07)",
      color: active ? "#0f0d0a" : "#6b5e50",
      border: `0.5px solid ${active ? "#c8973a" : "rgba(200,151,58,0.2)"}`,
      cursor: "pointer",
    }}
  >
    {children}
  </button>
);

// Toast notification
const Toast = ({ msg, visible }: { msg: string; visible: boolean }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium"
        style={{ background: "#17130d", border: "1px solid rgba(200,151,58,0.25)", color: "#d4b896", fontFamily: "'DM Sans', sans-serif" }}
        role="status" aria-live="polite"
      >
        <HiCheckCircle style={{ color: "#7a9e6e", width: 16, height: 16 }} />
        {msg}
      </motion.div>
    )}
  </AnimatePresence>
);

// Pet card
const PetCard = ({ pet, liked, onLike, onCart }: { pet: Pet; liked: boolean; onLike: () => void; onCart: () => void }) => {
  const isAdopted = pet.status === "Adopted";
  return (
    <motion.div
      variants={{ hidden: { opacity:0, y:20 }, visible: { opacity:1, y:0 } }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col rounded-2xl overflow-hidden"
      style={{ background: "#17130d", border: "1px solid rgba(200,151,58,0.1)" }}
    >
      {/* Image */}
      <div className="relative h-48 bg-[#1e1810] overflow-hidden">
        <Image src={pet.image} alt={pet.name} fill className="object-contain p-4 transition-transform duration-500 hover:scale-105" />

        {/* Status */}
        <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-medium"
          style={{ fontFamily:"'DM Mono',monospace", ...statusStyle[pet.status], border:`0.5px solid ${statusStyle[pet.status].border}` }}>
          {pet.status}
        </div>

        {/* Sale badge */}
        {pet.oldPrice && (
          <div className="absolute top-3 right-10 px-2 py-0.5 rounded-full text-[10px] font-medium"
            style={{ fontFamily:"'DM Mono',monospace", background:"rgba(220,80,60,0.12)", color:"#c03a28", border:"0.5px solid rgba(220,80,60,0.25)" }}>
            Sale
          </div>
        )}

        {/* Like */}
        <button onClick={(e) => { e.preventDefault(); onLike(); }}
          className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-150"
          style={{ background: liked ? "rgba(200,151,58,0.9)" : "rgba(15,13,10,0.6)", border:"0.5px solid rgba(200,151,58,0.3)", color: liked ? "#0f0d0a" : "#c8973a", cursor:"pointer" }}
          aria-label={`${liked ? "Unsave" : "Save"} ${pet.name}`}>
          <FiHeart style={{ width:12, height:12, fill: liked ? "currentColor" : "none" }} />
        </button>

        {/* Gender */}
        <div className="absolute bottom-3 right-3 px-1.5 py-0.5 rounded-full text-[10px] font-medium"
          style={{ background: pet.gender==="Female" ? "rgba(181,110,181,0.8)" : "rgba(110,141,181,0.8)", color:"#fff", fontFamily:"'DM Mono',monospace" }}>
          {pet.gender==="Female" ? "♀ F" : "♂ M"}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-white font-semibold text-sm leading-tight" style={{ fontFamily:"'Playfair Display',Georgia,serif" }}>{pet.name}</h3>
            <p className="text-[10px] mt-0.5" style={{ fontFamily:"'DM Mono',monospace", color:"#4a3f35" }}>{pet.breed} · {pet.age}</p>
          </div>
          <div className="text-right flex-shrink-0 ml-2">
            {pet.oldPrice && <p className="text-[10px] line-through" style={{ color:"#4a3f35" }}>{fmt(pet.oldPrice)}</p>}
            <p className="text-white font-semibold text-sm" style={{ fontFamily:"'Playfair Display',Georgia,serif" }}>{fmt(pet.price)}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {pet.tags.map(t => (
            <span key={t} className="px-2 py-0.5 rounded-full text-[9px]"
              style={{ fontFamily:"'DM Mono',monospace", background:"rgba(200,151,58,0.07)", color:"#7a6a5a", border:"0.5px solid rgba(200,151,58,0.15)" }}>
              {t}
            </span>
          ))}
          <span className="px-2 py-0.5 rounded-full text-[9px]"
            style={{ fontFamily:"'DM Mono',monospace", background:"rgba(200,151,58,0.07)", color:"#7a6a5a", border:"0.5px solid rgba(200,151,58,0.15)" }}>
            {pet.size}
          </span>
          <span className="px-2 py-0.5 rounded-full text-[9px]"
            style={{ fontFamily:"'DM Mono',monospace", background: pet.type==="Adoption" ? "rgba(122,158,110,0.1)" : "rgba(110,141,181,0.1)", color: pet.type==="Adoption" ? "#5a8c52" : "#4a6a90", border: pet.type==="Adoption" ? "0.5px solid rgba(122,158,110,0.25)" : "0.5px solid rgba(110,141,181,0.25)" }}>
            {pet.type}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 mt-auto">
          <BsGeoAlt style={{ width:10, height:10, color:"#3d3329" }} />
          <span className="text-[10px]" style={{ fontFamily:"'DM Sans',sans-serif", color:"#3d3329" }}>{pet.shelter} · {pet.location}</span>
        </div>

        {/* CTA */}
        <Link
          href={`/shop/${pet.id}`}
          onClick={isAdopted ? (e) => e.preventDefault() : onCart}
          className="mt-1.5 flex items-center justify-center gap-1.5 w-full py-2 rounded-full text-[11px] font-semibold transition-all duration-150"
          style={{
            fontFamily:"'DM Sans',sans-serif",
            background: isAdopted ? "rgba(255,255,255,0.03)" : "rgba(200,151,58,0.1)",
            color: isAdopted ? "#3d3329" : "#c8973a",
            border: `0.5px solid ${isAdopted ? "rgba(255,255,255,0.06)" : "rgba(200,151,58,0.25)"}`,
            textDecoration:"none",
            pointerEvents: isAdopted ? "none" : "auto",
          }}
          onMouseEnter={e => { if(!isAdopted){ (e.currentTarget as HTMLAnchorElement).style.background="#c8973a"; (e.currentTarget as HTMLAnchorElement).style.color="#0f0d0a"; }}}
          onMouseLeave={e => { if(!isAdopted){ (e.currentTarget as HTMLAnchorElement).style.background="rgba(200,151,58,0.1)"; (e.currentTarget as HTMLAnchorElement).style.color="#c8973a"; }}}
        >
          <IoPaw style={{ width:11, height:11 }} />
          {isAdopted ? "Already adopted" : pet.type==="Adoption" ? "Adopt me" : "Buy now"}
        </Link>
      </div>
    </motion.div>
  );
};

// Accessory card
const AccessoryCard = ({ acc, onAdd }: { acc: Accessory; onAdd: () => void }) => (
  <motion.div
    whileHover={{ y: -3 }}
    transition={{ duration: 0.2 }}
    className="flex flex-col rounded-2xl overflow-hidden"
    style={{ background:"#17130d", border:"0.5px solid rgba(200,151,58,0.1)" }}
  >
    <div className="relative h-36 bg-[#1e1810] flex items-center justify-center">
      <MdOutlinePets style={{ width:44, height:44, color:"#3d3329" }} />
      {acc.badge && (
        <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-medium"
          style={{ fontFamily:"'DM Mono',monospace", background: acc.badge==="New" ? "rgba(110,141,181,0.15)" : "rgba(200,151,58,0.15)", color: acc.badge==="New" ? "#4a6a90" : "#c8973a", border: `0.5px solid ${acc.badge==="New" ? "rgba(110,141,181,0.3)" : "rgba(200,151,58,0.3)"}` }}>
          {acc.badge}
        </div>
      )}
    </div>
    <div className="p-4 flex flex-col flex-1 gap-1.5">
      <h3 className="text-white font-semibold text-sm" style={{ fontFamily:"'Playfair Display',Georgia,serif" }}>{acc.name}</h3>
      <p className="text-[11px] leading-relaxed" style={{ fontFamily:"'DM Sans',sans-serif", color:"#6b5e50" }}>{acc.sub}</p>
      <p className="text-[10px]" style={{ fontFamily:"'DM Mono',monospace", color:"#4a3f35" }}>{acc.category}</p>
      <div className="flex items-center justify-between mt-auto pt-2" style={{ borderTop:"0.5px solid rgba(200,151,58,0.08)" }}>
        <span className="font-semibold text-sm" style={{ fontFamily:"'Playfair Display',Georgia,serif", color:"#c8973a" }}>{fmt(acc.price)}</span>
        <button
          onClick={onAdd}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-150"
          style={{ fontFamily:"'DM Sans',sans-serif", background:"rgba(200,151,58,0.1)", color:"#c8973a", border:"0.5px solid rgba(200,151,58,0.25)", cursor:"pointer" }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background="#c8973a"; (e.currentTarget as HTMLButtonElement).style.color="#0f0d0a"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background="rgba(200,151,58,0.1)"; (e.currentTarget as HTMLButtonElement).style.color="#c8973a"; }}
          aria-label={`Add ${acc.name} to cart`}
        >
          <FiShoppingCart style={{ width:11, height:11 }} /> Add
        </button>
      </div>
    </div>
  </motion.div>
);

// Review card
const ReviewCard = ({ r }: { r: Review }) => (
  <motion.div
    initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
    transition={{ duration:0.4 }}
    className="flex flex-col rounded-2xl p-5"
    style={{ background:"#17130d", border:"0.5px solid rgba(200,151,58,0.1)" }}
  >
    <span className="text-3xl leading-none mb-2 select-none" style={{ color:"rgba(200,151,58,0.2)", fontFamily:"Georgia,serif" }} aria-hidden="true">"</span>
    <div className="flex gap-0.5 mb-3" role="img" aria-label={`${r.rating} out of 5 stars`}>
      {Array.from({length:5}).map((_,i) => (
        <FiStar key={i} style={{ width:12, height:12, color: i<r.rating ? "#c8973a" : "#2a2218", fill: i<r.rating ? "#c8973a" : "none" }} />
      ))}
    </div>
    <p className="text-sm leading-relaxed flex-1 mb-4" style={{ fontFamily:"'DM Sans',sans-serif", color:"#7a6a5a" }}>{r.text}</p>
    <div className="h-px mb-3" style={{ background:"rgba(200,151,58,0.08)" }} />
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-semibold"
        style={{ background:`${r.color}22`, color:r.color, border:`0.5px solid ${r.color}44`, fontFamily:"'DM Mono',monospace" }}
        aria-hidden="true">
        {r.initials}
      </div>
      <div>
        <p className="text-sm font-semibold text-white" style={{ fontFamily:"'Playfair Display',Georgia,serif" }}>{r.name}</p>
        <p className="text-[10px]" style={{ fontFamily:"'DM Mono',monospace", color:"#4a3f35" }}>{r.role}</p>
        <p className="text-[10px]" style={{ fontFamily:"'DM Mono',monospace", color:"#c8973a" }}>{r.pet}</p>
      </div>
    </div>
  </motion.div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PetShopPage() {
  const [search,     setSearch]     = useState("");
  const [typeFilter, setTypeFilter] = useState<"All"|PetType>("All");
  const [sizeFilter, setSizeFilter] = useState<"All"|PetSize>("All");
  const [liked,      setLiked]      = useState<Record<number,boolean>>({});
  const [cartCount,  setCartCount]  = useState(0);
  const [toast,      setToast]      = useState({ visible:false, msg:"" });
  const [showFilters,setShowFilters]= useState(false);

  const showToast = (msg: string) => {
    setToast({ visible:true, msg });
    setTimeout(() => setToast(t => ({ ...t, visible:false })), 2500);
  };

  const toggleLike  = (id: number) => setLiked(p => ({ ...p, [id]:!p[id] }));
  const addToCart   = (label: string) => { setCartCount(c => c+1); showToast(label); };

  const filtered = useMemo(() => pets.filter(p => {
    if (typeFilter !== "All" && p.type !== typeFilter) return false;
    if (sizeFilter !== "All" && p.size !== sizeFilter) return false;
    const q = search.toLowerCase();
    if (q && !p.name.toLowerCase().includes(q) && !p.breed.toLowerCase().includes(q)) return false;
    return true;
  }), [typeFilter, sizeFilter, search]);

  const featured = pets.find(p => p.id === 4)!; // Luna

  return (
    <div className="min-h-screen bg-[#0f0d0a] relative overflow-x-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0" style={{ background:"radial-gradient(ellipse 70% 50% at 50% 0%, #1e1508 0%, transparent 55%)" }} />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px" style={{ background:"linear-gradient(to right, transparent, rgba(200,151,58,0.4), transparent)" }} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-[5%] py-16 space-y-16">

        {/* ── Hero banner ── */}
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
          className="relative rounded-2xl overflow-hidden p-10 md:p-14"
          style={{ background:"linear-gradient(135deg,#1a1206 0%,#2a1e08 60%,#1a1206 100%)", border:"0.5px solid rgba(200,151,58,0.2)" }}>
          <div className="pointer-events-none absolute right-0 top-0 w-64 h-64 rounded-full" style={{ background:"rgba(200,151,58,0.04)", transform:"translate(30%,-30%)" }} />

          <div className="flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-[#c8973a]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c8973a]" style={{ fontFamily:"'DM Mono',monospace" }}>PawAdopt Shop</span>
          </div>

          <h1 className="text-white font-bold leading-tight mb-4" style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(2rem,4vw,3rem)" }}>
            Find your <span className="italic" style={{ color:"#c8973a" }}>perfect</span> companion
          </h1>

          <p className="text-sm leading-relaxed mb-8 max-w-lg" style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(245,239,224,0.5)" }}>
            Browse pets available for adoption or purchase, handpicked accessories, and everything your new family member needs from day one.
          </p>

          <div className="flex flex-wrap gap-10 mb-8">
            {[["124","Pets available"],["500+","Shelters"],["12k+","Happy owners"]].map(([v,l]) => (
              <div key={l}>
                <p className="text-white font-bold text-xl" style={{ fontFamily:"'Playfair Display',Georgia,serif" }}>{v}</p>
                <p className="text-[10px] tracking-widest uppercase" style={{ fontFamily:"'DM Mono',monospace", color:"rgba(245,239,224,0.35)" }}>{l}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-opacity duration-150"
              style={{ fontFamily:"'DM Sans',sans-serif", background:"#c8973a", color:"#0f0d0a", border:"none", cursor:"pointer" }}
              onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.opacity="0.85"}
              onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.opacity="1"}
              onClick={() => document.getElementById("pets")?.scrollIntoView({ behavior:"smooth" })}>
              <IoPaw style={{ width:14, height:14 }} /> Browse pets
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-150"
              style={{ fontFamily:"'DM Sans',sans-serif", background:"rgba(200,151,58,0.1)", color:"#c8973a", border:"0.5px solid rgba(200,151,58,0.3)", cursor:"pointer" }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background="rgba(200,151,58,0.18)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background="rgba(200,151,58,0.1)"; }}
              onClick={() => document.getElementById("accessories")?.scrollIntoView({ behavior:"smooth" })}>
              Shop accessories
            </button>
            {cartCount > 0 && (
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm"
                style={{ fontFamily:"'DM Sans',sans-serif", background:"rgba(200,151,58,0.08)", color:"#c8973a", border:"0.5px solid rgba(200,151,58,0.2)" }}>
                <FiShoppingCart style={{ width:14, height:14 }} />
                {cartCount} item{cartCount!==1?"s":""}
              </div>
            )}
          </div>
        </motion.div>

        {/* ── Featured pet ── */}
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}>
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2"><div className="h-px w-6 bg-[#c8973a]" /><span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#c8973a]" style={{ fontFamily:"'DM Mono',monospace" }}>Pet of the week</span></div>
              <h2 className="text-white font-bold" style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(1.5rem,3vw,2rem)" }}>Featured <span className="italic" style={{ color:"#c8973a" }}>pick</span></h2>
            </div>
            <Link href={`/shop/${featured.id}`} className="text-xs flex items-center gap-1" style={{ fontFamily:"'DM Mono',monospace", color:"#6b5e50", textDecoration:"none" }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color="#c8973a"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color="#6b5e50"}>
              Full profile →
            </Link>
          </div>

          <div className="grid md:grid-cols-[240px_1fr] rounded-2xl overflow-hidden" style={{ background:"#17130d", border:"0.5px solid rgba(200,151,58,0.15)" }}>
            <div className="relative min-h-[200px] bg-[#1e1810] flex items-center justify-center">
              <Image src={featured.image} alt={featured.name} fill className="object-contain p-6" />
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] font-medium"
                style={{ fontFamily:"'DM Mono',monospace", ...statusStyle[featured.status], border:`0.5px solid ${statusStyle[featured.status].border}` }}>
                {featured.status}
              </div>
            </div>

            <div className="p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-3"><div className="h-px w-6 bg-[#c8973a]" /><span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c8973a]" style={{ fontFamily:"'DM Mono',monospace" }}>{featured.type}</span></div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-white font-bold" style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"1.75rem" }}>{featured.name}</h3>
                <p className="text-white font-bold text-xl mt-1" style={{ fontFamily:"'Playfair Display',Georgia,serif" }}>{fmt(featured.price)}</p>
              </div>
              <p className="text-sm mb-5" style={{ fontFamily:"'DM Mono',monospace", color:"#4a3f35" }}>{featured.breed} · {featured.age} · {featured.size} · {featured.gender}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[...featured.tags, "Vaccinated", "Microchipped", "House trained"].map(t => (
                  <span key={t} className="flex items-center gap-1 px-3 py-1 rounded-full text-xs"
                    style={{ fontFamily:"'DM Sans',sans-serif", background:"rgba(200,151,58,0.08)", color:"#7a6a5a", border:"0.5px solid rgba(200,151,58,0.15)" }}>
                    <FiCheck style={{ width:10, height:10, color:"#7a9e6e" }} />{t}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
                {[["Gender",featured.gender],["Size",featured.size],["Shelter",featured.shelter],["Location",featured.location]].map(([k,v]) => (
                  <div key={k} className="rounded-xl p-3 text-center" style={{ background:"rgba(255,255,255,0.03)", border:"0.5px solid rgba(200,151,58,0.08)" }}>
                    <p className="text-[9px] tracking-wider uppercase mb-1" style={{ fontFamily:"'DM Mono',monospace", color:"#3d3329" }}>{k}</p>
                    <p className="text-xs font-medium text-white" style={{ fontFamily:"'DM Sans',sans-serif" }}>{v}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                <Link href={`/shop/${featured.id}`}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold"
                  style={{ fontFamily:"'DM Sans',sans-serif", background:"#c8973a", color:"#0f0d0a", textDecoration:"none" }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity="0.85"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity="1"}
                  onClick={() => addToCart(`${featured.name} added to enquiries`)}>
                  <IoPaw style={{ width:14, height:14 }} /> Adopt {featured.name}
                </Link>
                <button
                  onClick={() => toggleLike(featured.id)}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-150"
                  style={{ fontFamily:"'DM Sans',sans-serif", background: liked[featured.id] ? "rgba(200,151,58,0.18)" : "transparent", color:"#c8973a", border:"0.5px solid rgba(200,151,58,0.3)", cursor:"pointer" }}>
                  <FiHeart style={{ width:14, height:14, fill: liked[featured.id] ? "currentColor" : "none" }} />
                  {liked[featured.id] ? "Saved" : "Save"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Pet listings grid ── */}
        <div id="pets">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2"><div className="h-px w-6 bg-[#c8973a]" /><span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#c8973a]" style={{ fontFamily:"'DM Mono',monospace" }}>All pets</span></div>
              <h2 className="text-white font-bold" style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(1.5rem,3vw,2rem)" }}>Browse <span className="italic" style={{ color:"#c8973a" }}>available</span> pets</h2>
            </div>
            <p className="text-xs" style={{ fontFamily:"'DM Mono',monospace", color:"#3d3329" }}>
              {filtered.length} result{filtered.length!==1?"s":""} · {Object.values(liked).filter(Boolean).length} saved
            </p>
          </div>

          {/* Search + filter */}
          <div className="flex gap-3 items-center mb-4">
            <div className="flex items-center flex-1 rounded-xl overflow-hidden h-11"
              style={{ background:"#17130d", border:"0.5px solid rgba(200,151,58,0.18)" }}>
              <FiSearch className="ml-4 flex-shrink-0" style={{ color:"#4a3f35", width:15, height:15 }} />
              <input type="text" value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search by name or breed…"
                className="flex-1 h-full px-3 bg-transparent outline-none text-sm"
                style={{ fontFamily:"'DM Sans',sans-serif", color:"#d4b896" }} />
              {search && <button onClick={() => setSearch("")} className="mr-3 text-xs" style={{ color:"#4a3f35", background:"none", border:"none", cursor:"pointer" }}>✕</button>}
            </div>
            <button onClick={() => setShowFilters(f => !f)}
              className="flex items-center gap-2 h-11 px-4 rounded-xl text-sm font-medium transition-all duration-150"
              style={{ fontFamily:"'DM Sans',sans-serif", background: showFilters ? "#c8973a" : "#17130d", color: showFilters ? "#0f0d0a" : "#c8973a", border:"0.5px solid rgba(200,151,58,0.25)", cursor:"pointer" }}>
              <FiFilter style={{ width:14, height:14 }} /> Filters
            </button>
          </div>

          {showFilters && (
            <motion.div initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:"auto" }} className="flex flex-wrap gap-2 mb-4">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs" style={{ fontFamily:"'DM Mono',monospace", color:"#3d3329" }}>Type:</span>
                {(["All","Adoption","Purchase"] as const).map(v => (
                  <Pill key={v} active={typeFilter===v} onClick={() => setTypeFilter(v)}>{v}</Pill>
                ))}
              </div>
              <div className="flex items-center gap-1.5 flex-wrap ml-4">
                <span className="text-xs" style={{ fontFamily:"'DM Mono',monospace", color:"#3d3329" }}>Size:</span>
                {(["All","Small","Medium","Large"] as const).map(v => (
                  <Pill key={v} active={sizeFilter===v} onClick={() => setSizeFilter(v)}>{v}</Pill>
                ))}
              </div>
            </motion.div>
          )}

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <IoPaw style={{ width:36, height:36, color:"#2a2218" }} />
              <p className="text-sm" style={{ fontFamily:"'DM Sans',sans-serif", color:"#3d3329" }}>No pets match your filters.</p>
              <button onClick={() => { setSearch(""); setTypeFilter("All"); setSizeFilter("All"); }}
                className="text-xs px-4 py-2 rounded-full"
                style={{ fontFamily:"'DM Mono',monospace", color:"#c8973a", background:"rgba(200,151,58,0.08)", border:"0.5px solid rgba(200,151,58,0.2)", cursor:"pointer" }}>
                Clear filters
              </button>
            </div>
          ) : (
            <motion.div variants={{ hidden:{}, visible:{ transition:{ staggerChildren:0.07 } } }} initial="hidden" animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filtered.map(p => (
                <PetCard key={p.id} pet={p} liked={!!liked[p.id]} onLike={() => toggleLike(p.id)}
                  onCart={() => addToCart(`${p.name} added to ${p.type==="Adoption"?"enquiries":"cart"}`)} />
              ))}
            </motion.div>
          )}
        </div>

        {/* ── Accessories ── */}
        <div id="accessories">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2"><div className="h-px w-6 bg-[#c8973a]" /><span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#c8973a]" style={{ fontFamily:"'DM Mono',monospace" }}>Accessories</span></div>
              <h2 className="text-white font-bold" style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(1.5rem,3vw,2rem)" }}>Shop <span className="italic" style={{ color:"#c8973a" }}>essentials</span></h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {accessories.map(a => (
              <AccessoryCard key={a.id} acc={a} onAdd={() => addToCart(`${a.name} added to cart`)} />
            ))}
          </div>
        </div>

        {/* ── Testimonials ── */}
        <div>
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2"><div className="h-px w-6 bg-[#c8973a]" /><span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#c8973a]" style={{ fontFamily:"'DM Mono',monospace" }}>Reviews</span></div>
              <h2 className="text-white font-bold" style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(1.5rem,3vw,2rem)" }}>Happy <span className="italic" style={{ color:"#c8973a" }}>families</span></h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r,i) => <ReviewCard key={i} r={r} />)}
          </div>
        </div>

      </div>

      <Toast msg={toast.msg} visible={toast.visible} />
    </div>
  );
}