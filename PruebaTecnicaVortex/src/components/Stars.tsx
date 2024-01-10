export default function Stars({ cantidad }: { cantidad: number }) {
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= cantidad) {
      stars.push(<Star key={i} filled />);
    } else {
      stars.push(<Star key={i} />);
    }
  }

  return <div className="flex">{stars}</div>;
}

interface StarProps {
  filled?: boolean;
}

const Star = ({ filled }: StarProps) => {
    const currentColor= filled ? '#0DA5DA' : 'black'
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={filled ? '#0DA5DA' : 'black'}
      xmlns="http://www.w3.org/2000/svg"
      stroke= {currentColor}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7881 3.21068C11.2365 2.13274 12.7635 2.13273 13.2119 3.21068L15.2939 8.2164L20.6979 8.64964C21.8617 8.74293 22.3336 10.1952 21.4469 10.9547L17.3296 14.4817L18.5875 19.7551C18.8584 20.8908 17.623 21.7883 16.6267 21.1798L12 18.3538L7.37335 21.1798C6.37703 21.7883 5.14164 20.8908 5.41252 19.7551L6.67044 14.4817L2.55309 10.9547C1.66645 10.1952 2.13833 8.74293 3.30206 8.64964L8.70615 8.2164L10.7881 3.21068Z"
        
      />
    </svg>

   
  );
};
