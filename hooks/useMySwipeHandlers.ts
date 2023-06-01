import { scroller, Link as ScrollLink } from 'react-scroll';
import { useSwipeable } from 'react-swipeable';
/*
function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= windowHeight && rect.right <= windowWidth;
}*/

export default function useMySwipeHandlers(sec: string, dec: string, offsetup: number, offsetdown: number, prevscroll: boolean) {
  return useSwipeable({
    onSwipedUp: (e) => {
      scroller.scrollTo(sec, { smooth: true, offset: offsetup, duration: 200 });
      //console.log(sec, e);
    },
    onSwipedDown: (e) => scroller.scrollTo(dec, { smooth: true, offset: offsetdown, duration: 200 }),
    preventScrollOnSwipe: prevscroll,
    trackMouse: true,
  });
}
