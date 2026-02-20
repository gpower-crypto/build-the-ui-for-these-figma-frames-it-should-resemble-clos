import React from 'react';
import { Badge } from '@/components/ui/badge';

interface BlogPostCardProps {
  imageSrc: string;
  title: string;
  tag: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ imageSrc, title, tag }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="relative w-full aspect-[3/2] overflow-hidden">
        <img src={imageSrc} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-medium text-gray-800">{title}</h3>
        <Badge variant="outline" className="w-fit border-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold">
          {tag}
        </Badge>
      </div>
    </div>
  );
};

export default BlogPostCard;
