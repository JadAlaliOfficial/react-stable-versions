import { Card } from "antd";
import ShinyText from "./blocks/TextAnimations/ShinyText/ShinyText";
import { useTheme } from "./ThemeContext";
import FadeContent from "./blocks/Animations/FadeContent/FadeContent";

const ShinyCard = () => {
  const { isDarkMode } = useTheme();

  return (
    <FadeContent
      blur={true}
      duration={500}
      easing="ease-out"
      initialOpacity={0}
    >
      <div>
        <Card
          title={
            <ShinyText
              text="Just some shiny text!"
              disabled={false}
              speed={3}
              className={
                isDarkMode ? "custom-class" : "custom-class light-mode"
              }
            />
          }
          style={{
            width: 'auto',
            margin: "0 auto",
          }}
        >
          <div className="text-lg font-bold mb-2 flex justify-between"><p>Daily</p><p>$24.25</p></div>
          <div className="flex justify-between"><p>Weekly</p><p>$240</p></div>
        </Card>
      </div>
    </FadeContent>
  );
};

export default ShinyCard;
