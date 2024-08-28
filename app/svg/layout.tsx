import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SVG Animations",
    description: "Animate SVG with Framer Motion",
};

export default function AnimateLayout({
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
