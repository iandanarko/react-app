
export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-col h-1/4 bg-white w-full justify-center items-center">
        <h1 className="font-semibold text-2xl md:text-5xl py-5">Frequently Asked Question</h1>
        <span className="max-w-3/4">Browse through the most frequently asked questions</span>
      </div>
      <div className="flex flex-col h-screen bg-[#F8FAFC] w-full items-center">
        <div className="px-3 md:w-1/2">
          <h2 className="font-semibold text-2xl py-8">How can I track my order?</h2>
          <p className="pb-5">You can track your order using the following steps:</p>
          <ol className="pl-5 list-decimal list-outside space-y-2">
            <li>Go to the Order <span className="text-[#4E80EE]">Tracking Page</span>.</li>
            <li>Enter your order number and email address.</li>
            <li>Click on the Track Order button to view the currrent status of your shipment</li>
          </ol>
          <p className="py-8">If you encounter any issues, please visit our <span className="text-[#4E80EE]">Help Center</span></p>
        </div>
        <div className="px-3 md:w-1/2 border-t border-gray-300">
          <h2 className="font-semibold text-2xl py-8">What is your return policy?</h2>
          <p className="pb-5">We offer a 30-day return policy on most items. Here are some key points:</p>
          <ul className="pl-5 list-disc list-outside space-y-2">
            <li><span className="font-semibold">Items must be in original condition:</span> Unworn, unused, and unwashed.</li>
            <li><span className="font-semibold">Include original packaging and tags:</span> All items should be returned with their original packaging and tags.</li>
            <li><span className="font-semibold">Proof of purchase:</span> A receipt or proof of purchase is required.</li>
          </ul>
          <p className="py-8">For more detailed information, read our full <span className="text-[#4E80EE]">Help Center</span></p>
        </div>
      </div>
    </div>
  )
}
