import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Links.scss';

const LINK_NAMES = {
  home: 'HomePage',
  sandbox: 'Sandbox',
};

type Link = {
  name: string;
  path: string;
};

const Links = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string>(LINK_NAMES.home);

  const links: Link[] = [
    { name: LINK_NAMES.home, path: '/' },
    { name: LINK_NAMES.sandbox, path: '/sandbox' },
  ];

  const handleOptionClick = (option: Link) => {
    navigate(option.path);
    setSelectedOption(option.name);
  };

  return (
    <div className="links">
      {links.map((link) => {
        return (
          <div
            className={`${link} link-container ${selectedOption === link.name ? 'selected' : ''}`}
            onClick={() => {
              handleOptionClick(link);
            }}
          >
            <p>{link.name}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Links;
