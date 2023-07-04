import DarkMode from "./DarkMode";

const Header = () => {
    return (
        <div className="h-6 w-full flex justify-between">
            <h2>Logo</h2>
            <DarkMode/>
        </div>
    );
};

export default Header;