import { useState } from 'react';
import Menu from "@/components/ui/Menu";
import { cn } from '@/lib/utils';
import Paths from './Paths';

export default function Preview() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);


    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <section>
            <div className="flex justify-between lg:justify-end mx-2 md:mx-8">
                <Menu className="lg:hidden" isOpen={isMenuOpen} onClick={handleMenuToggle} />
            </div>
            <section className=" min-h-[60vh] lg:flex">
                <div className={cn("lg:w-1/3", isMenuOpen ? 'block' : "hidden lg:block")}>
                    <Paths />
                </div>
                <div className={cn(
                    " mx-1 md:mx-12 lg:mx-24 lg:w-2/3", isMenuOpen ? "hidden lg:block" : "block"
                )}>

                </div>
            </section>
        </section>
    )
}