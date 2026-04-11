import { FaInstagram,FaFacebookF } from 'react-icons/fa'
// ── Camera ──
import sonyFx3 from '../assets/dream_rental/camera/sony-fx3.jpg'
import redKomodo from '../assets/dream_rental/camera/red-komodo.jpg'
import canonEosR from '../assets/dream_rental/camera/canon-eos-r.jpg'
import sonyA1 from '../assets/dream_rental/camera/sony-a1.jpg'

// ── Lenses ──
import sigma50E from '../assets/dream_rental/lenses/sigma-af-50mm-f14-dg-hsm-art-lens-e-mount.jpg'
import sigma1628E from '../assets/dream_rental/lenses/sigma-16-28mm-f2.8-e-mount.jpg'
import sigma35EF from '../assets/dream_rental/lenses/sigma-35mm-f14-ef-mount.jpg'
import sony24gmII from '../assets/dream_rental/lenses/sony-24mm-f1.4-gm-ii.jpg'
import sigma85EF from '../assets/dream_rental/lenses/sigma-85mm-f14-dg-hsm-art-lens-for-canon-ef.jpg'
import sony70200 from '../assets/dream_rental/lenses/sony-fe-70-200mm-f28-gm-oss-ii.jpg'
import sigma1835EF from '../assets/dream_rental/lenses/sigma-18-35mm-f18-dc-hsm-art-lens-ef-mount.jpg'
import sigma50EF from '../assets/dream_rental/lenses/sigma-50mm-f1.4-ef-mount.jpg'
import canon100macro from '../assets/dream_rental/lenses/canon-100mm-f2.8-macro.jpg'
import sigmaCine50 from '../assets/dream_rental/lenses/sigma-cine-50mm-t1.5-ef-mount.jpg'
import sony85gmII from '../assets/dream_rental/lenses/sony-85mm-f1.4-gm-ii.jpg'
import sony24105 from '../assets/dream_rental/lenses/sony-24-105mm-f4.jpg'
import sigma2470E from '../assets/dream_rental/lenses/sigma-24-70mm-f2.8-dg-dn-e-mount.jpg'

// ── Lighting ──
import amaranF22c200w from '../assets/dream_rental/lighting/amaran-f22c-200w.jpg'
import aputurePb6Kit from '../assets/dream_rental/lighting/aputure-infinibar-pb6-kit.jpg'
import aputureNovaP300c from '../assets/dream_rental/lighting/aputure-nova-p300c.jpg'
import aputurePb12 from '../assets/dream_rental/lighting/aputure-infinibar-pb12.jpg'
import ls1200dPro from '../assets/dream_rental/lighting/ls1200dpro.webp'
import aputureLs1200d from '../assets/dream_rental/lighting/aputure-ls-1200d.jpg'
import switS2610Softbox from '../assets/dream_rental/lighting/swit-s2610-softbox.jpg'
import aputureB7c from '../assets/dream_rental/lighting/aputure-b7c.avif'
import aputureMc8Kit from '../assets/dream_rental/lighting/aputure-mc-8-light-kit.webp'
import amaranF22c from '../assets/dream_rental/lighting/amaran-f22c.jpg'

// ── Grip ──
import cStand from '../assets/dream_rental/grip/c-stand.jpg'
import heavyDutyStand from '../assets/dream_rental/grip/heavy-duty-light-stand.jpg'
import superClamp from '../assets/dream_rental/grip/super-clamp.jpg'
import boomArmExtension from '../assets/dream_rental/grip/boom-arm-extension.jpg'

// ── Diffusers ──
import softbox50 from '../assets/dream_rental/diffusers/softbox-50.webp'
import aputureFresnel from '../assets/dream_rental/diffusers/aputure-f10-fresnel.webp'
import lightdomeGrid from '../assets/dream_rental/diffusers/lightdome-90-grid.webp'
import leeFilterPack from '../assets/dream_rental/diffusers/lee-filter-location-pack.jpg'

// ── Camera Accessories ──
import djiRs4Pro from '../assets/dream_rental/camera-accessories/dji-rs4-pro-combo.jpg'
import tiltaMatteBox from '../assets/dream_rental/camera-accessories/tilta-mini-matte-box.webp'
import lilliput17 from '../assets/dream_rental/camera-accessories/lilliput-17-monitor-4k-hdmisdi.jpg'
import lilliputA8 from '../assets/dream_rental/camera-accessories/lilliput-a8-4k-hdmi-only.jpg'
import switFlow500 from '../assets/dream_rental/camera-accessories/swit-flow-500.jpg'
import vMountBattery98 from '../assets/dream_rental/camera-accessories/v-mount-battery-shape-98wh.jpg'
import tiltaRingGrip from '../assets/dream_rental/camera-accessories/tilta-ringgrip-pro.webp'

// ── Smoke Machine ──
import smokeMachine1800w from '../assets/dream_rental/smoke-machine/smoke-machine-1800w.avif'
import smokeMachine700w from '../assets/dream_rental/smoke-machine/smoke-machine-700w.jpg'

// ── Power ──
import hondaEu2000 from '../assets/dream_rental/power/honda-eu-2000is18kw.jpg'
import hondaEu3000 from '../assets/dream_rental/power/honda-eu3000is-3kw.webp'
import schepach from '../assets/dream_rental/power/scheppach-18kw.png'


//RENT PAGE
export const equipment = [
  // Camera
  { id: 1, category: 'Camera', name: 'Sony FX3 Cinema Camera', image: sonyFx3 },
  { id: 2, category: 'Camera', name: 'RED Komodo 6K Cinema Camera', image: redKomodo },
  { id: 3, category: 'Camera', name: 'Canon EOS R5 Mirrorless Camera', image: canonEosR },
  { id: 4, category: 'Camera', name: 'Sony A1 Mirrorless Camera', image: sonyA1 },

  // Lenses
  { id: 5, category: 'Lenses', name: 'Sigma 50mm f/1.4 DG HSM Art (E Mount)', image: sigma50E },
  { id: 6, category: 'Lenses', name: 'Sigma 16–28mm f/2.8 (E Mount)', image: sigma1628E },
  { id: 7, category: 'Lenses', name: 'Sigma 35mm f/1.4 (EF Mount)', image: sigma35EF },
  { id: 8, category: 'Lenses', name: 'Sony 24mm f/1.4 GM II', image: sony24gmII },
  { id: 9, category: 'Lenses', name: 'Sigma 85mm f/1.4 DG HSM Art (EF Mount)', image: sigma85EF },
  { id: 10, category: 'Lenses', name: 'Sony 70–200mm f/2.8 GM OSS II', image: sony70200 },
  { id: 11, category: 'Lenses', name: 'Sigma 18–35mm f/1.8 DC HSM Art (EF Mount)', image: sigma1835EF },
  { id: 12, category: 'Lenses', name: 'Sigma 50mm f/1.4 (EF Mount)', image: sigma50EF },
  { id: 13, category: 'Lenses', name: 'Canon 100mm f/2.8 Macro Lens', image: canon100macro },
  { id: 14, category: 'Lenses', name: 'Sigma Cine 50mm T1.5 (EF Mount)', image: sigmaCine50 },
  { id: 15, category: 'Lenses', name: 'Sony 85mm f/1.4 GM II', image: sony85gmII },
  { id: 16, category: 'Lenses', name: 'Sony 24–105mm f/4 G Lens', image: sony24105 },
  { id: 17, category: 'Lenses', name: 'Sigma 24–70mm f/2.8 DG DN Art (E Mount)', image: sigma2470E },

  // Lighting
  { id: 18, category: 'Lighting', name: 'Amaran F22c 200W RGBWW Flexible LED Mat (2×2)', image: amaranF22c200w },
  { id: 19, category: 'Lighting', name: 'Aputure INFINIBAR PB6 4-Light Kit', image: aputurePb6Kit },
  { id: 20, category: 'Lighting', name: 'Aputure Nova P300c RGB LED Panel', image: aputureNovaP300c },
  { id: 21, category: 'Lighting', name: 'Aputure INFINIBAR PB12 LED Light', image: aputurePb12 },
  { id: 22, category: 'Lighting', name: 'Aputure LS 1200d Pro LED Light', image: ls1200dPro },
  { id: 23, category: 'Lighting', name: 'Aputure LS 1200d LED Light', image: aputureLs1200d },
  { id: 24, category: 'Lighting', name: 'SWIT S2610 Softbox', image: switS2610Softbox },
  { id: 25, category: 'Lighting', name: 'Aputure B7c RGB LED Bulb', image: aputureB7c },
  { id: 26, category: 'Lighting', name: 'Aputure MC 8-Light Kit', image: aputureMc8Kit },
  { id: 27, category: 'Lighting', name: 'Amaran F22c Flexible LED Mat', image: amaranF22c },

  // Grip
  { id: 28, category: 'Grip', name: 'C-Stand with Boom Arm', image: cStand },
  { id: 29, category: 'Grip', name: 'Heavy-Duty Light Stand', image: heavyDutyStand },
  { id: 30, category: 'Grip', name: 'Grip Clamp Set', image: superClamp },
  { id: 31, category: 'Grip', name: 'Boom Arm Extension', image: boomArmExtension },

  // Diffusers
  { id: 32, category: 'Diffusers', name: 'Softbox Diffuser Kit', image: softbox50 },
  { id: 33, category: 'Diffusers', name: 'Fresnel Lens Attachment', image: aputureFresnel },
  { id: 34, category: 'Diffusers', name: 'Honeycomb Grid Set', image: lightdomeGrid },
  { id: 35, category: 'Diffusers', name: 'Lighting Gel Filter Kit', image: leeFilterPack },

  // Camera Accessories
  { id: 36, category: 'Camera Accessories', name: 'DJI RS4 Pro Combo', image: djiRs4Pro },
  { id: 37, category: 'Camera Accessories', name: 'Tilta Mini Matte Box', image: tiltaMatteBox },
  { id: 38, category: 'Camera Accessories', name: 'Lilliput 17" 4K HDMI/SDI Monitor', image: lilliput17 },
  { id: 39, category: 'Camera Accessories', name: 'Lilliput A8 4K HDMI Monitor', image: lilliputA8 },
  { id: 40, category: 'Camera Accessories', name: 'SWIT Flow 500 Wireless Video System', image: switFlow500 },
  { id: 41, category: 'Camera Accessories', name: 'V-Mount Battery 98Wh', image: vMountBattery98 },
  { id: 42, category: 'Camera Accessories', name: 'Tilta Ring Grip Pro', image: tiltaRingGrip },

  // Smoke Machine
  { id: 43, category: 'Smoke Machine', name: 'Professional Fog Machine 1800W', image: smokeMachine1800w },
  { id: 44, category: 'Smoke Machine', name: 'Portable Smoke Machine 700W', image: smokeMachine700w },

  // Power
  { id: 45, category: 'Power', name: 'Honda EU2000i Generator 1.8kW', image: hondaEu2000 },
  { id: 46, category: 'Power', name: 'Honda EU3000i Generator 3kW', image: hondaEu3000 },
  { id: 47, category: 'Power', name: 'Scheppach 18kW Generator', image: schepach}
]

export const filters = [
  'All',
  'Camera',
  'Camera Accessories',
  'Lighting',
  'Diffusers',
  'Grip',
  'Lenses',
  'Power',
  'Smoke Machine',
]

//PORTFOLIO PAGE
export const allProjects = [
  {
    id: 1,
    type: 'Film',
    title: 'Into The Shadows',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
  },
  {
    id: 2,
    type: 'Music Video',
    title: 'Neon Nights',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
  },
  {
    id: 3,
    type: 'Film',
    title: 'The Last Frame',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
  },
  {
    id: 4,
    type: 'Music Video',
    title: 'Pulse',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
  },
  {
    id: 5,
    type: 'Film',
    title: 'Broken Silence',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
  },
  {
    id: 6,
    type: 'Music Video',
    title: 'Rise Up',
    image: 'https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?w=800&q=80',
  },
  {
    id: 7,
    type: 'Film',
    title: 'Silent Roads',
    image: 'https://images.unsplash.com/photo-1500099817043-86d46000d58f?w=800&q=80',
  },
  {
    id: 8,
    type: 'Music Video',
    title: 'Dark Hours',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
  },
  {
    id: 9,
    type: 'Film',
    title: 'The Return',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80',
  },
]

//SERVICE PAGE
export const services = [
  {
    id: 1,
    icon: '🎬',
    title: 'Film Production',
    desc: 'From short films to full features, we handle every stage of production with a cinematic eye.',
  },
  {
    id: 2,
    icon: '🎵',
    title: 'Music Videos',
    desc: 'High-energy, visually stunning music videos that match your sound and elevate your brand as an artist.',
  },
  {
    id: 3,
    icon: '✂️',
    title: 'Post Production',
    desc: 'Editing, color grading, and sound design that give your project the final polish it deserves.',
  },
  {
    id: 4,
    icon: '📱',
    title: 'Content Creation',
    desc: 'Engaging short-form content for social media platforms crafted to grow your brand and reach your audience.',
  },
  {
    id: 5,
    icon: '🎥',
    title: 'Live Production',
    desc: 'Professional live recording and coverage of concerts, political events, conferences and more.',
  },
  {
    id: 6,
    icon: '🎥💡🎚️',
    title: 'Equipment Rental',
    desc: 'Professional grade cameras, lighting and grip equipment available for rent with or without crew.',
  },
]

//PORTFOLIO PAGE
export const projects = [
  {
    id: 1,
    type: 'Film',
    title: 'Into The Shadows',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
  },
  {
    id: 2,
    type: 'Music Video',
    title: 'Neon Nights',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
  },
  {
    id: 3,
    type: 'Film',
    title: 'The Last Frame',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
  },
  {
    id: 4,
    type: 'Music Video',
    title: 'Pulse',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
  },
  {
    id: 5,
    type: 'Film',
    title: 'Broken Silence',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
  },
  {
    id: 6,
    type: 'Music Video',
    title: 'Rise Up',
    image: 'https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?w=800&q=80',
  },
]

//SOCIALS
export const socials = [
    { icon: <FaInstagram />, href: 'https://instagram.com/dreamfilms.ks', label: 'Instagram' },
    { icon: <FaFacebookF />, href: 'https://www.facebook.com/DreamFilms.ks', label: 'Facebook' },
]

//NAVBAR
export const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Contact Us', id: 'contact' },
]

export const rentItems = [
  { label: 'Camera', path: '/rent/camera' },
  { label: 'Camera Accessories', path: '/rent/camera-accessories' },
  { label: 'Lenses', path: '/rent/lenses' },
  { label: 'Lighting', path: '/rent/lighting' },
  { label: 'Diffusers', path: '/rent/diffusers' },
  { label: 'Grip', path: '/rent/grip' },
  { label: 'Power', path: '/rent/power' },
  { label: 'Smoke Machine', path: '/rent/smoke-machine' },
]