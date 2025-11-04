import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative min-h-[100svh] md:min-h-[100dvh] flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeJrjjFgcHD5EjpWHLQ3tvq1idke73VMFVkQ&s"
                            alt="Professional real estate office environment"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="heading-display text-white mb-6">
                                Privacy Policy
                            </h1>
                        </motion.div>
                    </div>
                </section>

                {/* Policy Content */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="space-y-16">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="heading-lg text-text-primary mb-8 font-semibold text-2xl">
                                    All Content Protected
                                </h2>

                                <div className="space-y-6 text-body text-text-secondary">
                                    <p>
                                        All content, designs, images, and text featured on this website are protected under the copyright laws of India. Certain names, titles, visual elements, and marks appearing here belong exclusively to Terranova Developers Pvt. Ltd. (‘Terranova') or its affiliates. These may not be used, reproduced, or distributed in any form without written consent. The presence of such marks on this site does not imply any license or permission to use them by others.
                                    </p>
                                </div>

                                <h2 className="heading-lg text-text-primary mt-12 mb-8 font-semibold text-2xl">
                                    General Principles
                                </h2>

                                <div className="space-y-6 text-body text-text-secondary">
                                    <p>
                                        Your privacy is deeply important to us. Terranova’s philosophy of ‘creating dreams you can live in’ extends beyond our physical spaces; it also defines how we handle your personal information with care, transparency, and respect.
                                    </p>
                                    <p>
                                        This Privacy Policy explains what information we collect, how we use it, the limited cases where we may share it, and the steps we take to protect it. While we safeguard your information within systems under our control, we are not responsible for unauthorized disclosures by third-party platforms that operate independently, such as advertisers or websites linked through our pages.
                                    </p>
                                    <p>
                                        We encourage you to review the privacy practices of any website you visit via links on our platform, as they may differ from ours.
                                    </p>
                                    <p>
                                        In this policy, 'Terranova,' 'we,' or 'us' refers to Terranova Developers Pvt. Ltd. and its subsidiaries or affiliates involved in design, construction, and real estate development. The term 'personal information' refers to identifiable details such as your name, address, email, phone number, and payment details, as well as your property and design preferences shared during consultations or collaborations.
                                    </p>
                                    <p>
                                        This policy does not apply to Terranova’s business or corporate customers who engage with us under separate contractual terms containing their own confidentiality clauses.
                                    </p>
                                </div>
                                <h2 className="heading-lg text-text-primary mt-12 mb-8 font-semibold text-2xl">
                                    How You May Provide Us Your Personal Information
                                </h2>

                                <div className="space-y-6 text-body text-text-secondary">
                                    <p>
                                        You may provide personal data to Terranova in several ways, including:
                                    </p>
                                    <ul className="list-disc list-inside pl-6">
                                        <li><b>By enquiring about or reserving a farmhouse:</b> When you contact us for a project, we gather information to understand your requirements and provide relevant details.</li>
                                        <li><b>By registering on our website or social media channels:</b> When you submit forms or subscribe to updates, we collect details like your name, email, phone number, and preferences.</li>
                                        <li><b>By participating in events, design sessions, or marketing programs:</b> We may record information you choose to share when attending workshops, property tours, or surveys.</li>
                                        <li><b>By browsing our website:</b> We automatically collect limited technical information like IP addresses and browser details to help improve website performance.</li>
                                    </ul>
                                    <p>
                                        Any personal data voluntarily submitted to us may be used to contact you through email, phone calls, or WhatsApp messages related to your enquiry, even if your number is registered under DND.
                                    </p>
                                </div>
                                <h2 className="heading-lg text-text-primary mt-12 mb-8 font-semibold text-2xl">
                                    Booking a Consultation Request
                                </h2>
                                <div className="space-y-6 text-body text-text-secondary">
                                    <p>
                                        When you engage with Terranova to build or buy a farm or house, we require certain details to verify identity, process requests, and deliver services. This typically includes your full name, address, phone number, email ID, payment method, and property preferences.
                                    </p>
                                    <p>
                                        We use this data to:
                                    </p>
                                    <ul className="list-disc list-inside pl-6">
                                        <li>Prepare proposals and pricing based on your needs</li>
                                        <li>Coordinate with architects, interior designers, and on-site managers</li>
                                        <li>Facilitate payments and documentation</li>
                                        <li>Share project progress and milestone updates</li>
                                    </ul>
                                    <p>
                                        Your data may also be shared with third parties involved in delivering your farmhouse project, such as:
                                    </p>
                                    <ul className="list-disc list-inside pl-6">
                                        <li>Partner architects, engineers, and contractors.</li>
                                        <li>Landscape and design consultants</li>
                                        <li>Payment processors and banks</li>
                                        <li>Legal and government authorities (for compliance or registration)</li>
                                    </ul>
                                    <p>
                                        All such partners are contractually bound to respect this policy and maintain equivalent levels of confidentiality.
                                    </p>
                                    <p>
                                        If you wish to stop receiving updates or promotional offers, you may unsubscribe anytime by emailing <b>privacy@terranova.in</b> with the subject line 'Unsubscribe.'
                                    </p>
                                </div>
                                <h2 className="heading-lg text-text-primary mt-12 mb-8 font-semibold text-2xl">
                                    Visiting Our Website and Use of Cookies
                                </h2>

                                <div className="space-y-6 text-body text-text-secondary">
                                    <p>
                                        When you visit our website, we may use cookies and similar tracking technologies to improve your experience. Cookies help us remember preferences such as preferred layouts, pages visited, and time spent on each section.
                                    </p>
                                    <p>
                                        We may also collect aggregated analytics data, such as IP address, browser type, and device details, to measure engagement, detect issues, and improve site navigation.
                                    </p>
                                    <p>
                                        We may use tools like <b>Google Analytics</b> and <b>Meta Pixel</b> to better understand visitor interactions and tailor our communications. These tools rely on cookies or web beacons, but Terranova does not use them to personally identify you or sell your data.
                                    </p>
                                    <p>
                                        You can disable cookies in your browser settings at any time, though doing so may affect certain site features.
                                    </p>
                                </div>
                                <h2 className="heading-lg text-text-primary mt-12 mb-8 font-semibold text-2xl">
                                    Why We Collect Personal Information
                                </h2>

                                <div className="space-y-6 text-body text-text-secondary">
                                    <p>
                                        We collect personal information to ensure every client’s experience with Terranova is smooth, personalized, and legally compliant. Specifically, we use your data to:
                                    </p>
                                    <ul className="list-decimal list-inside pl-6">
                                        <li><b>Personalize design and services:</b> Understanding your preferences helps us tailor architecture, furnishings, and amenities that reflect your lifestyle.</li>
                                        <li><b>Communicate project updates:</b> We share status reports, approvals, and milestone alerts to keep you informed.</li>
                                        <li><b>Improve our services:</b> Client feedback and website insights guide us in enhancing our construction quality and client support.</li>
                                        <li><b>Meet legal and regulatory requirements:</b> We store and process data as required under Indian laws, including the DPDP Act, 2023, and TG RERA guidelines.</li>
                                    </ul>
                                </div>
                                <h2 className="heading-lg text-text-primary mt-12 mb-8 font-semibold text-2xl">
                                    When We Disclose Personal Information
                                </h2>

                                <div className="space-y-6 text-body text-text-secondary">
                                    <p>
                                       Terranova discloses personal information only when necessary, and always with strict confidentiality. Your data may be shared with:
                                    </p>
                                    <ul className="list-decimal list-inside pl-6">
                                        <li><b>Authorized project partners</b> directly involved in design, construction, or interior delivery.</li>
                                        <li><b>Financial institutions and auditors</b> to process payments or verify transactions.</li>
                                        <li><b>Legal, regulatory, or government bodies</b> if required by Indian law.</li>
                                        <li><b>Technology partners</b> providing website, hosting, or CRM support under signed confidentiality agreements.</li>
                                    </ul>
                                    <p>
                                        We will never sell, rent, or trade your data to third parties for independent marketing purposes. Any disclosure will always serve a legitimate purpose tied to your engagement with us.
                                    </p>
                                </div>
                                <h2 className="heading-lg text-text-primary mt-12 mb-8 font-semibold text-2xl">
                                    Our Commitment to Data Protection
                                </h2>

                                <div className="space-y-6 text-body text-text-secondary">
                                    <p>
                                        Terranova uses secure digital systems, access controls, and encryption to safeguard your personal information. Only authorized employees and partners can access client data (strictly on a need-to-know basis).
                                    </p>
                                    <p>
                                        We store your data only as long as necessary to fulfil its purpose or as required by law. If a security breach ever occurs, we will take timely remedial action and inform affected individuals as required under Indian law.
                                    </p>
                                    </div>
                                    <h2 className="heading-lg text-text-primary mt-12 mb-8 font-semibold text-2xl">
                                    Your Rights and Choices
                                </h2>

                                <div className="space-y-6 text-body text-text-secondary">
                                    <p>
                                        You have full control over your personal data shared with Terranova. You may:
                                    </p>
                                    <ul className='list-disc list-inside pl-6'>
                                        <li>Request access to the data we hold about you</li>
                                        <li>Ask for correction or deletion of outdated information</li>
                                        <li>Withdraw consent for marketing or promotional communications</li>
                                        <li>Request clarification about how your information is being used</li>
                                    </ul>
                                    <p>
                                        To exercise any of these rights, write to <b>privacy@terranova.in </b>with appropriate identifiers to help us verify your request.
                                    </p>
                                    </div>
                                    <h2 className="heading-lg text-text-primary mt-12 mb-8 font-semibold text-2xl">
                                    Updates to This Policy
                                </h2>

                                <div className="space-y-6 text-body text-text-secondary">
                                    <p>
                                        Terranova may update this Privacy Policy periodically to reflect new services, legal updates, or internal practices. The latest version will always be available on this website, with the effective date mentioned at the top. Continued use of our website or services indicates your acceptance of the updated terms.
                                    </p>
                                    </div>
                                    <h2 className="heading-lg text-text-primary mt-12 mb-8 font-semibold text-2xl">
                                    Contact Us
                                </h2>

                                <div className="space-y-6 text-body text-text-secondary">
                                    <p>
                                        For privacy-related concerns, requests, or clarifications, please reach out to our Privacy Officer at:
                                    </p>
                                    <ul>
                                        <li><b>Terranova Developers Pvt. Ltd.</b></li>
                                        <li>Hyderabad, Telangana, India</li>
                                        <li>📩 <b>contact@terranovadeveloper.in</b></li>
                                    </ul>
                                    </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}

export default PrivacyPolicy
