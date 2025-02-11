import { ShieldCheck, Camera, MessageCircle, Lock } from "lucide-react";

export default function WhyChoseUs() {
  const features = [
    {
      icon: <Camera className="text-primary w-12 h-12 mb-2" />,
      title: "Instant Crime Reporting",
      description: "Share incidents quickly with image or video evidence.",
    },
    {
      icon: <MessageCircle className="text-primary w-12 h-12 mb-2" />,
      title: "Community Verification",
      description: "Upvote, downvote, and comment with mandatory proof attachments.",
    },
    {
      icon: <ShieldCheck className="text-primary w-12 h-12 mb-2" />,
      title: "AI-Powered Descriptions",
      description: "Auto-generated crime descriptions for image uploads.",
    },
    {
      icon: <Lock className="text-primary w-12 h-12 mb-2" />,
      title: "Secure & Verified Platform",
      description: "OTP-based user verification for secure crime posts.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#e2caf8] to-[#e3d1f5] py-16 mt-20 rounded-md">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-semibold text-gray-800 mb-10 drop-shadow-md">
          Why Choose <span className="text-[#9333ea]">CrimeRadar?</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-all duration-300 bg-white shadow-lg rounded-2xl p-8 text-center drop-shadow-md"
            >
              <div className="flex justify-center items-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
