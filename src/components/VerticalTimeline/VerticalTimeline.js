import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent, TextEvent } from '@merc/react-timeline';

function VerticalTimeline() {
  return (
    <Timeline>
      <Events>
        <TextEvent
          date="1/1/19"
          text={'##Ровоам\n\n### Факты:\n\n![Ровоам](https://filedn.com/lD0GfuMvTstXgqaJfpLL87S/sweet_images/jpg/11/11_1Ki_12_01_RG.jpg)\n\nРовоам — это мужское имя. Так звали одного из сыновей царя Соломона, который стал царём израильского народа после смерти отца.\n\n*   В начале своего царствования Ровоам был суров со своим народом, и тогда десять из двенадцати племён Израиля восстали против него. Эти племена образовали отдельное царство, которое стало называться царство Израиля, Израилем или “Северным царством” (так как к этому царству отошли северные территории).\n\n*   Ровоам продолжал царствовать над южной частью Обещанной Богом Земли. Жителями этих территорий были представители двух израильских племён — Иуды и Вениамина, и поэтому это царство стало называться царством Иуды, Иудеей или “Южным царством”.\n\n* Ровоам был нечестивым царём, который не слушался Яхве и поклонялся ложным богам.\n\n### Ссылки на библейский текст:\n\n* 1 Пар. 3:10\n* 3 Цар. 11:41-43\n* 3 Цар. 14:21\n* Мф. 1:7'.replace(
            '\\n',
            '\n'
          )}
        />

        <TextEvent
          date="1/2/19"
          text="Events alternate by default (given enough space in the browser)"
        />

        <ImageEvent
          date="4/13/19"
          text="You can embed images..."
          src="https://res.cloudinary.com/dovoq8jou/image/upload/v1564772194/jellyfish.jpg"
          alt="jellyfish swimming"
          credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
        >
          <div>
            <UrlButton href="https://unsplash.com/search/photos/undersea">
              View more undersea photos
            </UrlButton>
          </div>
        </ImageEvent>
      </Events>
    </Timeline>
  );
}

export default VerticalTimeline;
