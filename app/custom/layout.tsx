import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Custom Animations",
    description: "Animations with Framer Motion useAnimation Hook",
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
