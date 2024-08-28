import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Advanced Animations",
    description: "Advanced Framer Motion Animations",
};

export default function AdvancedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            {children}
        </section>
    );
}
