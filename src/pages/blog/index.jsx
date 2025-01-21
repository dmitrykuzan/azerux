import { useRef } from 'react';
import { Contact, Partners } from '@components/sections';
import { BlogContent } from './section';

export const Blog = () => {
  const observerTarget = useRef(null);

  return (
    <>
      <BlogContent observerTarget={observerTarget} />
      <Contact />
      <div ref={observerTarget} style={{ height: '1px' }}></div>

      <Partners />
    </>
  );
};
