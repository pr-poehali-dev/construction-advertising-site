import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните обязательные поля",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
      <h3 className="text-2xl font-bold mb-6 text-foreground">Оставить заявку</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
            Имя <span className="text-primary">*</span>
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-foreground">
            Телефон <span className="text-primary">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+7 (999) 123-45-67"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
            Сообщение
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Расскажите о вашем проекте..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full resize-none"
          />
        </div>

        <Button 
          type="submit" 
          size="lg" 
          className="w-full bg-primary hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
              Отправка...
            </>
          ) : (
            <>
              <Icon name="Send" size={20} className="mr-2" />
              Отправить заявку
            </>
          )}
        </Button>
      </div>

      <p className="text-sm text-muted-foreground mt-4 text-center">
        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
      </p>
    </form>
  );
};

export default ContactForm;
