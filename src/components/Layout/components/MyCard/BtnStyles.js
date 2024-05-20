const AddBtnStyle = {
    padding: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
    color: 'var(--text-color)',
};

const WatchBtnStyle = {
    backgroundColor: 'var(--primary-color)',
    color: 'black',
    fontFamily: `'Oswald', sans-serif`,
    padding: '2px',
    width: '96px',
    fontSize: '1.6rem',
    '&:hover': { backgroundColor: 'var(--primary-color)', opacity: '0.7' },
};

export { AddBtnStyle, WatchBtnStyle };
