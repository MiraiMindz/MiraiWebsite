import { animateScroll as scroll } from 'react-scroll';

export default function ScrollButton() {
  const handleScroll = () => {
    scroll.scrollMore((window.innerHeight + 64), {smooth:'easeInOutCubic'})
  }

  return (
    <button className='scroll-down' onClick={handleScroll}>
      <div>
        <svg viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="71" y="141.711" width="100" height="20" rx="10" transform="rotate(-135 71 141.711)"/>
          <rect x="71" y="141.711" width="20" height="100" rx="10" transform="rotate(-135 71 141.711)"/>
        </svg>
      </div>
    </button>
  );
}
