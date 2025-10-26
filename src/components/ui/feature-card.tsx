import { LucideIcon } from 'lucide-react';
import Card from './card';
import { cn } from '../../utils/cn';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

/**
 * Feature card component for displaying service features
 */
export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <Card hover className={cn('text-center', className)}>
      <div className="flex flex-col items-center space-y-4">
        <div className="p-4 bg-primary-100 rounded-2xl">
          <Icon className="w-8 h-8 text-primary-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}

