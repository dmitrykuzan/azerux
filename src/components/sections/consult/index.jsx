import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';



// Sections
//import { MarqueeLines } from '@components/sections';

import dynamic from 'next/dynamic';
const MarqueeLines = dynamic(
  () => import('@components/sections').then((mod) => mod.MarqueeLines),
  { ssr: false }
);


// UI Components
import { Button, Container, Input, Typography, CheckBox, Image } from '@components/ui';

// Hooks
import { useTranslation } from '@hooks';

//Api
import { submitFeedback } from '@api/feedback';

export const Consult = ({ activeSuccessModal, offModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: ''
  });

  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePhoneChange = (phoneNumber) => {
    setFormData((prevData) => ({ ...prevData, phoneNumber }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isChecked) return;

    const updatedFormData = {
      ...formData,
      name: formData.name.trim() === '' ? null : formData.name,
      phoneNumber: formData.phoneNumber.trim() === '' ? null : `${formData.phoneNumber}`,
      email: formData.email.trim() === '' ? null : formData.email
    };

    setIsSubmitting(true);

    try {
      await submitFeedback(updatedFormData);

      if (activeSuccessModal) activeSuccessModal();

      offModal();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="consult">
      <Container>
        <div className="consult__wrapper stack column">
          <div className="consult__form-wrapper stack column">
            <Typography className="consult__form-title" tag="h2" weight="400" upperCase>
              {t.title.get}
            </Typography>

            <Typography className="consult__form-text" tag="p" weight="300">
              {t.subtitle.help}
            </Typography>

            <form className="consult__form stack column" onSubmit={handleSubmit}>
              <div className="consult__form-fields">
                <Input
                  type="text"
                  placeholder={t.labels.name}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {/* <PhoneInput
                  autoFormat
                  className={'input'}
                  value={formData.phoneNumber}
                  onChange={(_, __, ___, format) => {
                    handlePhoneChange(format);
                  }}
                  showDropdown={true}
                  enableAreaCodes={true}
                  placeholder={t.labels.phone}
                  specialLabel=""
                /> */}

                <PhoneInput
                  autoFormat
                  className="input"
                  value={formData.phoneNumber}
                  onChange={(_, __, ___, format) => {
                    handlePhoneChange(format);
                  }}
                  showDropdown={false} // disable if possible
                  enableAreaCodes={false} // disable if possible
                  placeholder={t.labels.phone}
                  specialLabel=""
                />

                <Input
                  type="email"
                  placeholder={t.labels.email}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Button
                  className="consult__form-submit"
                  variant="accent"
                  upperCase
                  text={isSubmitting ? 'Submitting...' : t.actions.consult}
                  disabled={isSubmitting}
                  type="submit"
                />
              </div>
              <CheckBox
                isChecked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                label="By clicking “Get consult”, you agree to our Terms and have read and acknowledge the Global Privacy Statement."
                required
              />
            </form>
          </div>
          <div className="consult__bottom stack column">
            <MarqueeLines />

            <Typography className="consult__bottom-text" tag="p" weight="400" upperCase center>
              {t.title.connecting}
            </Typography>
          </div>

          <Image
            className="consult__image"
            src="/img/consult/c_consult.webp"
            width="614"
            height="564"
            alt="Mobile phone"
          />
        </div>
      </Container>
    </section>
  );
};
