// lib/iconMapping.js
import { 
    Stethoscope, 
    Heart, 
    Brain, 
    Lungs, 
    Pill,
    Eye, 
    Bone, 
    Baby, 
    Microscope,
    Shield, 
    Activity, 
    Clock, 
    Flame, 
    Ambulance, 
    HeartPulse, 
    Book, 
    Thermometer, 
    Syringe, 
    PenTool,
    Clipboard,
    Zap,
    Hospital,
    UserCheck,
    HelpCircle
  } from 'lucide-react';
  
  // Map string icon names to React components
  export const iconMapping = {
    // Medical specialties
    stethoscope: <Stethoscope className="h-6 w-6 text-blue-500" />,
    heart: <Heart className="h-6 w-6 text-red-500" />,
    brain: <Brain className="h-6 w-6 text-purple-500" />,
    lungs: <Lungs className="h-6 w-6 text-teal-500" />,
    pill: <Pill className="h-6 w-6 text-green-500" />,
    eye: <Eye className="h-6 w-6 text-indigo-500" />,
    bone: <Bone className="h-6 w-6 text-orange-500" />,
    baby: <Baby className="h-6 w-6 text-pink-500" />,
    microscope: <Microscope className="h-6 w-6 text-violet-500" />,
    
    // Emergency services
    shield: <Shield className="h-6 w-6 text-red-500" />,
    flame: <Flame className="h-6 w-6 text-orange-500" />,
    ambulance: <Ambulance className="h-6 w-6 text-blue-500" />,
    heartPulse: <HeartPulse className="h-6 w-6 text-pink-500" />,
    activity: <Activity className="h-6 w-6 text-indigo-500" />,
    zap: <Zap className="h-6 w-6 text-yellow-500" />,
  
    // Nursing and specialty
    clipboard: <Clipboard className="h-6 w-6 text-teal-500" />,
    thermometer: <Thermometer className="h-6 w-6 text-red-400" />,
    syringe: <Syringe className="h-6 w-6 text-purple-500" />,
    penTool: <PenTool className="h-6 w-6 text-cyan-500" />,
    book: <Book className="h-6 w-6 text-emerald-500" />,
    hospital: <Hospital className="h-6 w-6 text-green-500" />,
    userCheck: <UserCheck className="h-6 w-6 text-blue-500" />,
    
    // General/Default
    clock: <Clock className="h-6 w-6 text-slate-500" />,
    default: <HelpCircle className="h-6 w-6 text-slate-500" />
  };