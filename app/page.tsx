"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ServicesBackgroundSection } from "@/components/materials-section"
import { StatsSection } from "@/components/stats-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { FeaturedProducts } from "@/components/featured-products"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CollectionStrip } from "@/components/collection-strip"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full">
        <HeroSection />
        <StatsSection />
        <ServicesBackgroundSection />
        <FeaturedProducts />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
      {/* <ServicesSection /> */}
      {/* <CollectionStrip /> */}
      {/* <NewsletterSection /> */}
    </div>
  )
}
