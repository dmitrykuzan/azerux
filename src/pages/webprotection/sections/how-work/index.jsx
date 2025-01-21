import { useState } from 'react';
import { Container, Image, Typography } from '@components/ui';
import { useTranslation } from '@hooks';

export const HowWork = () => {
  const [activeTab, setActiveTab] = useState('on');

  const t = useTranslation();

  return (
    <section className="how-work">
      <Container>
        <div className="how-work__wrapper stack column">
          <div className="how-work__text stack column">
            <Typography tag="h2" variant="h1" weight="300" upperCase center>
              {t.title.howworks}
            </Typography>
            <Typography tag="p" className="how-work__subtitle" weight="300" center>
              {t.subtitle.ourcompany}
            </Typography>
          </div>

          <div className="how-work__navigation stack column">
            <Typography className="how-work__navigation-title" tag="h3" weight="300">
              {t.common.defaultguard}
            </Typography>
            <div className="how-work__toggle stack align-center">
              <button
                className={` ${activeTab === 'on' ? 'active' : ''} how-work__toggle-button`}
                onClick={() => setActiveTab('on')}
              >
                on
              </button>
              <button
                className={` ${activeTab === 'off' ? 'active' : ''} how-work__toggle-button`}
                onClick={() => setActiveTab('off')}
              >
                off
              </button>
            </div>
          </div>

          {activeTab === 'on' && (
            <div className="how-work__content">
              <div className="how-work__content-traffic stack align-center">
                <Typography className="how-work__content-traffic--legitimate" color="opacity70" weight="300">
                  {t.common.legitimate}
                </Typography>
                <Typography className="how-work__content-traffic--malicious" color="opacity70" weight="300">
                  {t.common.malicious}
                </Typography>
              </div>

              <div className="how-work__body stack align-center">
                <div className="how-work__items stack">
                  <div className="how-work__item how-work__item stack align-center">
                    <span className="how-work__item-icon">
                      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M65.625 26.25H46.875V16.5694C49.5788 15.7594 51.5625 13.2806 51.5625 10.3125C51.5625 6.68813 48.6244 3.75 45 3.75C41.3756 3.75 38.4375 6.68813 38.4375 10.3125C38.4375 13.2806 40.4212 15.7594 43.125 16.5694V26.25H24.375C18.1613 26.25 13.125 31.2863 13.125 37.5V73.125C13.125 79.3388 18.1613 84.375 24.375 84.375H65.625C71.8387 84.375 76.875 79.3388 76.875 73.125V37.5C76.875 31.2863 71.8387 26.25 65.625 26.25ZM26.25 47.8125C26.25 44.1881 29.1881 41.25 32.8125 41.25C36.4369 41.25 39.375 44.1881 39.375 47.8125C39.375 51.4369 36.4369 54.375 32.8125 54.375C29.1881 54.375 26.25 51.4369 26.25 47.8125ZM57.1069 68.3419C53.4038 70.245 49.2169 71.25 45 71.25C40.7831 71.25 36.5962 70.245 32.8931 68.3419C31.9725 67.8675 31.6088 66.7388 32.0813 65.8163C32.5538 64.8975 33.6825 64.5319 34.6069 65.0044C41.0475 68.3156 48.9525 68.3156 55.3931 65.0044C56.3137 64.5319 57.4444 64.8956 57.9187 65.8163C58.3913 66.7369 58.0294 67.8675 57.1069 68.3419ZM57.1875 54.375C53.5631 54.375 50.625 51.4369 50.625 47.8125C50.625 44.1881 53.5631 41.25 57.1875 41.25C60.8119 41.25 63.75 44.1881 63.75 47.8125C63.75 51.4369 60.8119 54.375 57.1875 54.375Z"
                          fill="#2B77F6"
                        />
                        <path
                          d="M57.1875 50.625C58.7408 50.625 60 49.3658 60 47.8125C60 46.2592 58.7408 45 57.1875 45C55.6342 45 54.375 46.2592 54.375 47.8125C54.375 49.3658 55.6342 50.625 57.1875 50.625Z"
                          fill="#2B77F6"
                        />
                        <path
                          d="M32.8125 50.625C34.3658 50.625 35.625 49.3658 35.625 47.8125C35.625 46.2592 34.3658 45 32.8125 45C31.2592 45 30 46.2592 30 47.8125C30 49.3658 31.2592 50.625 32.8125 50.625Z"
                          fill="#2B77F6"
                        />
                        <path
                          d="M82.5 43.125H80.625V67.5H82.5C85.6069 67.5 88.125 64.9819 88.125 61.875V48.75C88.125 45.6431 85.6069 43.125 82.5 43.125Z"
                          fill="#2B77F6"
                        />
                        <path
                          d="M9.375 43.125H7.5C4.39313 43.125 1.875 45.6431 1.875 48.75V61.875C1.875 64.9819 4.39313 67.5 7.5 67.5H9.375V43.125Z"
                          fill="#2B77F6"
                        />
                      </svg>
                    </span>
                    <div className="how-work__item-text stack align-center">
                      <Typography className="how-work__item-title underline" weight="300" color="opacity70">
                        {t.common.legitimatebot}
                      </Typography>
                      <span className="how-work__item-help stack center">
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            opacity="0.7"
                            d="M2.41398 7.02659V4.83992C3.14287 4.80436 3.71176 4.62659 4.12065 4.30659C4.53843 3.98659 4.74732 3.54659 4.74732 2.98659V2.79992C4.74732 2.34659 4.6051 1.98659 4.32065 1.71992C4.03621 1.44436 3.65398 1.30659 3.17398 1.30659C2.65843 1.30659 2.2451 1.45325 1.93398 1.74659C1.63176 2.03992 1.42732 2.41325 1.32065 2.86659L0.333984 2.49325C0.413984 2.20881 0.52954 1.9377 0.680651 1.67992C0.840651 1.41325 1.03621 1.18214 1.26732 0.986586C1.50732 0.782141 1.78732 0.622141 2.10732 0.506585C2.42732 0.39103 2.79621 0.333252 3.21398 0.333252C4.04065 0.333252 4.69398 0.559919 5.17398 1.01325C5.65398 1.46659 5.89398 2.07992 5.89398 2.85325C5.89398 3.27992 5.81843 3.65325 5.66732 3.97325C5.52509 4.28436 5.33843 4.55103 5.10732 4.77325C4.87621 4.99547 4.61398 5.17325 4.32065 5.30659C4.02732 5.43992 3.73398 5.53325 3.44065 5.58659V7.02659H2.41398ZM2.93398 9.95992C2.64954 9.95992 2.44065 9.88881 2.30732 9.74659C2.18287 9.60436 2.12065 9.4177 2.12065 9.18659V9.01325C2.12065 8.78214 2.18287 8.59547 2.30732 8.45325C2.44065 8.31103 2.64954 8.23992 2.93398 8.23992C3.21843 8.23992 3.42287 8.31103 3.54732 8.45325C3.68065 8.59547 3.74732 8.78214 3.74732 9.01325V9.18659C3.74732 9.4177 3.68065 9.60436 3.54732 9.74659C3.42287 9.88881 3.21843 9.95992 2.93398 9.95992Z"
                            fill="var(--clr-default-470)"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="how-work__item stack align-center">
                    <span className="how-work__item-icon">
                      <svg width="91" height="90" viewBox="0 0 91 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_798_5356)">
                          <rect x="10.5" y="10" width="70" height="70" rx="35" fill="white" />
                          <path
                            d="M45.5008 21.791C37.3952 21.791 30.8008 28.3854 30.8008 36.491C30.8008 44.5966 37.3952 51.1911 45.5008 51.1911C53.6064 51.1911 60.2008 44.5966 60.2008 36.491C60.2008 28.3854 53.6064 21.791 45.5008 21.791Z"
                            fill="#121212"
                          />
                          <path
                            d="M61.1768 62.0194C57.7272 57.0629 53.1542 54.3333 48.3 54.3333H42.7C37.8459 54.3333 33.2728 57.0629 29.8232 62.0194C26.3905 66.9516 24.5 73.4621 24.5 80.3521C24.5 81.4462 25.1268 82.3333 25.9 82.3333H65.1C65.8732 82.3333 66.5 81.4462 66.5 80.3521C66.5 73.4621 64.6095 66.9516 61.1768 62.0194Z"
                            fill="#121212"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_798_5356">
                            <rect x="10.5" y="10" width="70" height="70" rx="35" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div className="how-work__item-text stack align-center">
                      <Typography className="how-work__item-title" weight="300" color="opacity70">
                        {t.common.users}
                      </Typography>
                    </div>
                  </div>

                  <div className="how-work__item stack align-center">
                    <span className="how-work__item-icon">
                      <svg width="91" height="90" viewBox="0 0 91 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M47.375 26.25H66.125C72.3387 26.25 77.375 31.2863 77.375 37.5V73.125C77.375 79.3388 72.3387 84.375 66.125 84.375H24.875C18.6613 84.375 13.625 79.3388 13.625 73.125V37.5C13.625 31.2863 18.6613 26.25 24.875 26.25H43.625V16.5694C40.9212 15.7594 38.9375 13.2806 38.9375 10.3125C38.9375 6.68813 41.8756 3.75 45.5 3.75C49.1244 3.75 52.0625 6.68813 52.0625 10.3125C52.0625 13.2806 50.0788 15.7594 47.375 16.5694V26.25ZM33.3943 67.7055C37.0974 65.8023 41.2843 64.7973 45.5012 64.7973C49.7181 64.7974 53.9049 65.8023 57.6081 67.7055C58.5287 68.1798 58.8924 69.3086 58.4199 70.2311C57.9474 71.1498 56.8187 71.5155 55.8943 71.043C49.4537 67.7317 41.5487 67.7317 35.1081 71.043C34.1874 71.5155 33.0568 71.1517 32.5824 70.2311C32.1099 69.3105 32.4718 68.1798 33.3943 67.7055ZM26.75 47.8126C26.75 51.4369 29.6881 54.3751 33.3125 54.3751C35.5151 54.3751 37.4643 53.2899 38.6546 51.6251L29.5 42.4705C27.8351 43.6607 26.75 45.6099 26.75 47.8126ZM57.8421 54.3751C61.4665 54.3751 64.4046 51.4369 64.4046 47.8126C64.4046 45.6099 63.3194 43.6607 61.6546 42.4705L52.5 51.6251C53.6903 53.2899 55.6395 54.3751 57.8421 54.3751Z"
                          fill="#FF3437"
                        />
                        <path
                          d="M83 43.125H81.125V67.5H83C86.1069 67.5 88.625 64.9819 88.625 61.875V48.75C88.625 45.6431 86.1069 43.125 83 43.125Z"
                          fill="#FF3437"
                        />
                        <path
                          d="M9.875 43.125H8C4.89313 43.125 2.375 45.6431 2.375 48.75V61.875C2.375 64.9819 4.89313 67.5 8 67.5H9.875V43.125Z"
                          fill="#FF3437"
                        />
                        <path
                          d="M62.4221 21.806C62.5914 21.9329 62.79 22 62.9967 22H62.9992C63.5636 22 64.0226 21.4952 64.0226 20.8748C64.0226 20.7671 64.0089 20.6611 63.9819 20.5583C63.3926 17.7197 63.6719 15.4336 64.8116 13.7633C66.1548 11.7948 66.7497 9.26906 66.403 7.00709C66.097 5.00257 65.1172 3.33637 63.5707 2.18961C63.2283 1.93488 62.7577 1.93687 62.4164 2.19523C62.0683 2.45921 61.9049 2.92299 62.0008 3.37934C62.6371 6.36581 62.0585 8.25774 60.6076 11.1289C59.704 12.9166 59.3349 14.9249 59.5683 16.7836C59.8327 18.8857 60.821 20.6235 62.4221 21.806Z"
                          fill="#FF3437"
                        />
                        <path
                          d="M28.5779 21.806C28.4086 21.9329 28.21 22 28.0033 22H28.0008C27.4364 22 26.9774 21.4952 26.9774 20.8748C26.9774 20.7671 26.9911 20.6611 27.0181 20.5583C27.6074 17.7197 27.3281 15.4336 26.1884 13.7633C24.8452 11.7948 24.2503 9.26906 24.597 7.00709C24.903 5.00257 25.8828 3.33637 27.4293 2.18961C27.7717 1.93488 28.2423 1.93687 28.5836 2.19523C28.9317 2.45921 29.0951 2.92299 28.9992 3.37934C28.3629 6.36581 28.9415 8.25774 30.3924 11.1289C31.296 12.9166 31.6651 14.9249 31.4317 16.7836C31.1673 18.8857 30.179 20.6235 28.5779 21.806Z"
                          fill="#FF3437"
                        />
                        <path
                          d="M71.9367 20.8268C72.1026 20.9401 72.2965 21 72.4974 21H72.4988C73.0486 21 73.496 20.5538 73.496 20.0055C73.496 19.9124 73.483 19.8203 73.4571 19.7308C72.9943 17.7031 73.2108 16.0756 74.1003 14.8937C75.2141 13.415 75.7072 11.5151 75.4194 9.81191C75.1639 8.29627 74.3464 7.03607 73.0558 6.16814C72.7236 5.94452 72.2738 5.94112 71.9293 6.17495C71.5939 6.40691 71.4329 6.82845 71.5275 7.21884C72.0297 9.35429 71.5697 10.7134 70.4171 12.7797C69.6683 14.1226 69.3629 15.6321 69.557 17.0298C69.7772 18.6197 70.6022 19.9342 71.9367 20.8268Z"
                          fill="#FF3437"
                        />
                        <path
                          d="M19.0633 20.8268C18.8974 20.9401 18.7035 21 18.5026 21H18.5012C17.9514 21 17.504 20.5538 17.504 20.0055C17.504 19.9124 17.517 19.8203 17.5429 19.7308C18.0057 17.7031 17.7892 16.0756 16.8997 14.8937C15.7859 13.415 15.2928 11.5151 15.5806 9.81191C15.8361 8.29627 16.6536 7.03607 17.9442 6.16814C18.2764 5.94452 18.7262 5.94112 19.0707 6.17495C19.4061 6.40691 19.5671 6.82845 19.4725 7.21884C18.9703 9.35429 19.4303 10.7134 20.5829 12.7797C21.3317 14.1226 21.6371 15.6321 21.443 17.0298C21.2228 18.6197 20.3978 19.9342 19.0633 20.8268Z"
                          fill="#FF3437"
                        />
                      </svg>
                    </span>
                    <div className="how-work__item-text stack align-center">
                      <Typography className="how-work__item-title underline" weight="300" color="opacity70">
                        {t.common.botattack}
                      </Typography>
                      <span className="how-work__item-help stack center">
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            opacity="0.7"
                            d="M2.41398 7.02659V4.83992C3.14287 4.80436 3.71176 4.62659 4.12065 4.30659C4.53843 3.98659 4.74732 3.54659 4.74732 2.98659V2.79992C4.74732 2.34659 4.6051 1.98659 4.32065 1.71992C4.03621 1.44436 3.65398 1.30659 3.17398 1.30659C2.65843 1.30659 2.2451 1.45325 1.93398 1.74659C1.63176 2.03992 1.42732 2.41325 1.32065 2.86659L0.333984 2.49325C0.413984 2.20881 0.52954 1.9377 0.680651 1.67992C0.840651 1.41325 1.03621 1.18214 1.26732 0.986586C1.50732 0.782141 1.78732 0.622141 2.10732 0.506585C2.42732 0.39103 2.79621 0.333252 3.21398 0.333252C4.04065 0.333252 4.69398 0.559919 5.17398 1.01325C5.65398 1.46659 5.89398 2.07992 5.89398 2.85325C5.89398 3.27992 5.81843 3.65325 5.66732 3.97325C5.52509 4.28436 5.33843 4.55103 5.10732 4.77325C4.87621 4.99547 4.61398 5.17325 4.32065 5.30659C4.02732 5.43992 3.73398 5.53325 3.44065 5.58659V7.02659H2.41398ZM2.93398 9.95992C2.64954 9.95992 2.44065 9.88881 2.30732 9.74659C2.18287 9.60436 2.12065 9.4177 2.12065 9.18659V9.01325C2.12065 8.78214 2.18287 8.59547 2.30732 8.45325C2.44065 8.31103 2.64954 8.23992 2.93398 8.23992C3.21843 8.23992 3.42287 8.31103 3.54732 8.45325C3.68065 8.59547 3.74732 8.78214 3.74732 9.01325V9.18659C3.74732 9.4177 3.68065 9.60436 3.54732 9.74659C3.42287 9.88881 3.21843 9.95992 2.93398 9.95992Z"
                            fill="var(--clr-default-470)"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="how-work__lines stack column">
                  <div className="how-work__line-blue-top-bot">
                    <svg width="291" height="7" viewBox="0 0 291 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 3L288 3.99998"
                        stroke="#2B77F6"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="1 16"
                      />
                    </svg>
                  </div>
                  <div className="how-work__line-blue-row">
                    <svg width="301" height="6" viewBox="0 0 301 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line
                        x1="3"
                        y1="3"
                        x2="298"
                        y2="2.99997"
                        stroke="#2B77F6"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="1 16"
                      />
                    </svg>
                  </div>
                  <div className="how-work__line-red-bot-top">
                    <svg width="291" height="7" viewBox="0 0 291 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 4L288 2.99998"
                        stroke="#FF3437"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="1 16"
                      />
                    </svg>
                  </div>
                </div>

                <div className="how-work__lines-mobile">
                  <div className="how-work__line-red-left-right">
                    <svg width="7" height="105" viewBox="0 0 7 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 3L3.5 52.5L4.00001 102"
                        stroke="#FF3437"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="1 16"
                      />
                    </svg>
                  </div>

                  <div className="how-work__line-blue-column">
                    <svg width="6" height="101" viewBox="0 0 6 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line
                        x1="3"
                        y1="3"
                        x2="3"
                        y2="98"
                        stroke="#2B77F6"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="1 16"
                      />
                    </svg>
                  </div>

                  <div className="how-work__line-blue-left-right">
                    <svg width="7" height="105" viewBox="0 0 7 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 3L3.00001 102"
                        stroke="#2B77F6"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="1 16"
                      />
                    </svg>
                  </div>
                </div>

                <div className="how-work__images stack align-center">
                  <div className="how-work__image stack column center">
                    <Image src="/img/webprotection/w_guard.webp" width="201" height="197" alt="how-work image" />

                    <div className="how-work__image-label">
                      <Typography weight="300" color="opacity70" center>
                        {t.common.internet}
                      </Typography>
                    </div>
                  </div>

                  <div className="how-work__lines how-work__lines--middle stack column">
                    <div className="how-work__line-blue-row-short">
                      <svg width="170" height="6" viewBox="0 0 170 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line
                          x1="3"
                          y1="3"
                          x2="167"
                          y2="3.00001"
                          stroke="#2B77F6"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray="1 16"
                        />
                      </svg>
                    </div>
                    <div className="how-work__line-blue-row-short">
                      <svg width="170" height="6" viewBox="0 0 170 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line
                          x1="3"
                          y1="3"
                          x2="167"
                          y2="3.00001"
                          stroke="#2B77F6"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray="1 16"
                        />
                      </svg>
                    </div>
                    <div className="how-work__line-red-row">
                      <svg width="127" height="17" viewBox="0 0 127 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line
                          x1="3"
                          y1="8"
                          x2="100"
                          y2="8.00001"
                          stroke="#FF3437"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray="1 16"
                        />
                        <path
                          d="M127 17H121.783L117.307 10.7407H117.218L112.861 17H108L114.64 8.20774L108.326 0H113.573L117.604 5.74785H117.693L121.783 0H126.644L120.271 8.2808L127 17Z"
                          fill="#FF3437"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="how-work__lines-mobile how-work__lines-mobile--center">
                    <div className="how-work__line-red-column-x">
                      <svg width="17" height="90" viewBox="0 0 17 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line
                          x1="9"
                          y1="3"
                          x2="8.99999"
                          y2="61"
                          stroke="#FF3437"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray="1 16"
                        />
                        <path
                          d="M-8.30516e-07 90L-6.02481e-07 84.7832L6.25931 80.3073L6.25931 80.2184L-2.12488e-07 75.8612L0 71L8.79226 77.6396L17 71.3261L17 76.5725L11.2521 80.6037L11.2521 80.6927L17 84.7832L17 89.6443L8.7192 83.2714L-8.30516e-07 90Z"
                          fill="#FF3437"
                        />
                      </svg>
                    </div>

                    <div className="how-work__line-blue-column">
                      <svg width="6" height="101" viewBox="0 0 6 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line
                          x1="3"
                          y1="3"
                          x2="3"
                          y2="98"
                          stroke="#2B77F6"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray="1 16"
                        />
                      </svg>
                    </div>

                    <div className="how-work__line-blue-column">
                      <svg width="6" height="101" viewBox="0 0 6 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line
                          x1="3"
                          y1="3"
                          x2="3"
                          y2="98"
                          stroke="#2B77F6"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray="1 16"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="how-work__image stack column center">
                    <Image src="/img/webprotection/w_protected.webp" width="201" height="197" alt="how-work image" />

                    <div className="how-work__image-label stack align-center">
                      <Typography tag="p" className="underline" weight="300" color="opacity70" center>
                        {t.common.protectedip}
                      </Typography>
                      <span className="how-work__item-help stack center">
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            opacity="0.7"
                            d="M2.41398 7.02659V4.83992C3.14287 4.80436 3.71176 4.62659 4.12065 4.30659C4.53843 3.98659 4.74732 3.54659 4.74732 2.98659V2.79992C4.74732 2.34659 4.6051 1.98659 4.32065 1.71992C4.03621 1.44436 3.65398 1.30659 3.17398 1.30659C2.65843 1.30659 2.2451 1.45325 1.93398 1.74659C1.63176 2.03992 1.42732 2.41325 1.32065 2.86659L0.333984 2.49325C0.413984 2.20881 0.52954 1.9377 0.680651 1.67992C0.840651 1.41325 1.03621 1.18214 1.26732 0.986586C1.50732 0.782141 1.78732 0.622141 2.10732 0.506585C2.42732 0.39103 2.79621 0.333252 3.21398 0.333252C4.04065 0.333252 4.69398 0.559919 5.17398 1.01325C5.65398 1.46659 5.89398 2.07992 5.89398 2.85325C5.89398 3.27992 5.81843 3.65325 5.66732 3.97325C5.52509 4.28436 5.33843 4.55103 5.10732 4.77325C4.87621 4.99547 4.61398 5.17325 4.32065 5.30659C4.02732 5.43992 3.73398 5.53325 3.44065 5.58659V7.02659H2.41398ZM2.93398 9.95992C2.64954 9.95992 2.44065 9.88881 2.30732 9.74659C2.18287 9.60436 2.12065 9.4177 2.12065 9.18659V9.01325C2.12065 8.78214 2.18287 8.59547 2.30732 8.45325C2.44065 8.31103 2.64954 8.23992 2.93398 8.23992C3.21843 8.23992 3.42287 8.31103 3.54732 8.45325C3.68065 8.59547 3.74732 8.78214 3.74732 9.01325V9.18659C3.74732 9.4177 3.68065 9.60436 3.54732 9.74659C3.42287 9.88881 3.21843 9.95992 2.93398 9.95992Z"
                            fill="var(--clr-default-470)"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="how-work__lines stack column how-work__lines--last">
                    <div className="how-work__line-blue-row">
                      <svg width="224" height="6" viewBox="0 0 224 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line
                          x1="3"
                          y1="3"
                          x2="221"
                          y2="3"
                          stroke="#2B77F6"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray="1 16"
                        />
                      </svg>
                    </div>
                    <div className="how-work__line-blue-row">
                      <svg width="224" height="6" viewBox="0 0 224 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line
                          x1="3"
                          y1="3"
                          x2="221"
                          y2="3"
                          stroke="#2B77F6"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray="1 16"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="how-work__lines-mobile how-work__lines-mobile--center">
                    <div className="how-work__line-blue-column">
                      <svg width="6" height="101" viewBox="0 0 6 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line
                          x1="3"
                          y1="3"
                          x2="3"
                          y2="98"
                          stroke="#2B77F6"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray="1 16"
                        />
                      </svg>
                    </div>

                    <div className="how-work__line-blue-column">
                      <svg width="6" height="101" viewBox="0 0 6 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line
                          x1="3"
                          y1="3"
                          x2="3"
                          y2="98"
                          stroke="#2B77F6"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray="1 16"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="how-work__image  how-work__image--last stack column center">
                    <Image
                      className="how-work__image--server"
                      src="/img/webprotection/w_server-decor.svg"
                      width="139"
                      height="93"
                      alt="how-work image"
                    />

                    <Image src="/img/webprotection/w_server.webp" width="201" height="197" alt="how-work image" />

                    <div className="how-work__image-label stack align-center">
                      <Typography className="underline" tag="p" weight="300" color="opacity70" center>
                        {t.common.webserver}
                      </Typography>
                      <span className="how-work__item-help stack center">
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            opacity="0.7"
                            d="M2.41398 7.02659V4.83992C3.14287 4.80436 3.71176 4.62659 4.12065 4.30659C4.53843 3.98659 4.74732 3.54659 4.74732 2.98659V2.79992C4.74732 2.34659 4.6051 1.98659 4.32065 1.71992C4.03621 1.44436 3.65398 1.30659 3.17398 1.30659C2.65843 1.30659 2.2451 1.45325 1.93398 1.74659C1.63176 2.03992 1.42732 2.41325 1.32065 2.86659L0.333984 2.49325C0.413984 2.20881 0.52954 1.9377 0.680651 1.67992C0.840651 1.41325 1.03621 1.18214 1.26732 0.986586C1.50732 0.782141 1.78732 0.622141 2.10732 0.506585C2.42732 0.39103 2.79621 0.333252 3.21398 0.333252C4.04065 0.333252 4.69398 0.559919 5.17398 1.01325C5.65398 1.46659 5.89398 2.07992 5.89398 2.85325C5.89398 3.27992 5.81843 3.65325 5.66732 3.97325C5.52509 4.28436 5.33843 4.55103 5.10732 4.77325C4.87621 4.99547 4.61398 5.17325 4.32065 5.30659C4.02732 5.43992 3.73398 5.53325 3.44065 5.58659V7.02659H2.41398ZM2.93398 9.95992C2.64954 9.95992 2.44065 9.88881 2.30732 9.74659C2.18287 9.60436 2.12065 9.4177 2.12065 9.18659V9.01325C2.12065 8.78214 2.18287 8.59547 2.30732 8.45325C2.44065 8.31103 2.64954 8.23992 2.93398 8.23992C3.21843 8.23992 3.42287 8.31103 3.54732 8.45325C3.68065 8.59547 3.74732 8.78214 3.74732 9.01325V9.18659C3.74732 9.4177 3.68065 9.60436 3.54732 9.74659C3.42287 9.88881 3.21843 9.95992 2.93398 9.95992Z"
                            fill="var(--clr-default-470)"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'off' && (
            <div className="how-work__content">
              <div className="how-work__content-traffic stack align-center">
                <Typography className="how-work__content-traffic--legitimate" color="opacity70" weight="300">
                  {t.common.legitimate}
                </Typography>
                <Typography className="how-work__content-traffic--malicious" color="opacity70" weight="300">
                  {t.common.malicious}
                </Typography>
              </div>

              <div className="how-work__body stack align-center">
                <div className="how-work__items stack">
                  <div className="how-work__item how-work__item stack align-center">
                    <span className="how-work__item-icon">
                      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M65.625 26.25H46.875V16.5694C49.5788 15.7594 51.5625 13.2806 51.5625 10.3125C51.5625 6.68813 48.6244 3.75 45 3.75C41.3756 3.75 38.4375 6.68813 38.4375 10.3125C38.4375 13.2806 40.4212 15.7594 43.125 16.5694V26.25H24.375C18.1613 26.25 13.125 31.2863 13.125 37.5V73.125C13.125 79.3388 18.1613 84.375 24.375 84.375H65.625C71.8387 84.375 76.875 79.3388 76.875 73.125V37.5C76.875 31.2863 71.8387 26.25 65.625 26.25ZM26.25 47.8125C26.25 44.1881 29.1881 41.25 32.8125 41.25C36.4369 41.25 39.375 44.1881 39.375 47.8125C39.375 51.4369 36.4369 54.375 32.8125 54.375C29.1881 54.375 26.25 51.4369 26.25 47.8125ZM57.1069 68.3419C53.4038 70.245 49.2169 71.25 45 71.25C40.7831 71.25 36.5962 70.245 32.8931 68.3419C31.9725 67.8675 31.6088 66.7388 32.0813 65.8163C32.5538 64.8975 33.6825 64.5319 34.6069 65.0044C41.0475 68.3156 48.9525 68.3156 55.3931 65.0044C56.3137 64.5319 57.4444 64.8956 57.9187 65.8163C58.3913 66.7369 58.0294 67.8675 57.1069 68.3419ZM57.1875 54.375C53.5631 54.375 50.625 51.4369 50.625 47.8125C50.625 44.1881 53.5631 41.25 57.1875 41.25C60.8119 41.25 63.75 44.1881 63.75 47.8125C63.75 51.4369 60.8119 54.375 57.1875 54.375Z"
                          fill="#2B77F6"
                        />
                        <path
                          d="M57.1875 50.625C58.7408 50.625 60 49.3658 60 47.8125C60 46.2592 58.7408 45 57.1875 45C55.6342 45 54.375 46.2592 54.375 47.8125C54.375 49.3658 55.6342 50.625 57.1875 50.625Z"
                          fill="#2B77F6"
                        />
                        <path
                          d="M32.8125 50.625C34.3658 50.625 35.625 49.3658 35.625 47.8125C35.625 46.2592 34.3658 45 32.8125 45C31.2592 45 30 46.2592 30 47.8125C30 49.3658 31.2592 50.625 32.8125 50.625Z"
                          fill="#2B77F6"
                        />
                        <path
                          d="M82.5 43.125H80.625V67.5H82.5C85.6069 67.5 88.125 64.9819 88.125 61.875V48.75C88.125 45.6431 85.6069 43.125 82.5 43.125Z"
                          fill="#2B77F6"
                        />
                        <path
                          d="M9.375 43.125H7.5C4.39313 43.125 1.875 45.6431 1.875 48.75V61.875C1.875 64.9819 4.39313 67.5 7.5 67.5H9.375V43.125Z"
                          fill="#2B77F6"
                        />
                      </svg>
                    </span>
                    <div className="how-work__item-text stack align-center">
                      <Typography className="how-work__item-title underline" weight="300" color="opacity70">
                        {t.common.legitimatebot}
                      </Typography>
                      <span className="how-work__item-help stack center">
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            opacity="0.7"
                            d="M2.41398 7.02659V4.83992C3.14287 4.80436 3.71176 4.62659 4.12065 4.30659C4.53843 3.98659 4.74732 3.54659 4.74732 2.98659V2.79992C4.74732 2.34659 4.6051 1.98659 4.32065 1.71992C4.03621 1.44436 3.65398 1.30659 3.17398 1.30659C2.65843 1.30659 2.2451 1.45325 1.93398 1.74659C1.63176 2.03992 1.42732 2.41325 1.32065 2.86659L0.333984 2.49325C0.413984 2.20881 0.52954 1.9377 0.680651 1.67992C0.840651 1.41325 1.03621 1.18214 1.26732 0.986586C1.50732 0.782141 1.78732 0.622141 2.10732 0.506585C2.42732 0.39103 2.79621 0.333252 3.21398 0.333252C4.04065 0.333252 4.69398 0.559919 5.17398 1.01325C5.65398 1.46659 5.89398 2.07992 5.89398 2.85325C5.89398 3.27992 5.81843 3.65325 5.66732 3.97325C5.52509 4.28436 5.33843 4.55103 5.10732 4.77325C4.87621 4.99547 4.61398 5.17325 4.32065 5.30659C4.02732 5.43992 3.73398 5.53325 3.44065 5.58659V7.02659H2.41398ZM2.93398 9.95992C2.64954 9.95992 2.44065 9.88881 2.30732 9.74659C2.18287 9.60436 2.12065 9.4177 2.12065 9.18659V9.01325C2.12065 8.78214 2.18287 8.59547 2.30732 8.45325C2.44065 8.31103 2.64954 8.23992 2.93398 8.23992C3.21843 8.23992 3.42287 8.31103 3.54732 8.45325C3.68065 8.59547 3.74732 8.78214 3.74732 9.01325V9.18659C3.74732 9.4177 3.68065 9.60436 3.54732 9.74659C3.42287 9.88881 3.21843 9.95992 2.93398 9.95992Z"
                            fill="var(--clr-default-470)"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="how-work__item stack align-center">
                    <span className="how-work__item-icon">
                      <svg width="91" height="90" viewBox="0 0 91 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_798_5356)">
                          <rect x="10.5" y="10" width="70" height="70" rx="35" fill="white" />
                          <path
                            d="M45.5008 21.791C37.3952 21.791 30.8008 28.3854 30.8008 36.491C30.8008 44.5966 37.3952 51.1911 45.5008 51.1911C53.6064 51.1911 60.2008 44.5966 60.2008 36.491C60.2008 28.3854 53.6064 21.791 45.5008 21.791Z"
                            fill="#121212"
                          />
                          <path
                            d="M61.1768 62.0194C57.7272 57.0629 53.1542 54.3333 48.3 54.3333H42.7C37.8459 54.3333 33.2728 57.0629 29.8232 62.0194C26.3905 66.9516 24.5 73.4621 24.5 80.3521C24.5 81.4462 25.1268 82.3333 25.9 82.3333H65.1C65.8732 82.3333 66.5 81.4462 66.5 80.3521C66.5 73.4621 64.6095 66.9516 61.1768 62.0194Z"
                            fill="#121212"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_798_5356">
                            <rect x="10.5" y="10" width="70" height="70" rx="35" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div className="how-work__item-text stack align-center">
                      <Typography className="how-work__item-title" weight="300" color="opacity70">
                        {t.common.users}
                      </Typography>
                    </div>
                  </div>

                  <div className="how-work__item stack align-center">
                    <span className="how-work__item-icon">
                      <svg width="91" height="90" viewBox="0 0 91 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M47.375 26.25H66.125C72.3387 26.25 77.375 31.2863 77.375 37.5V73.125C77.375 79.3388 72.3387 84.375 66.125 84.375H24.875C18.6613 84.375 13.625 79.3388 13.625 73.125V37.5C13.625 31.2863 18.6613 26.25 24.875 26.25H43.625V16.5694C40.9212 15.7594 38.9375 13.2806 38.9375 10.3125C38.9375 6.68813 41.8756 3.75 45.5 3.75C49.1244 3.75 52.0625 6.68813 52.0625 10.3125C52.0625 13.2806 50.0788 15.7594 47.375 16.5694V26.25ZM33.3943 67.7055C37.0974 65.8023 41.2843 64.7973 45.5012 64.7973C49.7181 64.7974 53.9049 65.8023 57.6081 67.7055C58.5287 68.1798 58.8924 69.3086 58.4199 70.2311C57.9474 71.1498 56.8187 71.5155 55.8943 71.043C49.4537 67.7317 41.5487 67.7317 35.1081 71.043C34.1874 71.5155 33.0568 71.1517 32.5824 70.2311C32.1099 69.3105 32.4718 68.1798 33.3943 67.7055ZM26.75 47.8126C26.75 51.4369 29.6881 54.3751 33.3125 54.3751C35.5151 54.3751 37.4643 53.2899 38.6546 51.6251L29.5 42.4705C27.8351 43.6607 26.75 45.6099 26.75 47.8126ZM57.8421 54.3751C61.4665 54.3751 64.4046 51.4369 64.4046 47.8126C64.4046 45.6099 63.3194 43.6607 61.6546 42.4705L52.5 51.6251C53.6903 53.2899 55.6395 54.3751 57.8421 54.3751Z"
                          fill="#FF3437"
                        />
                        <path
                          d="M83 43.125H81.125V67.5H83C86.1069 67.5 88.625 64.9819 88.625 61.875V48.75C88.625 45.6431 86.1069 43.125 83 43.125Z"
                          fill="#FF3437"
                        />
                        <path
                          d="M9.875 43.125H8C4.89313 43.125 2.375 45.6431 2.375 48.75V61.875C2.375 64.9819 4.89313 67.5 8 67.5H9.875V43.125Z"
                          fill="#FF3437"
                        />
                        <path
                          d="M62.4221 21.806C62.5914 21.9329 62.79 22 62.9967 22H62.9992C63.5636 22 64.0226 21.4952 64.0226 20.8748C64.0226 20.7671 64.0089 20.6611 63.9819 20.5583C63.3926 17.7197 63.6719 15.4336 64.8116 13.7633C66.1548 11.7948 66.7497 9.26906 66.403 7.00709C66.097 5.00257 65.1172 3.33637 63.5707 2.18961C63.2283 1.93488 62.7577 1.93687 62.4164 2.19523C62.0683 2.45921 61.9049 2.92299 62.0008 3.37934C62.6371 6.36581 62.0585 8.25774 60.6076 11.1289C59.704 12.9166 59.3349 14.9249 59.5683 16.7836C59.8327 18.8857 60.821 20.6235 62.4221 21.806Z"
                          fill="#FF3437"
                        />
                        <path
                          d="M28.5779 21.806C28.4086 21.9329 28.21 22 28.0033 22H28.0008C27.4364 22 26.9774 21.4952 26.9774 20.8748C26.9774 20.7671 26.9911 20.6611 27.0181 20.5583C27.6074 17.7197 27.3281 15.4336 26.1884 13.7633C24.8452 11.7948 24.2503 9.26906 24.597 7.00709C24.903 5.00257 25.8828 3.33637 27.4293 2.18961C27.7717 1.93488 28.2423 1.93687 28.5836 2.19523C28.9317 2.45921 29.0951 2.92299 28.9992 3.37934C28.3629 6.36581 28.9415 8.25774 30.3924 11.1289C31.296 12.9166 31.6651 14.9249 31.4317 16.7836C31.1673 18.8857 30.179 20.6235 28.5779 21.806Z"
                          fill="#FF3437"
                        />
                        <path
                          d="M71.9367 20.8268C72.1026 20.9401 72.2965 21 72.4974 21H72.4988C73.0486 21 73.496 20.5538 73.496 20.0055C73.496 19.9124 73.483 19.8203 73.4571 19.7308C72.9943 17.7031 73.2108 16.0756 74.1003 14.8937C75.2141 13.415 75.7072 11.5151 75.4194 9.81191C75.1639 8.29627 74.3464 7.03607 73.0558 6.16814C72.7236 5.94452 72.2738 5.94112 71.9293 6.17495C71.5939 6.40691 71.4329 6.82845 71.5275 7.21884C72.0297 9.35429 71.5697 10.7134 70.4171 12.7797C69.6683 14.1226 69.3629 15.6321 69.557 17.0298C69.7772 18.6197 70.6022 19.9342 71.9367 20.8268Z"
                          fill="#FF3437"
                        />
                        <path
                          d="M19.0633 20.8268C18.8974 20.9401 18.7035 21 18.5026 21H18.5012C17.9514 21 17.504 20.5538 17.504 20.0055C17.504 19.9124 17.517 19.8203 17.5429 19.7308C18.0057 17.7031 17.7892 16.0756 16.8997 14.8937C15.7859 13.415 15.2928 11.5151 15.5806 9.81191C15.8361 8.29627 16.6536 7.03607 17.9442 6.16814C18.2764 5.94452 18.7262 5.94112 19.0707 6.17495C19.4061 6.40691 19.5671 6.82845 19.4725 7.21884C18.9703 9.35429 19.4303 10.7134 20.5829 12.7797C21.3317 14.1226 21.6371 15.6321 21.443 17.0298C21.2228 18.6197 20.3978 19.9342 19.0633 20.8268Z"
                          fill="#FF3437"
                        />
                      </svg>
                    </span>
                    <div className="how-work__item-text stack align-center">
                      <Typography className="how-work__item-title underline" weight="300" color="opacity70">
                        {t.common.botattack}
                      </Typography>
                      <span className="how-work__item-help stack center">
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            opacity="0.7"
                            d="M2.41398 7.02659V4.83992C3.14287 4.80436 3.71176 4.62659 4.12065 4.30659C4.53843 3.98659 4.74732 3.54659 4.74732 2.98659V2.79992C4.74732 2.34659 4.6051 1.98659 4.32065 1.71992C4.03621 1.44436 3.65398 1.30659 3.17398 1.30659C2.65843 1.30659 2.2451 1.45325 1.93398 1.74659C1.63176 2.03992 1.42732 2.41325 1.32065 2.86659L0.333984 2.49325C0.413984 2.20881 0.52954 1.9377 0.680651 1.67992C0.840651 1.41325 1.03621 1.18214 1.26732 0.986586C1.50732 0.782141 1.78732 0.622141 2.10732 0.506585C2.42732 0.39103 2.79621 0.333252 3.21398 0.333252C4.04065 0.333252 4.69398 0.559919 5.17398 1.01325C5.65398 1.46659 5.89398 2.07992 5.89398 2.85325C5.89398 3.27992 5.81843 3.65325 5.66732 3.97325C5.52509 4.28436 5.33843 4.55103 5.10732 4.77325C4.87621 4.99547 4.61398 5.17325 4.32065 5.30659C4.02732 5.43992 3.73398 5.53325 3.44065 5.58659V7.02659H2.41398ZM2.93398 9.95992C2.64954 9.95992 2.44065 9.88881 2.30732 9.74659C2.18287 9.60436 2.12065 9.4177 2.12065 9.18659V9.01325C2.12065 8.78214 2.18287 8.59547 2.30732 8.45325C2.44065 8.31103 2.64954 8.23992 2.93398 8.23992C3.21843 8.23992 3.42287 8.31103 3.54732 8.45325C3.68065 8.59547 3.74732 8.78214 3.74732 9.01325V9.18659C3.74732 9.4177 3.68065 9.60436 3.54732 9.74659C3.42287 9.88881 3.21843 9.95992 2.93398 9.95992Z"
                            fill="var(--clr-default-470)"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="how-work__lines stack column">
                  <div className="how-work__line-blue-top-bot">
                    <svg width="291" height="7" viewBox="0 0 291 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 3L288 3.99998"
                        stroke="#2B77F6"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="1 16"
                      />
                    </svg>
                  </div>
                  <div className="how-work__line-blue-row">
                    <svg width="301" height="6" viewBox="0 0 301 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line
                        x1="3"
                        y1="3"
                        x2="298"
                        y2="2.99997"
                        stroke="#2B77F6"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="1 16"
                      />
                    </svg>
                  </div>
                  <div className="how-work__line-red-bot-top">
                    <svg width="291" height="7" viewBox="0 0 291 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 4L288 2.99998"
                        stroke="#FF3437"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="1 16"
                      />
                    </svg>
                  </div>
                </div>

                <div className="how-work__lines-mobile">
                  <div className="how-work__line-red-left-right">
                    <svg width="7" height="105" viewBox="0 0 7 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 3L3.5 52.5L4.00001 102"
                        stroke="#FF3437"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="1 16"
                      />
                    </svg>
                  </div>

                  <div className="how-work__line-blue-column">
                    <svg width="6" height="101" viewBox="0 0 6 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line
                        x1="3"
                        y1="3"
                        x2="3"
                        y2="98"
                        stroke="#2B77F6"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="1 16"
                      />
                    </svg>
                  </div>

                  <div className="how-work__line-blue-left-right">
                    <svg width="7" height="105" viewBox="0 0 7 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 3L3.00001 102"
                        stroke="#2B77F6"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="1 16"
                      />
                    </svg>
                  </div>
                </div>

                <div className="how-work__images stack align-center">
                  <div className="how-work__image stack column center">
                    <Image src="/img/webprotection/w_guard.webp" width="201" height="197" alt="how-work image" />

                    <div className="how-work__image-label">
                      <Typography weight="300" color="opacity70" center>
                        {t.common.internet}
                      </Typography>
                    </div>
                  </div>

                  <div className="how-work__lines how-work__lines--middle stack column">
                    <div className="how-work__line-blue-long-x">
                      <svg width="382" height="17" viewBox="0 0 382 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line
                          x1="3"
                          y1="9"
                          x2="348"
                          y2="9.00001"
                          stroke="#2B77F6"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray="1 16"
                        />
                        <path
                          d="M382 17H376.783L372.307 10.7407H372.218L367.861 17H363L369.64 8.20774L363.326 0H368.573L372.604 5.74785H372.693L376.783 0H381.644L375.271 8.2808L382 17Z"
                          fill="#2B77F6"
                        />
                      </svg>
                    </div>
                    <div className="how-work__line-blue-long-x">
                      <svg width="382" height="17" viewBox="0 0 382 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line
                          x1="3"
                          y1="9"
                          x2="348"
                          y2="9.00001"
                          stroke="#2B77F6"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray="1 16"
                        />
                        <path
                          d="M382 17H376.783L372.307 10.7407H372.218L367.861 17H363L369.64 8.20774L363.326 0H368.573L372.604 5.74785H372.693L376.783 0H381.644L375.271 8.2808L382 17Z"
                          fill="#2B77F6"
                        />
                      </svg>
                    </div>
                    <div className="how-work__line-red-long">
                      <svg width="597" height="6" viewBox="0 0 597 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line
                          x1="3"
                          y1="3"
                          x2="594"
                          y2="3"
                          stroke="#FF3437"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray="1 16"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="how-work__lines-mobile how-work__lines-mobile--last">
                    <div className="how-work__line-red-column">
                      <svg width="6" height="115" viewBox="0 0 6 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line
                          x1="3"
                          y1="3"
                          x2="2.99999"
                          y2="112"
                          stroke="#FF3437"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray="1 16"
                        />
                      </svg>
                    </div>

                    <div className="how-work__line-blue-column-x">
                      <svg width="17" height="90" viewBox="0 0 17 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line
                          x1="8"
                          y1="3"
                          x2="7.99999"
                          y2="61"
                          stroke="#2B77F6"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray="1 16"
                        />
                        <path
                          d="M-8.30516e-07 90L-6.02481e-07 84.7832L6.25931 80.3073L6.25931 80.2184L-2.12488e-07 75.8612L0 71L8.79226 77.6396L17 71.3261L17 76.5725L11.2521 80.6037L11.2521 80.6927L17 84.7832L17 89.6443L8.7192 83.2714L-8.30516e-07 90Z"
                          fill="#2B77F6"
                        />
                      </svg>
                    </div>

                    <div className="how-work__line-blue-column-x">
                      <svg width="17" height="90" viewBox="0 0 17 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line
                          x1="8"
                          y1="3"
                          x2="7.99999"
                          y2="61"
                          stroke="#2B77F6"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray="1 16"
                        />
                        <path
                          d="M-8.30516e-07 90L-6.02481e-07 84.7832L6.25931 80.3073L6.25931 80.2184L-2.12488e-07 75.8612L0 71L8.79226 77.6396L17 71.3261L17 76.5725L11.2521 80.6037L11.2521 80.6927L17 84.7832L17 89.6443L8.7192 83.2714L-8.30516e-07 90Z"
                          fill="#2B77F6"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="how-work__image  how-work__image--last stack column center">
                    <Image
                      className="how-work__image--server"
                      src="/img/webprotection/w_server-decor-red.svg"
                      width="139"
                      height="93"
                      alt="how-work image"
                    />

                    <Image src="/img/webprotection/w_server-red.png" width="201" height="197" alt="how-work image" />

                    <div className="how-work__image-label stack align-center">
                      <Typography className="underline" tag="p" weight="300" color="opacity70" center>
                        {t.common.webserver}
                      </Typography>
                      <span className="how-work__item-help stack center">
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            opacity="0.7"
                            d="M2.41398 7.02659V4.83992C3.14287 4.80436 3.71176 4.62659 4.12065 4.30659C4.53843 3.98659 4.74732 3.54659 4.74732 2.98659V2.79992C4.74732 2.34659 4.6051 1.98659 4.32065 1.71992C4.03621 1.44436 3.65398 1.30659 3.17398 1.30659C2.65843 1.30659 2.2451 1.45325 1.93398 1.74659C1.63176 2.03992 1.42732 2.41325 1.32065 2.86659L0.333984 2.49325C0.413984 2.20881 0.52954 1.9377 0.680651 1.67992C0.840651 1.41325 1.03621 1.18214 1.26732 0.986586C1.50732 0.782141 1.78732 0.622141 2.10732 0.506585C2.42732 0.39103 2.79621 0.333252 3.21398 0.333252C4.04065 0.333252 4.69398 0.559919 5.17398 1.01325C5.65398 1.46659 5.89398 2.07992 5.89398 2.85325C5.89398 3.27992 5.81843 3.65325 5.66732 3.97325C5.52509 4.28436 5.33843 4.55103 5.10732 4.77325C4.87621 4.99547 4.61398 5.17325 4.32065 5.30659C4.02732 5.43992 3.73398 5.53325 3.44065 5.58659V7.02659H2.41398ZM2.93398 9.95992C2.64954 9.95992 2.44065 9.88881 2.30732 9.74659C2.18287 9.60436 2.12065 9.4177 2.12065 9.18659V9.01325C2.12065 8.78214 2.18287 8.59547 2.30732 8.45325C2.44065 8.31103 2.64954 8.23992 2.93398 8.23992C3.21843 8.23992 3.42287 8.31103 3.54732 8.45325C3.68065 8.59547 3.74732 8.78214 3.74732 9.01325V9.18659C3.74732 9.4177 3.68065 9.60436 3.54732 9.74659C3.42287 9.88881 3.21843 9.95992 2.93398 9.95992Z"
                            fill="var(--clr-default-470)"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
