const MainLayout = ({children}) => {
    return (
        <>
            <header>
                <h1>My App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </header>
            <section>
                {children}
            </section>
        </>
    );
}
 
export default MainLayout;