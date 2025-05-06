import InquiryForm from '@/components/inquiry-form';

export default function InquirySection() {
  return (
    <section id="inquiry" className="py-16 sm:py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         {/* The title is now part of the InquiryForm CardHeader */}
        <InquiryForm />
      </div>
    </section>
  );
}
