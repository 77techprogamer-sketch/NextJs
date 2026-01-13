import { redirect } from 'next/navigation'

export default function SupportPage() {
    // Temporary redirect until form is implemented
    return (
        <div className="container mx-auto px-4 py-24 text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Support</h1>
            <p className="max-w-xl mx-auto text-lg text-slate-600 mb-8">
                Our support form is getting an upgrade. For immediate assistance, please call us directly.
            </p>
            <div className="text-2xl font-bold text-primary">
                +91 99866 34506
            </div>
        </div>
    )
}
