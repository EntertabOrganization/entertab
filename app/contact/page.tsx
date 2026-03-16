import Link from "next/link";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main>
                <section className="py-16 md:py-24 bg-gradient-to-br from-white via-white to-mint-subtle"
                    style={{
                        background:
                            "linear-gradient(to bottom left, rgba(83, 190, 147, 0.5) 0%, #FFFFFF 40.3846%)",
                    }}>
                    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-22">
                        {/* Page Header */}
                        <div className="text-center mb-12 md:mb-16">
                            <h1 style={{ fontWeight: 700, fontStyle: 'Bold', fontSize: '36px', textAlign: 'center', color: '#53BE93' }} className="mb-4">
                                Opportunity Awaits
                            </h1>
                            <p style={{fontWeight: 600, fontStyle: 'SemiBold', fontSize: '36px', textAlign: 'center', color: '#707072' }} className="max-w-2xl mx-auto">
                                We're here and ready to talk
                            </p>
                        </div>

                        {/* Contact Options Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                            {/* Begin Your Project */}
                            <Link href="/contact/begin-your-project">
                                <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer" style={{ backgroundImage: `url('/Contact/NewProjects.png')`, backgroundSize: 'cover', backgroundPosition: 'center', width: 'auto', height: '800px' }}>
                                    {/* Overlay */}
                                    <div className="absolute w-full h-full flex flex-col justify-center items-center" style={{ width: '668px', height: '800px', opacity: 0.6, left: '-17px', borderRadius: '29px', background: '#FFFFFF' }}>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center p-8">
                                        <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, fontStyle: 'Bold', fontSize: '24px', textAlign: 'center', color: '#707072' }} className="mb-4">
                                            Your vision deserves premium execution
                                        </h4>
                                        <h2 style={{ fontFamily: 'Poppins', fontWeight: 700, fontStyle: 'Bold', fontSize: '36px', textAlign: 'center', color: '#707072' }}>
                                            Start Your Service Request
                                        </h2>
                                    </div>
                                </div>
                            </Link>

                            {/* Start Your Career Journey */}
                            <Link href="/contact/start-your-career-journey">
                                <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer" style={{ backgroundImage: `url('/Contact/Journey.png')`, backgroundSize: 'cover', backgroundPosition: 'center', width: 'auto', height: '800px' }}>
                                    {/* Overlay */}
                                    <div className="absolute w-full h-full flex flex-col justify-center items-center" style={{ width: '668px', height: '800px', opacity: 0.5, left: '-17px', borderRadius: '29px', background: '#FFFFFF' }}>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center p-8">
                                        <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, fontStyle: 'Bold', fontSize: '24px', textAlign: 'center', color: '#707072' }} className="mb-4">
                                            Innovate, Create, Grow
                                        </h4>
                                        <h2 style={{ fontFamily: 'Poppins', fontWeight: 700, fontStyle: 'Bold', fontSize: '36px', textAlign: 'center', color: '#707072' }}>
                                            Join Our Visionary Team
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
