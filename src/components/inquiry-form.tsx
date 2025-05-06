'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
// Removed Checkbox import as it's no longer used
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { siteConfig } from '@/config/site';

const inquiryFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  company: z.string().optional(),
  phone: z.string().optional(),
  productInterest: z.string().min(5, {
    message: 'Please specify your product interest (min. 5 characters).',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }).max(500, {
    message: 'Message must not exceed 500 characters.'
  }),
  // Removed subscribe field from schema
});

export type InquiryFormValues = z.infer<typeof inquiryFormSchema>;

export default function InquiryForm() {
  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      productInterest: '',
      message: '',
      // Removed subscribe from defaultValues
    },
  });

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl sm:text-3xl font-bold">Get in Touch</CardTitle>
        <CardDescription>Fill out the form below and we'll contact you shortly.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            action={`https://formsubmit.co/${siteConfig.contactInfo.formSubmitEmail}`}
            method="POST"
            className="space-y-8"
          >
            <input type="hidden" name="_subject" value={`New Inquiry from ${siteConfig.name} Website`} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={`${siteConfig.url}${siteConfig.contactInfo.formSubmitRedirectUrl}`} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Company Pvt. Ltd." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number (Optional)</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+91 98765 43210" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="productInterest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product(s) of Interest</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., High-Carbon Steel Balls, Ceramic Polishing Media" {...field} />
                  </FormControl>
                  <FormDescription>
                    Let us know which products you are interested in.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us more about your requirements, quantity, or any specific questions you have."
                      className="resize-y min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Removed Subscribe to newsletter FormField */}
            <Button type="submit" size="lg" className="w-full md:w-auto transition-transform hover:scale-105" disabled={form.formState.isSubmitting || !form.formState.isValid}>
              {form.formState.isSubmitting ? "Submitting..." : "Send Inquiry"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
