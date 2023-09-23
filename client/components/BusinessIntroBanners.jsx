import React from 'react';
import { useState } from 'react';
import BusinessIntro from './BusinessIntro';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

const BusinessIntroBanners = () => {
  const [text, setText] = useState('Est. 2023');

  return (
    <div>
      <ul className = 'banner'>
        <li onClick={() => {setText('Est. 2023');}}>About Us</li>
        <li onClick={() => {setText('This is something else');}}>Something Else</li>
      </ul>
      <BusinessIntro intro = {text} />
    </div>
  );
};

export default BusinessIntroBanners;
