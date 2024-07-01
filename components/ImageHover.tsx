import { MapPin } from 'lucide-react';
import React from 'react';

interface ImageHoverComponentProps {
    description: string;
    imageSrc: string;
}

const ImageHoverComponent: React.FC<ImageHoverComponentProps> = ({
    description,
    imageSrc
}) => {
    return (
        <div className="overflow-hidden aspect-video cursor-pointer rounded-xl relative  group">
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100   transition-all duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div>
                    <div className="px-1  text-xl text-slate-100 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1  pb-4 transform transition duration-300 ease-in-out">
                        <div className=" items-center text-sm flex flex-row gap-1">
                            {' '}
                            <MapPin className="w-3 h-3" />
                            {description}
                        </div>
                    </div>
                </div>
            </div>
            <img
                alt={description}
                className="object-cover  group-hover:scale-110 transition duration-300 ease-in-out"
                src={imageSrc}
            />
        </div>
    );
};

export default ImageHoverComponent;
