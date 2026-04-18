import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import Projects from "@/app/components/Projects/Projects";

export default function aramhubWorkPage() {
    return (
        <>
            <Header />
            <main className={`py-20 md:py-32 bg-gray-50 flex flex-col items-center`}
                style={{
                    background: "linear-gradient(to bottom left, rgba(83, 190, 147, 0.5) 0%, #FFFFFF 40.3846%)",
                }}>
                <Projects />
            </main>
            <Footer />
        </>
    );
}
