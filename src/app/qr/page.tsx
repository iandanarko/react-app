export default function Page() {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 p-10">
      <div className="flex w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-2/3 p-10">
          <h1 className="text-2xl font-semibold text-blue-800 mb-2">QR code component</h1>
          <p className="text-gray-600 mb-4">
            This is a Figma design file for a Frontend Mentor challenge. Figma is a design tool
            professional teams use to collaborate on projects. Need help using Figma?{' '}
            <a href="#" className="text-blue-600 underline">
              Read our Figma for developers article
            </a>
          </p>
          <div className="mt-8 border-2 border-black-500 p-4 rounded-lg">
            <img
              src="image-qr-code.png"
              alt="QR Code"
              className="w-60 mx-auto"
            />
            <div className="w-1/2 text-center font-bold mx-auto">Improve your front-end skills by building projects</div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/3 bg-gray-50 p-6 border-l border-gray-200 space-y-6">
          {/* Design System Card */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">🎨</span>
              <h2 className="text-lg font-semibold">Design System</h2>
            </div>
            <p className="text-sm text-gray-600">
              The design system contains all the information for reusable components and styles.
            </p>
          </div>

          <hr />

          {/* Designs Card */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-orange-400">🔶</span>
              <h2 className="text-lg font-semibold">Designs</h2>
            </div>
            <p className="text-sm text-gray-600">
              The high-fidelity designs help you build responsive, accessible projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}