import HeroSection from "@/components/HeroSection";
import TechnicalArsenal from "@/components/TechnicalArsenal";
import ValueScrollytelling from "@/components/ValueScrollytelling";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import BlogSection from "@/components/BlogSection";
import ContactEmail from "@/components/ContactEmail";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const allPosts = getSortedPostsData();

  return (
    <main className="bg-slate-50 text-slate-900">
      <HeroSection />
      <ValueScrollytelling />
      <TechnicalArsenal />
      <ExperienceTimeline />
      <BlogSection posts={allPosts} />
      
      {/* Footer / Contact */}
      <footer className="py-8 border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <p className="text-slate-500 font-mono text-sm mb-6 uppercase tracking-widest">
            Ready to scale & secure your enterprise?
          </p>
          
          {/* Obfuscated Client Component to prevent email scraping */}
          <ContactEmail />
          
          <p className="text-slate-500 mt-12 text-sm">
            © {new Date().getFullYear()} Shan Muthukumarasamy. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
