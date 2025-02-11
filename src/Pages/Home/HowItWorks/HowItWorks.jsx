import { UserPlus, ShieldCheck, FilePlus, TrendingUp } from "lucide-react";
 // Example image path

export default function HowItWorks() {
  return (
    <section className="px-6 py-12 md:px-16 ">
      <h2 className="text-3xl font-bold text-center text-gray-800 drop-shadow-md md:mb-12 ">How It Works</h2>
      <div className="grid md:grid-cols-2  items-center">
        <div className="flex justify-center">
          <img
            src='https://cdn3d.iconscout.com/3d/premium/thumb/police-investigation-3d-icon-download-in-png-blend-fbx-gltf-file-formats--evidence-document-and-equipment-pack-crime-security-icons-7480863.png'
            alt="How it Works"
            className="lg:w-[350px]   rounded-lg s"
          />
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-200 rounded-full">
              <UserPlus className="text-purple-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Register & Verify</h3>
              <p className="text-gray-600 text-sm">Sign up and complete OTP verification for secure access.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3  bg-purple-200 rounded-full">
              <FilePlus className="text-purple-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Report Crime</h3>
              <p className="text-gray-600 text-sm">Submit detailed reports with image or video evidence.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-200 rounded-full">
              <ShieldCheck className="text-purple-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Community Engagement</h3>
              <p className="text-gray-600 text-sm">Verify reports with upvotes, downvotes, and proof-based comments.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-200 rounded-full">
              <TrendingUp className="text-purple-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Stay Safe & Informed</h3>
              <p className="text-gray-600 text-sm">Browse verified reports and crime trends in your area.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
