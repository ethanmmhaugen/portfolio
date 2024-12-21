import './Theme.scss';
import { ThemeType } from '../../../services/theme';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

interface ThemeProps {
  theme: ThemeType;
}

const Theme: React.FC<ThemeProps> = ({ theme }) => {
  const { selectedTheme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="theme">
      <button
        key={theme.class}
        onClick={() => changeTheme(theme)}
        className={theme.class === selectedTheme.class ? 'active' : ''}
      >
        {theme.name}
      </button>
    </div>
  );
};
export default Theme;
