import { Outlet } from "react-router"

function RootLayout() {
    return (
        <>
            <header className="header">Header</header>
            <main className="main">
                <div className="container">
                    <Outlet />
                </div>
            </main>
            <footer className="footer">Footer</footer>
        </>
    );
}

export default RootLayout