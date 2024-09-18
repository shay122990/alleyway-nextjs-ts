// globals.d.ts
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
  }
  declare module 'next/image' {
    export interface StaticImageData {
      src: string;
      height: number;
      width: number;
      blurDataURL?: string;
    }
  
    const Image: React.FC<{
      src: string | StaticImageData;
      alt: string;
      layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
      objectFit?: string;
      priority?: boolean;
    }>;
  
    export default Image;
  }
  