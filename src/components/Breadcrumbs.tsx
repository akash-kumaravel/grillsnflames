import { Home, ChevronRight } from 'lucide-react';
import { ActiveSection, BreadcrumbStep } from '../types';

export type { BreadcrumbStep };

interface BreadcrumbsProps {
  steps: BreadcrumbStep[];
  onNavigate: (section: ActiveSection) => void;
  onSelectArticle?: (articleId: string | null) => void;
}

export default function Breadcrumbs({ steps, onNavigate, onSelectArticle }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="pt-24 pb-3 px-6 md:px-12 max-w-7xl mx-auto flex items-center"
      itemScope 
      itemType="https://schema.org/BreadcrumbList"
    >
      <ol className="flex items-center flex-wrap gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-sans text-neutral-500 font-medium tracking-wide">
        {/* Home is always the first item */}
        <li 
          itemProp="itemListElement" 
          itemScope 
          itemType="https://schema.org/ListItem"
          className="flex items-center"
        >
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 hover:text-orange-500 transition-colors duration-200 cursor-pointer text-neutral-400 border-none bg-transparent p-0"
            itemProp="item"
          >
            <Home className="w-3.5 h-3.5" />
            <span itemProp="name" className="not-sr-only">Home</span>
          </button>
          <meta itemProp="position" content="1" />
        </li>

        {steps.map((step, index) => {
          const position = index + 2;
          const isLast = index === steps.length - 1;

          return (
            <li 
              key={index}
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
              className="flex items-center"
            >
              <ChevronRight className="w-3 h-3 text-neutral-300 mx-1 shrink-0" />
              
              {isLast ? (
                <span 
                  itemProp="name" 
                  className="text-neutral-200 font-semibold truncate max-w-[150px] sm:max-w-xs md:max-w-md"
                  aria-current="page"
                >
                  {step.label}
                </span>
              ) : (
                <button
                  onClick={() => {
                    if (step.section) {
                      if (step.section === 'blog' && onSelectArticle) {
                        onSelectArticle(step.articleId ?? null);
                      } else {
                        onNavigate(step.section);
                      }
                    }
                  }}
                  className="hover:text-orange-500 transition-colors duration-200 cursor-pointer text-neutral-400 border-none bg-transparent p-0"
                  itemProp="item"
                >
                  <span itemProp="name">{step.label}</span>
                </button>
              )}
              <meta itemProp="position" content={position.toString()} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
