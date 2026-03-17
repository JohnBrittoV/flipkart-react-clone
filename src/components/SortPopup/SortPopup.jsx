import './popup.css';

const options = [
    "Relevance",
    "Popularity",
    "Price Low to High",
    "Price High to Low",
    "Newest First"
];

export const SortPopup = ({sortOption, setSortOption, closePopup}) => {

    const handleSelect = (option) => {
        setSortOption(option);
        closePopup();
    }

    return(
        <div>
            <div className='overlay' onClick={closePopup}></div>
            <div className='bottom-sheet'>
                <h4>SORT BY</h4>
                <hr />

            {options.map((option) => (
                <div key={option} className='sort-option'
                     onClick={() => handleSelect(option)}>
                    
                    <span>{option}</span>
                    <input type="radio" checked={sortOption === option} readOnly/>
                </div>
            ))}
            </div>
        </div>
    )
}