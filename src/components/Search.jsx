import data from '../../api/products.json'
import { useState, useEffect } from 'react';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        const results = data.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredResults(results);
    }, [searchTerm, data]);

    return (
        <div className='flex flex-col'>
            <input
                placeholder='Search'
                type="text"
                id="searchInput"
                className='bg-white rounded-lg w-56 h-9 px-3 text-lg focus:outline-none'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            {searchTerm !== '' && filteredResults.length > 0 ?
                <div
                    id='results'
                    className='bg-white w-56 divide-y divide-solid absolute mt-9 border border-b-[#D9D9D9] border-x-[#D9D9D9]'
                >
                    {filteredResults.map((item) => (
                        <div className='flex items-center justify-around hover:bg-black/5' key={item.id}>
                            <img className='size-14 object-cover' src={item.img} alt={item.alt} />
                            <div className='w-32 text-left py-4'>
                                <p className='font-text text-sm capitalize' key={item.id}>{item.title}</p>
                                <p className='font-text text-xs text-black/60' key={item.id}>£{item.price}</p>
                            </div>
                        </div>
                    ))}

                </div>
                :
                null
            }

        </div>
    );
}