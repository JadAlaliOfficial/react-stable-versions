import { Card } from 'antd';
import ShinyText from './blocks/TextAnimations/ShinyText/ShinyText';
import { useTheme } from './ThemeContext';

const ShinyCard = () => {
  const { isDarkMode } = useTheme();

  return (
    <Card
      title={
        <ShinyText
          text="Just some shiny text!"
          disabled={false}
          speed={3}
          className={isDarkMode ? 'custom-class' : 'custom-class light-mode'}
        />
      }
      style={{ width: 300, margin: '0 auto' }}
    >
      <p>This is some dummy content for the card.</p>
      <p>You can add more information here.</p>
      <p>Card content goes in this section.</p>
    </Card>
  );
};

export default ShinyCard;
