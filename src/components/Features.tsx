
import { features } from '../data/featuresData';


const Features = () => {
  return (
    <section id="services" className="py-28 bg-jg-porcelain">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="eyebrow eyebrow-center mb-4">What we handle</div>
          <h2 className="text-3xl md:text-[2.6rem] font-semibold mb-5 text-jg-ink leading-tight">
            Company formation, and everything after it
          </h2>
          <p className="text-jg-ink-soft leading-relaxed">
            Most consultancies go quiet once the licence is issued. The work that decides
            whether your company is still comfortable in year three is the banking, the
            visa quota and the tax position, so that is where we spend our time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-jg-card rounded-2xl p-8 border border-jg-ink/[0.06] shadow-[0_24px_50px_-28px_rgba(10,18,32,0.28)] hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_rgba(10,18,32,0.35)] transition-all duration-300 group animate-on-scroll"
              style={{ animationDelay: `${(index % 3) * 0.1}s` }}
            >
              <div className="bg-jg-brass rounded-circle w-14 h-14 flex items-center justify-center mb-6 text-jg-gold-deep group-hover:bg-jg-gold-light transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-jg-ink">{feature.title}</h3>
              <p className="text-jg-ink-soft text-[0.96rem] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
