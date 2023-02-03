import React from 'react';

const Categories = () => {
    const [activeIndex, setActiveIndex] = React.useState(2);
    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]

    return (<div className="categories">
        <ul>
            {categories.map((value, i) => (
                <li onClick={() => setActiveIndex(i)} className={activeIndex === i ? 'active' : ''}>{value}</li>))
            }
        </ul>
    </div>);
};

export default Categories;