import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Orchestration",
    description: "Control order and timing with framer motion.",
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
