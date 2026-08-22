import { ActiveSection, ServiceItem, OutdoorFireUnitVariant } from '../types';

export type ProductCardData = ServiceItem | OutdoorFireUnitVariant | {
  id: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  badge?: string;
  category?: string;
  categoryTitle?: string;
  description: string;
  image: string;
  waMessage?: string;
};

interface ServiceCardProps {
  service: ProductCardData;
  onNavigate?: (section: ActiveSection) => void;
}

export default function ServiceCard({ service, onNavigate }: ServiceCardProps) {
  const handleCardClick = () => {
    if (onNavigate) {
      onNavigate(service.id as unknown as ActiveSection);
    }
  };

  const categoryLabel = 
    ('category' in service && service.category) || 
    ('categoryTitle' in service && service.categoryTitle) || 
    'Outdoor';

  const subtitleText = 
    ('subtitle' in service && service.subtitle) || 
    ('tagline' in service && service.tagline) || 
    '';

  const badgeText = service.badge || 'Premium';
  const waText = service.waMessage || `Hi Flames Fireplace, I'm inquiring about ${service.title}`;

  return (
    <div 
      onClick={handleCardClick}
      className="bg-[#121212] rounded-3xl border border-neutral-800 overflow-hidden hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col justify-between group h-full cursor-pointer"
    >
      <div className="relative h-52 w-full overflow-hidden bg-neutral-900">
        <img
          src={service.image}
          alt={`${service.title} — Premium design and installation by Flames Fireplace in Dubai UAE`}
          width={400}
          height={208}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
        />
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-neutral-700/80 px-3 py-1 rounded-full text-[9px] font-bold text-neutral-200 tracking-wider uppercase font-mono">
          {categoryLabel}
        </div>
      </div>

      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 font-mono">
              {badgeText}
            </span>
            <h3 className="font-sans text-lg font-semibold text-white tracking-tight leading-snug group-hover:text-orange-400 transition-colors">
              {service.title}
            </h3>
            {subtitleText && (
              <p className="font-sans text-[11px] font-medium text-neutral-400 italic">
                {subtitleText}
              </p>
            )}
          </div>

          <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light line-clamp-3">
            {service.description}
          </p>
        </div>

        <div className="pt-4 border-t border-neutral-800 flex justify-center">
          <a
            id={`wa-cta-service-${service.id}`}
            href={`https://wa.me/971542112891?text=${encodeURIComponent(waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:min-w-[140px] justify-center px-4 py-3 rounded-2xl bg-[#1b1b1b] hover:bg-emerald-950/60 border border-neutral-700 hover:border-emerald-500/50 transition-all duration-300 flex items-center gap-2 cursor-pointer text-sm font-semibold text-neutral-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-4 h-4 shrink-0">
              <defs>
                <linearGradient id={`wa-sh-service-${service.id}`} x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#57d163" />
                  <stop offset="1" stopColor="#23b33a" />
                </linearGradient>
              </defs>
              <path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z" />
              <path fill={`url(#wa-sh-service-${service.id})`} d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z" />
              <path fill="#fff" fillRule="evenodd" d="M68.016 54.843c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013c.918 1.228 12.718 20.381 31.405 27.75 15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74c1.531-4.293 1.531-7.971 1.072-8.74-.459-.769-1.685-1.226-3.525-2.146s-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
