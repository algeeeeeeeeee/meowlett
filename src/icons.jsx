// Icon shim for lucide-react — safe fallbacks for icons that may not exist in all versions
import {
  AlarmClock, AlertCircle, AlertTriangle, ArrowDown, ArrowRight,
  BadgeDollarSign, BadgeInfo, Ban, Banknote, BarChart2,
  Beer, Bell, BellOff, BellRing, Book, Calculator, Calendar, Camera,
  Car, Cat, CheckCheck, CheckCircle, ChevronDown, ChevronRight,
  CircleDollarSign, CirclePlus, Clock, Coffee,
  Coins, CreditCard, DiamondPlus, DollarSign, Download,
  Droplets, Dumbbell, Equal, FileText,
  Film, Flag, Flame, Flower2, Gamepad2, Gift, Globe,
  Heart, HeartPulse, Home,
  Image, ImagePlus, Inbox, Laptop, LayoutList, Leaf, List, MessageCircle, Monitor,
  Moon, Music, Package, Palette, PawPrint,
  Pencil, PiggyBank, Pill, Pizza, Plane, Plus, Receipt,
  RefreshCw, Repeat, Rocket, Save, Search,
  Settings, Share2, Shirt, ShoppingBag, SlidersHorizontal,
  Smartphone, Smile, Sparkles, Sun,
  Tag, Tags, Target, Trash2, TrendingUp, Umbrella, Upload, User,
  UserPlus, Users, Utensils, Wallet, WifiOff, Wind, Wrench, X,
  Zap, ZoomIn
} from 'lucide-react';

// Safe fallbacks for icons that may not exist in all lucide-react versions
let _ChartPie, _House, _Grape, _Citrus, _HandCoins, _Hash, _PaintbrushVertical,
    _PaintRoller, _Waves, _SunMoon, _Apple;
try { const m = require('lucide-react');
  _ChartPie        = m.ChartPie;
  _House           = m.House;
  _Grape           = m.Grape;
  _Citrus          = m.Citrus;
  _HandCoins       = m.HandCoins;
  _Hash            = m.Hash;
  _PaintbrushVertical = m.PaintbrushVertical;
  _PaintRoller     = m.PaintRoller;
  _Waves           = m.Waves;
  _SunMoon         = m.SunMoon;
  _Apple           = m.Apple;
} catch {}

export const ChartPie         = _ChartPie         || BarChart2;
export const House            = _House             || Home;
export const Grape            = _Grape             || Leaf;
export const Citrus           = _Citrus            || Leaf;
export const HandCoins        = _HandCoins         || Coins;
export const Hash             = _Hash              || Tag;
export const PaintbrushVertical = _PaintbrushVertical || Palette;
export const PaintRoller      = _PaintRoller       || Palette;
export const Waves            = _Waves             || Droplets;
export const SunMoon          = _SunMoon           || Moon;
export const Apple            = _Apple             || Leaf;
// Inline Star — selalu pakai SVG ini, tidak bergantung lucide-react sama sekali
export const Star = ({ size = 24, color = "currentColor", strokeWidth = 2, style = {}, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
    style={style} {...props}>
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
  </svg>
);

export {
  AlarmClock, AlertCircle, AlertTriangle, ArrowDown, ArrowRight,
  BadgeDollarSign, BadgeInfo, Ban, Banknote, BarChart2,
  Beer, Bell, BellOff, BellRing, Book, Calculator, Calendar, Camera,
  Car, Cat, CheckCheck, CheckCircle, ChevronDown, ChevronRight,
  CircleDollarSign, CirclePlus, Clock, Coffee,
  Coins, CreditCard, DiamondPlus, DollarSign, Download,
  Droplets, Dumbbell, Equal, FileText,
  Film, Flag, Flame, Flower2, Gamepad2, Gift, Globe,
  Heart, HeartPulse, Home,
  Image, ImagePlus, Inbox, Laptop, LayoutList, Leaf, List, MessageCircle, Monitor,
  Moon, Music, Package, Palette, PawPrint,
  Pencil, PiggyBank, Pill, Pizza, Plane, Plus, Receipt,
  RefreshCw, Repeat, Rocket, Save, Search,
  Settings, Share2, Shirt, ShoppingBag, SlidersHorizontal,
  Smartphone, Smile, Sparkles, Sun,
  Tag, Tags, Target, Trash2, TrendingUp, Umbrella, Upload, User,
  UserPlus, Users, Utensils, Wallet, WifiOff, Wind, Wrench, X,
  Zap, ZoomIn
};

export const Calculator2 = Calculator;
