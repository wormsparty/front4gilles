import {type ReactNode} from "react";
import {ThemeSwitcher} from "@/components/theme-switcher.tsx";

type SiteHeaderProps = {
    logo: ReactNode,
    appName: string,
    version: string,
};

export function SiteHeader({ logo, appName, version }: SiteHeaderProps) {
    return (
        <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="ms-12 me-5">
                <div className="flex flex-row h-14 items-center relative">
                    <div className="flex items-center justify-center">
                        <div className="aspect-square rounded-lg">
                            {logo}
                        </div>
                        <div className="flex ms-2 leading-none">
                            <span className="font-semibold ms-1">{appName}</span>
                            <span className="ms-2">{version}</span>
                        </div>
                    </div>
                    <div className="flex ms-auto items-center justify-center">
                        <div>
                            <ThemeSwitcher/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}