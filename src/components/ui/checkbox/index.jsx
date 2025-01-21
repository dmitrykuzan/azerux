import { useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode';
import Link from 'next/link';
import { Typography } from '@components/ui';

export const CheckBox = (props) => {
  const { isChecked, onChange, name, label, required } = props;

  const darkMode = useDarkMode();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="checkbox">
      <label className="checkbox-label stack align-center">
        <input
          className="checkbox-input"
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={() => onChange((prev) => !prev)}
          required={required}
        />
        <span className="checkbox-fake stack center">
          {isMounted && (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_178_3131)">
                <path
                  d="M3.82918 8.73574C3.73372 8.83176 3.60349 8.88533 3.46821 8.88533C3.33292 8.88533 3.20269 8.83176 3.10723 8.73574L0.224383 5.85243C-0.0747942 5.55325 -0.0747942 5.06812 0.224383 4.7695L0.585358 4.40843C0.884628 4.10926 1.3692 4.10926 1.66838 4.40843L3.46821 6.20836L8.3316 1.34487C8.63087 1.04569 9.11591 1.04569 9.41462 1.34487L9.7756 1.70593C10.0748 2.00511 10.0748 2.49015 9.7756 2.78886L3.82918 8.73574Z"
                  fill={darkMode.value ? '#000' : '#fff'}
                />
              </g>
              <defs>
                <clipPath id="clip0_178_3131">
                  <rect width="10" height="10" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </span>
        <Typography className="checkbox-text" tag="p" weight="200">
          By clicking <span>“Get consult”</span> , you agree to our&nbsp;
          <Link href="/policy/terms">Terms</Link>
          &nbsp;and have read and acknowledge the&nbsp;
          <Link href="/policy/privacy">Global Privacy Statement</Link>&nbsp;
        </Typography>
      </label>
    </div>
  );
};
