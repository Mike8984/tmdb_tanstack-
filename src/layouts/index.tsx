import { Outlet } from "react-router"

function RootLayout() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <h2 className="title">Movies</h2>
                </div>
            </header>
            <main className="main">
                <div className="container">
                    <Outlet />
                </div>
            </main>
            <footer className="footer">
                <div className="container">
                    <h3>Copyright</h3>
                </div>
            </footer>
        </>
    );
}

export default RootLayout