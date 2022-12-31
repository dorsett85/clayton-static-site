import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { ClassNames } from '@emotion/react';

const LandingBackground: React.FC = () => {
  return (
    <ClassNames>
      {({ css }) => (
        <StaticImage
          src='../../assets/img/snowbird-dark.jpg'
          quality={85}
          className={css({
            height: '100vh'
          })}
          alt=''
        />
      )}
    </ClassNames>
  );
};

export default LandingBackground;
