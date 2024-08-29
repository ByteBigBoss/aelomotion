import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Performance Optimization",
    description: "Optimize the performance of your animations.",
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
