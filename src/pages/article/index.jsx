import { Contact, Partners } from '@components/sections';
import { ArticleContent, Interested } from './section';

export const Article = () => {
  return (
    <div className="article">
      <ArticleContent />
      <Interested />
      <Contact />
      <Partners />
    </div>
  );
};
