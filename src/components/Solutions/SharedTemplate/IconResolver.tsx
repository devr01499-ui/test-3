import React from "react";
import { icons } from "lucide-react";

export function IconResolver({ 
  name, 
  size = 24, 
  className,
  style
}: { 
  name: string; 
  size?: number; 
  className?: string;
  style?: React.CSSProperties
}) {
  const LucideIcon = (icons as any)[name] || icons.Activity;
  return <LucideIcon size={size} className={className} style={style} />;
}
