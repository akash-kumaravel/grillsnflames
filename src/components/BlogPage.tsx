import { BookOpen, Calendar, Clock, ArrowLeft, ArrowRight, CornerDownRight, Tag } from 'lucide-react';
import { BLOG_ARTICLES } from '../data';
import { BlogArticle } from '../types';

interface BlogPageProps {
  onNavigateContact: () => void;
  onNavigate: (section: import('../types').ActiveSection) => void;
  selectedArticleId: string | null;
  onSelectArticle: (id: string | null) => void;
}

export default function BlogPage({ onNavigateContact, onNavigate, selectedArticleId, onSelectArticle }: BlogPageProps) {
  const activeArticle = BLOG_ARTICLES.find(a => a.id === selectedArticleId);

  return (
    <div id="blog-catalog-page" className="min-h-screen bg-[#0b0b0b] text-neutral-350 pb-28 selection:bg-orange-500 selection:text-white">
      <div className="max-w-7xl mx-auto pt-28 sm:pt-36 px-6 md:px-12">
        
        {!selectedArticleId ? (
          /* SECTION 1: BLOG DIRECTORY OVERVIEW */
          <>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-semibold uppercase tracking-widest font-sans">
                Blog
              </span>
              <h1 className="font-sans font-semibold text-3xl md:text-5xl text-white tracking-tight mt-4 mb-3">
                Flames Fireplace Blog — Fire Place & Product Guides
              </h1>
              <p className="font-sans text-sm text-neutral-400 leading-relaxed">
                Expert insights, detailed comparisons, performance reviews, and safety rules directly from the Flames Fireplace technical validation group.
              </p>
            </div>

            {/* Articles Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {BLOG_ARTICLES.map((article) => (
                <div
                  key={article.id}
                  className="bg-[#121212] rounded-3xl overflow-hidden border border-neutral-800 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="p-8">
                    {/* Meta stats */}
                    <div className="flex items-center gap-3 text-[10px] uppercase font-mono font-bold text-neutral-450 mb-4 pb-3 border-b border-neutral-800">
                      <span className="text-orange-500 font-semibold">{article.content.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.content.readTime}
                      </span>
                    </div>

                    <h2 className="font-sans text-lg font-semibold text-white hover:text-orange-400 leading-snug tracking-tight mb-3 cursor-pointer" onClick={() => onSelectArticle(article.id)}>
                      {article.title}
                    </h2>
                    
                    <p className="font-sans text-xs text-neutral-455 italic mb-4">
                      Target Search Focus: &ldquo;{article.targetKeyword}&rdquo;
                    </p>

                    <p className="font-sans text-sm text-neutral-400 leading-relaxed line-clamp-4">
                      {article.content.intro}
                    </p>
                  </div>

                  <div className="p-8 pt-0">
                    <button
                      id={`read-article-btn-${article.id}`}
                      onClick={() => {
                        onSelectArticle(article.id);
                        window.scrollTo(0, 0);
                      }}
                      className="text-xs font-bold font-sans text-orange-600 hover:text-orange-700 transition flex items-center gap-1 cursor-pointer"
                    >
                      Read Full Deep-Dive
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#121212] rounded-3xl border border-neutral-800 p-8 md:p-10 mb-16 shadow-sm">
              <h2 className="font-sans text-2xl font-semibold text-white">Explore expert guidance for fireplaces, fire pits, and outdoor living</h2>
              <p className="font-sans text-sm text-neutral-300 leading-relaxed mt-3">Our blog covers popular topics like bio ethanol fireplace safety, installation planning, outdoor kitchen integration, and design ideas for luxury UAE homes.</p>
              <p className="mt-4 text-sm text-neutral-300">Looking for the best options in Dubai? Read our comprehensive landing guide: <a href="https://www.flamesfireplace.com/best-fireplace-dubai" onClick={(e) => { e.preventDefault(); onNavigate('best-fireplace-dubai'); }} className="text-orange-400 hover:underline">Best Fireplace in Dubai</a>.</p>
            </div>

            {/* Architectural Catalog Notice Box */}
            <div className="bg-orange-950/20 rounded-2xl p-6 border border-orange-900/40 max-w-3xl mx-auto flex gap-4">
              <BookOpen className="w-6 h-6 text-orange-400 shrink-0" />
              <div>
                <span className="text-xs font-bold uppercase text-white tracking-wide block mb-1">Architectural Support</span>
                <p className="text-xs text-neutral-450 leading-relaxed font-sans">
                  Are you an interior designer, builder, or architect in the UAE? We offer specialized CAD blocks, direct DWG files, and installation manuals for our 3D Water Vapor cassettes and Bio Ethanol burners. Contact our support team on WhatsApp to access the full architect's toolkit.
                </p>
              </div>
            </div>
          </>
        ) : (
          /* SECTION 2: INDIVIDUAL ARTICLE READING VIEW */
          <div className="max-w-4xl mx-auto bg-[#121212] rounded-3xl p-8 md:p-14 border border-neutral-800 shadow-xs">
            
            <button
              id="back-to-hub-btn"
              onClick={() => onSelectArticle(null)}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white mb-8 cursor-pointer transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>

            {/* Article Header block */}
            <div className="mb-10 pb-6 border-b border-neutral-800">
              <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-semibold uppercase tracking-widest font-sans">
                {activeArticle?.content.category}
              </span>
              
              <h1 className="font-sans font-semibold text-2xl md:text-4xl text-white tracking-tight mt-4 leading-tight">
                {activeArticle?.title}
              </h1>

              <div className="flex flex-wrap gap-4 items-center mt-6 text-xs font-mono font-semibold text-neutral-450">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {activeArticle?.content.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeArticle?.content.readTime}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-orange-400">
                  <Tag className="w-3.5 h-3.5" />
                  {activeArticle?.content.category}
                </span>
              </div>
            </div>

            {/* Main Article Content */}
            <div className="prose max-w-none text-neutral-300 font-sans text-base leading-relaxed space-y-8">
              <p className="font-medium text-white text-lg leading-relaxed">
                {activeArticle?.content.intro}
              </p>

              {activeArticle?.content.sections.map((section, sidx) => (
                <div key={sidx} className="space-y-4 pt-4">
                  <h3 className="font-sans font-semibold text-lg md:text-xl text-white tracking-tight flex items-center gap-2">
                    <CornerDownRight className="w-4 h-4 text-orange-500 shrink-0" />
                    {section.heading}
                  </h3>
                  {section.paragraphs.map((p, pidx) => (
                    <p key={pidx} className="leading-relaxed text-neutral-350">
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              {/* Special Q&A schema block if present */}
              {activeArticle?.content.faq && (
                <div className="bg-orange-950/20 rounded-2xl p-6 border border-orange-900/40 mt-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400">
                    Expert Design Guidance
                  </span>
                  <h4 className="font-sans font-semibold text-white text-sm md:text-base mt-2 mb-2">
                    Q: {activeArticle.content.faq.question}
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-neutral-350 leading-relaxed">
                    A: {activeArticle.content.faq.answer}
                  </p>
                </div>
              )}
            </div>

            {/* CTA action block */}
            <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-sans font-semibold text-white text-sm">
                  Found this deep-dive insightful?
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Speak direct with the Flames Fireplace design validation team for free product consultations.
                </p>
              </div>
              <button
                id="blog-reading-cta-btn"
                onClick={onNavigateContact}
                className="px-5 py-3 rounded-full bg-neutral-950 text-white hover:bg-orange-500 transition-colors duration-300 font-sans text-xs font-semibold cursor-pointer whitespace-nowrap border border-white/10"
              >
                Request Consultation
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
