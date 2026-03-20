// Icon compatibility shim for lucide-react
// Direct named imports for optimal tree-shaking
import {
  AlarmClock, AlertCircle, AlertTriangle, Apple, ArrowDown, ArrowRight, BadgeDollarSign, BadgeInfo, Banknote, BarChart2,
  Ban, Beer, Bell, BellOff, BellRing, Book, Calculator, Calendar, Camera,
  Car, Cat, CheckCheck, CheckCircle, ChevronDown, ChevronRight, CircleDollarSign, Clock, Coffee,
  Coins, CreditCard, DiamondPlus, DollarSign, Download, Droplets, Dumbbell, Equal, FileText,
  Film, Flag, Flame, Flower2, Gamepad2, Gift, Globe, Grape, HandCoins, Hash, Heart, HeartPulse, Home,
  Image, ImagePlus, Inbox, Laptop, LayoutList, Leaf, List, Monitor,
  Moon, Music, Package, PaintRoller, Palette, PawPrint, Pencil, PiggyBank, Pill,
  Pizza, Plane, Plus, Receipt, RefreshCw, Repeat, Rocket, Save, Search,
  Settings, Share2, Shirt, ShoppingBag, SlidersHorizontal, Smartphone, Sparkles, Sun, SunMoon,
  Tag, Tags, Target, Trash2, TrendingUp, Umbrella, Upload, User,
  UserPlus, Users, Utensils, Wallet, WifiOff, Wind, Wrench, X,
  Zap, ZoomIn
} from 'lucide-react';

// House and ChartPie renamed/missing in some versions — safe dynamic fallback
let _House, _ChartPie;
try { const m = require('lucide-react'); _House = m.House; _ChartPie = m.ChartPie; } catch {}
const House   = _House   || Home;
const ChartPie = _ChartPie || BarChart2;

// Re-export all icons used in the app
export {
  AlarmClock, AlertCircle, AlertTriangle, Apple, ArrowDown, ArrowRight, BadgeDollarSign, BadgeInfo,
  Ban, Banknote, BarChart2, Beer, Bell, BellOff, BellRing, Book, Calculator, Calendar,
  Camera, Car, Cat, ChartPie, CheckCheck, CheckCircle, ChevronDown, ChevronRight,
  CircleDollarSign, Clock, Coffee, Coins, CreditCard, DiamondPlus, DollarSign, Download,
  Droplets, Dumbbell, Equal, FileText, Film, Flag, Flame, Flower2, Gamepad2, Gift,
  Globe, Grape, HandCoins, Hash, Heart, HeartPulse, Home, House, Image, ImagePlus, Inbox, Laptop,
  LayoutList, Leaf, List, Monitor, Moon, Music, Package, PaintRoller, Palette, PawPrint,
  Pencil, PiggyBank, Pill, Pizza, Plane, Plus, Receipt, RefreshCw, Repeat, Rocket, Save,
  Search, Settings, Share2, Shirt, ShoppingBag, SlidersHorizontal, Smartphone, Sparkles,
  Sun, SunMoon, Tag, Tags, Target, Trash2, TrendingUp, Umbrella, Upload, User, UserPlus,
  Users, Utensils, Wallet, WifiOff, Wind, Wrench, X, Zap, ZoomIn
};

// Aliases used in App.jsx
export const Calculator2 = Calculator;
