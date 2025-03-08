import React from "react";
import founderImg from "../../assets/founder.png";

const Founder = () => {
  return (
    <section className="bg-blue-jivhala py-16 text-white">
      <div className="container mx-auto px-4 md:px-16">
        {/* Header Section */}
        <h1 className="font-bebas font-normal text-[32px] md:text-[40px] leading-[100%] tracking-[0%] text-center text-white mb-6 md:mb-8">
          MEET THE FOUNDER
        </h1>
        <p className="font-['Inter'] font-light text-base md:text-lg w-full md:w-[75%] mx-auto leading-[115%] tracking-[7%] opacity-85 text-center mb-8 md:mb-12">
          A world where every girl, irrespective of her circumstances, is
          valued, supported, and encouraged to achieve her dreams. We believe in
          the power of education and empowerment to inspire generations and
          uplift entire communities.
        </p>

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row gap-8 bg-cream border rounded-md md:pl-10">
          {/* Text Column */}
          <div className="md:w-7/12 text-black p-6 md:py-8 md:pr-8 md:pl-0">
            <h2 className="text-xl md:text-2xl font-semibold font-inter text-black mb-4">
              A Beacon of Empowerment and Change
            </h2>
            <p className="text-sm md:text-md leading-relaxed mb-3">
              Sharvari Muthe is a visionary leader, social worker, and
              passionate advocate for women's rights who has dedicated over two
              decades to transforming lives. After earning her advocate charter
              in 2000, she discovered her calling in supporting women facing
              domestic abuse and providing them with legal guidance, emotional
              support, and a path to reclaim their dignity.
            </p>
            <p className="text-sm md:text-md leading-relaxed mb-3">
              In 2013-14, Sharvari volunteered at Snehalay's Pune Snehadhar, an
              experience that profoundly influenced her understanding of the
              struggles faced by marginalized women. This journey led her to
              dream bigger—of creating an organization that not only supports
              women in crisis but also empowers them for the future.
            </p>
            <p className="text-sm md:text-md leading-relaxed mb-3">
              In 2015, her dream became a reality with the founding of the
              Jivhala Foundation. Under her leadership, the foundation has
              become a symbol of hope, particularly for young girls from
              underprivileged backgrounds. One of her hallmark initiatives is a
              hostel for 45 girls, providing not just shelter but also
              education, life skills, and emotional nurturing. Sharvari firmly
              believes that education is the cornerstone of empowerment,
              breaking the cycle of poverty and opening doors to a brighter
              future.
            </p>
            <p className="text-sm md:text-md leading-relaxed mb-3">
              Her relentless efforts have earned her prestigious accolades,
              including the Sarasvati Ganesh Puraskar and the Rashtriya Swayam
              Sangha Janakalyan Samiti Award. These recognitions are a testament
              to her unwavering commitment to justice, empowerment, and social
              change.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-6">
              Through her work, Sharvari continues to inspire countless women
              and young girls across India, showing that with the right support
              and opportunities, every woman has the power to overcome adversity
              and lead a life of dignity and independence.
            </p>
          </div>

          {/* Image Column - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex md:w-5/12 justify-center bg-[#FFDBD1] relative overflow-hidden">
            <img
              src={founderImg}
              alt="Shravani Muthe"
              className="w-[560px] h-full rounded-lg absolute -right-14 py-6"
            />
          </div>
        </div>

        {/* Footer Section - Message from the Founder */}
        <footer className="mt-8 md:mt-12">
          <h2 className="py-3 md:py-4 text-xl md:text-2xl">
            A Message from the Founder
          </h2>
          <div className="bg-white p-4 md:p-6 border rounded-md">
            <p className="text-base md:text-lg italic text-black mb-2">
              "Empowering women isn't just about offering them assistance—it's
              about giving them the tools to build their future and the
              confidence to face the world on their terms. Through Jivhala
              Foundation, I aim to create a world where every girl can dream
              freely, grow fearlessly, and thrive unapologetically. Together, we
              can break barriers and create leaders who inspire change."
            </p>
            <p className="text-sm md:text-base text-black text-right">
              - Adv. Shravani Muthe
            </p>
          </div>
        </footer>

        {/* Separate Founder Image for Mobile only */}
        <div className="block md:hidden mt-6">
          <div className="bg-[#FFDBD1] pt-5 flex items-center justify-end">
            <img
              src={founderImg}
              alt="Shravani Muthe"
              className="w-full max-w-[280px] h-auto right-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
