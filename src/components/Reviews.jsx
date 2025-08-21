
import { FaStar } from 'react-icons/fa';

export default function Reviews() {
  const reviews = [
    {
      name: 'John Doe',
      role: 'CEO, TechCorp',
      rating: 5,
      message:
        'VibeBinary transformed our online presence. The website is fast, beautiful, and responsive. Excellent communication and support throughout!',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Founder, StartupX',
      rating: 4,
      message:
        'They built our app version and web platform flawlessly. Highly recommend for anyone looking for modern and scalable solutions.',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: 'Michael Johnson',
      role: 'Product Manager, InnovateLab',
      rating: 5,
      message:
        'Professional team with great expertise in React, Next.js, Node.js, and Tailwind. Multiple revisions were handled smoothly.',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  ];

  return (
    <section className="py-20 bg-[#25262A] font-fontPrimary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            What Our <span className="text-[#FFD700]">Clients Say</span>
          </h2>
          <p className="text-white max-w-3xl mx-auto text-lg leading-relaxed">
            We value our clients’ feedback. Here are some of the experiences
            they’ve shared working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#17313E] rounded-3xl shadow-xl p-8 flex flex-col justify-between transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-yellow-400"
                />
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {review.name}
                  </h4>
                  <p className="text-white/70 text-sm">{review.role}</p>
                  <div className="flex mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">{review.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
