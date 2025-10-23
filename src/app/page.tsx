"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Coffee, Crown, Flame, Gift, Heart, Instagram, Linkedin, MapPin, MessageCircle, Sparkles, Star, TrendingUp, Twitter, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Location", id: "contact" },
            { name: "Reviews", id: "testimonials" }
          ]}
          brandName="Brew Haven"
          button={{
            text: "Order Online",
            href: "https://order.brewhaven.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero" className="min-h-screen flex items-center">
        <HeroSplit
          title="Where Every Cup Tells a Story"
          description="Discover the perfect blend of artisanal coffee, cozy atmosphere, and community connection at Brew Haven. From bean to cup, we craft exceptional experiences."
          tag="Local Coffee House"
          tagIcon={Coffee}
          buttons={[
            { text: "Visit Us Today", href: "contact" },
            { text: "View Menu", href: "menu" }
          ]}
          imageSrc="https://images.pexels.com/photos/5198144/pexels-photo-5198144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cozy coffee shop interior with warm lighting and comfortable seating"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Coffee Story"
          description="Founded in 2019, Brew Haven began as a dream to create the perfect neighborhood coffee shop. We source the finest beans, roast them to perfection, and serve them in an atmosphere that feels like home."
          tag="Since 2019"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Premium Quality",
              description: "We source our beans directly from sustainable farms worldwide",
              icon: Award
            },
            {
              title: "Expert Roasting",
              description: "Our master roaster brings 15+ years of experience to every batch",
              icon: Flame
            },
            {
              title: "Community First",
              description: "More than coffee - we're your neighborhood gathering place",
              icon: Users
            }
          ]}
          imageSrc="https://images.pexels.com/photos/17516410/pexels-photo-17516410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional barista carefully preparing coffee"
          imagePosition="right"
          buttons={[
            { text: "Learn More", href: "story" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="What Makes Us Special"
          description="From bean selection to the final sip, every step reflects our commitment to excellence"
          tag="Our Craft"
          tagIcon={Sparkles}
          features={[
            {
              id: "01",
              title: "Artisan Coffee Beans",
              description: "Carefully selected from the world's best coffee regions, roasted in small batches for maximum flavor",
              imageSrc: "https://images.pexels.com/photos/33682396/pexels-photo-33682396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium coffee beans"
            },
            {
              id: "02",
              title: "Master Latte Art",
              description: "Our skilled baristas create beautiful designs in every cup, making each drink a work of art",
              imageSrc: "https://images.pexels.com/photos/2283599/pexels-photo-2283599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Beautiful latte art"
            },
            {
              id: "03",
              title: "Fresh Daily Roasting",
              description: "Beans roasted on-site daily to ensure the freshest, most flavorful coffee experience",
              imageSrc: "https://images.pexels.com/photos/6280322/pexels-photo-6280322.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Coffee roasting process"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Featured Menu Items"
          description="Taste our most popular handcrafted beverages and signature blends"
          tag="Menu Highlights"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "Brew Haven",
              name: "Signature Espresso",
              price: "$3.75",
              rating: 5,
              reviewCount: "2.8k",
              imageSrc: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rich espresso in white cup"
            },
            {
              id: "2",
              brand: "Brew Haven",
              name: "Artisan Cappuccino",
              price: "$4.50",
              rating: 5,
              reviewCount: "3.2k",
              imageSrc: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cappuccino with beautiful foam art"
            },
            {
              id: "3",
              brand: "Brew Haven",
              name: "Cold Brew Special",
              price: "$4.25",
              rating: 5,
              reviewCount: "1.9k",
              imageSrc: "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Refreshing iced cold brew coffee"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Coffee Membership Plans"
          description="Join our coffee family and enjoy exclusive benefits with every visit"
          tag="Membership"
          tagIcon={Gift}
          plans={[
            {
              id: "basic",
              price: "$19/month",
              name: "Coffee Lover",
              buttons: [
                { text: "Get Started", href: "https://membership.brewhaven.com" },
                { text: "Learn More", href: "membership" }
              ],
              features: [
                "10% off all drinks",
                "Free WiFi access",
                "Birthday drink on us",
                "Mobile app ordering"
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Crown,
              price: "$35/month",
              name: "Coffee Enthusiast",
              buttons: [
                { text: "Join Now", href: "https://membership.brewhaven.com" },
                { text: "Compare Plans", href: "membership" }
              ],
              features: [
                "15% off all items",
                "Free drink every week",
                "Priority seating",
                "Exclusive roast tastings",
                "Guest passes (2/month)"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Our Impact by the Numbers"
          description="See how we're brewing success one cup at a time"
          tag="Statistics"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "50K+",
              description: "Happy Customers Served"
            },
            {
              id: "2",
              value: "98%",
              description: "Customer Satisfaction Rate"
            },
            {
              id: "3",
              value: "5 Years",
              description: "Serving Our Community"
            },
            {
              id: "4",
              value: "15+",
              description: "Coffee Bean Origins"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Coffee Artisans"
          description="The passionate people who make every cup exceptional"
          tag="Our Team"
          tagIcon={Coffee}
          members={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Owner & Head Roaster",
              imageSrc: "https://images.pexels.com/photos/34164498/pexels-photo-34164498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Chen",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/sarahcoffee" },
                { icon: Linkedin, url: "https://linkedin.com/in/sarahchen" }
              ]
            },
            {
              id: "2",
              name: "Marcus Rivera",
              role: "Head Barista",
              imageSrc: "https://images.pexels.com/photos/6205520/pexels-photo-6205520.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Marcus Rivera",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/marcusbrews" }
              ]
            },
            {
              id: "3",
              name: "Emily Johnson",
              role: "Coffee Roasting Expert",
              imageSrc: "https://images.pexels.com/photos/6476561/pexels-photo-6476561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Johnson",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/emilyroasts" },
                { icon: Linkedin, url: "https://linkedin.com/in/emilyjohnson" }
              ]
            },
            {
              id: "4",
              name: "David Park",
              role: "Shop Manager",
              imageSrc: "https://images.pexels.com/photos/6930545/pexels-photo-6930545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Park",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/davidpark" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="What Our Customers Say"
          description="Real reviews from our coffee-loving community"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Alex Thompson",
              handle: "@alexcoffee",
              testimonial: "Brew Haven is my daily ritual. The coffee is exceptional and the atmosphere makes it the perfect place to work or catch up with friends.",
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Alex Thompson"
            },
            {
              id: "2",
              name: "Maria Garcia",
              handle: "@maria_writes",
              testimonial: "As a writer, I've tried every coffee shop in town. Nothing compares to the quality and consistency at Brew Haven. Plus, the WiFi is amazing!",
              imageSrc: "https://images.pexels.com/photos/4012966/pexels-photo-4012966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Maria Garcia"
            },
            {
              id: "3",
              name: "James Wilson",
              handle: "@jamesbiz",
              testimonial: "The team at Brew Haven knows exactly how I like my morning cappuccino. It's become an essential part of my daily routine.",
              imageSrc: "https://images.pexels.com/photos/712436/pexels-photo-712436.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Wilson"
            },
            {
              id: "4",
              name: "Lisa Chang",
              handle: "@lisastudies",
              testimonial: "Perfect study spot with incredible coffee. The baristas are so friendly and always make beautiful latte art. Highly recommend!",
              imageSrc: "https://images.pexels.com/photos/3756356/pexels-photo-3756356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Lisa Chang"
            },
            {
              id: "5",
              name: "Robert Davis",
              handle: "@robcoffee",
              testimonial: "I've been coming here for three years and the quality never disappoints. From the beans to the service, everything is top-notch.",
              imageSrc: "https://images.pexels.com/photos/6347902/pexels-photo-6347902.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Robert Davis"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Recognized Among Coffee Excellence"
          description="Proud to be mentioned alongside industry leaders and local favorites"
          tag="Recognition"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/1876277/pexels-photo-1876277.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/30023630/pexels-photo-30023630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/30755359/pexels-photo-30755359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4571356/pexels-photo-4571356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          showCard={true}
          speed={30}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about Brew Haven"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "What are your hours of operation?",
              content: "We're open Monday through Friday 6:00 AM to 8:00 PM, Saturday and Sunday 7:00 AM to 9:00 PM. We're here when you need your coffee fix!"
            },
            {
              id: "2",
              title: "Do you offer dairy-free alternatives?",
              content: "Absolutely! We offer oat milk, almond milk, soy milk, and coconut milk for all our beverages. Just let us know your preference."
            },
            {
              id: "3",
              title: "Can I purchase beans to take home?",
              content: "Yes! All our signature roasts are available for purchase. We sell whole beans and can grind them to your preferred coarseness."
            },
            {
              id: "4",
              title: "Do you have free WiFi?",
              content: "We provide complimentary high-speed WiFi for all customers. Perfect for working, studying, or just browsing while you enjoy your coffee."
            },
            {
              id: "5",
              title: "Do you cater events?",
              content: "We offer catering services for corporate events, meetings, and special occasions. Contact us for custom packages and pricing."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          tagIcon={MapPin}
          title="Come Experience Brew Haven"
          description="Join our community of coffee lovers. Subscribe to our newsletter for updates on new roasts, events, and exclusive member offers."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive updates about new roasts, events, and special offers. You can unsubscribe anytime."
          imageSrc="https://images.pexels.com/photos/3352765/pexels-photo-3352765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Welcoming exterior of Brew Haven coffee shop"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Brew Haven"
          columns={[
            {
              items: [
                { label: "Menu", href: "menu" },
                { label: "About", href: "about" },
                { label: "Our Story", href: "story" },
                { label: "Team", href: "team" }
              ]
            },
            {
              items: [
                { label: "Membership", href: "membership" },
                { label: "Catering", href: "catering" },
                { label: "Events", href: "events" },
                { label: "Gift Cards", href: "gifts" }
              ]
            },
            {
              items: [
                { label: "Location", href: "contact" },
                { label: "Hours", href: "hours" },
                { label: "Contact Us", href: "contact" },
                { label: "Reviews", href: "testimonials" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}