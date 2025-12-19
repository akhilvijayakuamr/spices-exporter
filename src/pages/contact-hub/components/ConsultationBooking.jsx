import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationBooking = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    timezone: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const consultationTypes = [
    { value: 'bulk-order', label: 'Bulk Order Discussion' },
    { value: 'quality-review', label: 'Quality & Certification Review' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'product-demo', label: 'Product Demonstration' },
    { value: 'export-process', label: 'Export Process Consultation' },
    { value: 'custom-requirements', label: 'Custom Requirements' }
  ];

  const timezones = [
    { value: 'ist', label: 'IST (India Standard Time)' },
    { value: 'est', label: 'EST (Eastern Standard Time)' },
    { value: 'pst', label: 'PST (Pacific Standard Time)' },
    { value: 'gmt', label: 'GMT (Greenwich Mean Time)' },
    { value: 'aest', label: 'AEST (Australian Eastern Time)' },
    { value: 'gst', label: 'GST (Gulf Standard Time)' }
  ];

  const timeSlots = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' }
  ];

  const validateBooking = () => {
    const newErrors = {};

    if (!bookingData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!bookingData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex?.test(bookingData?.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!bookingData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!bookingData?.consultationType) {
      newErrors.consultationType = 'Please select consultation type';
    }

    if (!bookingData?.preferredDate) {
      newErrors.preferredDate = 'Please select a date';
    }

    if (!bookingData?.preferredTime) {
      newErrors.preferredTime = 'Please select a time slot';
    }

    if (!bookingData?.timezone) {
      newErrors.timezone = 'Please select your timezone';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleChange = (field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (!validateBooking()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setBookingSuccess(true);
      setBookingData({
        name: '',
        email: '',
        phone: '',
        consultationType: '',
        preferredDate: '',
        preferredTime: '',
        timezone: '',
        notes: ''
      });

      setTimeout(() => {
        setBookingSuccess(false);
      }, 5000);
    }, 2000);
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow?.setDate(tomorrow?.getDate() + 1);
    return tomorrow?.toISOString()?.split('T')?.[0];
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <Icon name="Calendar" size={32} color="var(--color-accent)" />
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Schedule a Consultation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Book a personalized consultation with our spice experts to discuss your requirements, quality standards, and partnership opportunities
            </p>
          </div>

          {bookingSuccess && (
            <div className="bg-success/10 border border-success rounded-lg p-4 mb-6 flex items-start space-x-3">
              <Icon name="CheckCircle" size={24} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-success mb-1">Consultation Booked Successfully!</h4>
                <p className="text-sm text-success/80">
                  We've received your consultation request. You'll receive a confirmation email with meeting details shortly.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 lg:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                required
                placeholder="Enter your full name"
                value={bookingData?.name}
                onChange={(e) => handleChange('name', e?.target?.value)}
                error={errors?.name}
              />

              <Input
                label="Email Address"
                type="email"
                required
                placeholder="your.email@example.com"
                value={bookingData?.email}
                onChange={(e) => handleChange('email', e?.target?.value)}
                error={errors?.email}
              />

              <Input
                label="Phone Number"
                type="tel"
                required
                placeholder="+1 (555) 000-0000"
                value={bookingData?.phone}
                onChange={(e) => handleChange('phone', e?.target?.value)}
                error={errors?.phone}
              />

              <Select
                label="Consultation Type"
                required
                options={consultationTypes}
                value={bookingData?.consultationType}
                onChange={(value) => handleChange('consultationType', value)}
                error={errors?.consultationType}
                placeholder="Select consultation type"
              />

              <Input
                label="Preferred Date"
                type="date"
                required
                min={getTomorrowDate()}
                value={bookingData?.preferredDate}
                onChange={(e) => handleChange('preferredDate', e?.target?.value)}
                error={errors?.preferredDate}
              />

              <Select
                label="Preferred Time"
                required
                options={timeSlots}
                value={bookingData?.preferredTime}
                onChange={(value) => handleChange('preferredTime', value)}
                error={errors?.preferredTime}
                placeholder="Select time slot"
              />

              <div className="md:col-span-2">
                <Select
                  label="Your Timezone"
                  required
                  options={timezones}
                  value={bookingData?.timezone}
                  onChange={(value) => handleChange('timezone', value)}
                  error={errors?.timezone}
                  placeholder="Select your timezone"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your specific requirements or questions..."
                  value={bookingData?.notes}
                  onChange={(e) => handleChange('notes', e?.target?.value)}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-accent/5 rounded-lg">
              <Icon name="Info" size={20} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Our consultations are conducted via video call (Zoom/Google Meet) or phone. You'll receive meeting details via email after booking confirmation.
              </p>
            </div>

            <Button
              type="submit"
              variant="default"
              size="lg"
              fullWidth
              loading={isSubmitting}
              iconName="Calendar"
              iconPosition="right"
            >
              {isSubmitting ? 'Booking...' : 'Book Consultation'}
            </Button>
          </form>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <Icon name="Clock" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground mb-1">30-60 Minutes</p>
              <p className="text-xs text-muted-foreground">Consultation Duration</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <Icon name="Video" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground mb-1">Video or Phone</p>
              <p className="text-xs text-muted-foreground">Flexible Meeting Options</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <Icon name="Users" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground mb-1">Expert Team</p>
              <p className="text-xs text-muted-foreground">Dedicated Specialists</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;