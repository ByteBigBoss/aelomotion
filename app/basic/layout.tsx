import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Basic Components and Animations",
    description: "Test Animations",
};

export default function RootLayout({
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
