import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Basic Components and Animations",
    description: "Basic Framer Motion Animations",
};

export default function BasicLayout({
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
