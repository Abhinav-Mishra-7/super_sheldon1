export default function RefundPage() {
  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl font-bold p-4">Refund & Cancellation Policy</h1>
      <iframe
        src="/Files/Refund.pdf"
        width="100%"
        height="90%"
        className="border-none"
      />
    </div>
  );
}
