import { TopBar } from './TopBar';
import { SearchSection } from './SearchSection';
import { CategoryNav } from './CategoryNav';
import './Header.css'

export const Header = () => {
    return( 
        <div>
            <header className='header'>
                <div className="head-background">
                    <TopBar/>
                    <SearchSection/>
                </div>
                
                    <CategoryNav/>
            </header>
        </div>
    )
}