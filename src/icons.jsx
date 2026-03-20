// Icon compatibility shim for lucide-react
// Direct named imports for optimal tree-shaking
import {
  AlarmClock, AlertCircle, AlertTriangle, ArrowDown, ArrowRight, BadgeDollarSign, Banknote, BarChart2,
  Beer, Bell, BellOff, BellRing, Book, Calculator, Calendar, Camera,
  Car, CheckCheck, CheckCircle, ChevronDown, ChevronRight, CircleDollarSign, Clock, Coffee,
  Coins, CreditCard, DollarSign, Download, Droplets, Dumbbell, Equal, FileText,
  Film, Flame, Flower2, Gamepad2, Gift, Hash, Heart, Home,
  Image, ImagePlus, Inbox, Laptop, LayoutList, Leaf, List, Monitor,
  Moon, Music, Package, Palette, PawPrint, Pencil, PiggyBank, Pill,
  Pizza, Plane, Plus, Receipt, RefreshCw, Repeat, Save, Search,
  Settings, Share2, Shirt, ShoppingBag, SlidersHorizontal, Smartphone, Sparkles, Sun,
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
  AlarmClock, AlertCircle, AlertTriangle, ArrowDown, ArrowRight, BadgeDollarSign,
  Banknote, BarChart2, Beer, Bell, BellOff, BellRing, Book, Calculator, Calendar,
  Camera, Car, ChartPie, CheckCheck, CheckCircle, ChevronDown, ChevronRight,
  CircleDollarSign, Clock, Coffee, Coins, CreditCard, DollarSign, Download,
  Droplets, Dumbbell, Equal, FileText, Film, Flame, Flower2, Gamepad2, Gift,
  Hash, Heart, Home, House, Image, ImagePlus, Inbox, Laptop, LayoutList, Leaf,
  List, Monitor, Moon, Music, Package, Palette, PawPrint, Pencil, PiggyBank,
  Pill, Pizza, Plane, Plus, Receipt, RefreshCw, Repeat, Save, Search, Settings,
  Share2, Shirt, ShoppingBag, SlidersHorizontal, Smartphone, Sparkles, Sun, Tag,
  Tags, Target, Trash2, TrendingUp, Umbrella, Upload, User, UserPlus, Users,
  Utensils, Wallet, WifiOff, Wind, Wrench, X, Zap, ZoomIn
};

// Aliases used in App.jsx
export const Calculator2 = Calculator;
