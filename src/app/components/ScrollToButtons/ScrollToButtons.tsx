import { animateScroll as scroll } from 'react-scroll';

interface ScrollButtonProps {
  value: number,
}

export default function ScrollButton(props: ScrollButtonProps) {
  let amount: number = props.value < 0 ? (window.innerHeight + Math.abs(props.value)) : (window.innerHeight - props.value)
  const handleScroll = () => {
    scroll.scrollMore(amount, {smooth:'easeInOutCubic'})
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
